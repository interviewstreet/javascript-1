var test = require('tape')
var proxyquire = require('proxyquire').noCallThru()

test('it returns the same object if there is no extends', (t) => {
  var config = {
    parser: 'babel-eslint',
    parserOptions: {
      'ecmaFeatures': {
        'experimentalObjectRestSpread': true,
        'jsx': true
      }
    },
    plugins: [
      'react',
      'mocha'
    ],
    rules: {
      'react/jsx-first-prop-new-line': 0,
      'react/forbid-prop-types': [
        2, { 'forbid': ['any', 'array'] }
      ],
      'react/jsx-filename-extension': 0,
      'jsx-a11y/img-has-alt': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'mocha/no-exclusive-tests': 'error'
    }
  }
  var eslintMerge = proxyquire('../index.js', {})
  t.same(eslintMerge(config, { location: false }), config)
  t.end()
})

test('it reducers all importable config modules and removes them from the final extends options', (t) => {
  var config = {
    plugins: [
      'react',
      'mocha'
    ],
    rules: {
      'react/forbid-prop-types': [
        2, { 'forbid': ['any', 'array'] }
      ],
      'mocha/no-exclusive-tests': 'error'
    },
    extends: ['inherited']
  }
  var inherited = {
    rules: {
      'semi': [
        'error', 'always'
      ],
      'no-console': 0,
      'no-param-reassign': [
        'error',
        {
          'props': false
        }
      ]
    }
  }
  var eslintMerge = proxyquire('../index.js', { inherited })
  var merged = eslintMerge(config, { location: false })
  // includes all rules
  t.same(merged.rules['semi'], ['error', 'always'])
  t.same(merged.rules['no-console'], 0)
  t.same(merged.rules['no-param-reassign'], ['error', { 'props': false }])
  t.same(merged.rules['react/forbid-prop-types'], [2, { 'forbid': ['any', 'array'] }])
  t.same(merged.rules['mocha/no-exclusive-tests'], 'error')
  t.same(merged.plugins, ['react', 'mocha'])
  t.end()
})

test('it ignores all config modules that it cannot find in node_modules', (t) => {
  var config = {
    plugins: [
      'react'
    ],
    rules: {
      'mocha/no-exclusive-tests': 'error'
    },
    extends: ['not-found']
  }
  var eslintMerge = proxyquire('../index.js', {})
  var merged = eslintMerge(config, { location: false })
  t.same(merged.extends, config.extends)
  t.end()
})

test('properties set at top level configs override those imported via extends', (t) => {
  var config = {
    rules: {
      'no-param-reassign': [
        'warn',
        {
          'props': false
        }
      ]
    },
    extends: ['inherited']
  }
  var inherited = {
    rules: {
      'no-param-reassign': [
        'error',
        {
          'ignorePropertyModificationsFor': [
            'acc',
            'e',
            'ctx',
            'req',
            'request',
            'res',
            'response',
            '$scope'
          ]
        }
      ]
    }
  }
  var eslintMerge = proxyquire('../index.js', { inherited })
  var merged = eslintMerge(config, { location: '' })
  t.same(merged.rules['no-param-reassign'], config.rules['no-param-reassign'])
  t.end()
})

test('it goes deep', (t) => {
  var config = {
    extends: ['plugin:react/recommended', 'inherited']
  }
  var inherited = {
    rules: {
      'no-param-reassign': [
        'warn',
        {
          'props': false
        }
      ]
    },
    extends: ['deeper']
  }
  var deeper = {
    extends: [
      'eslint:recommended',
      'eslint-config-airbnb-base'
    ],
    rules: {
      'something-deep': 111,
      'no-param-reassign': [
        'error',
        {
          'ignorePropertyModificationsFor': [
            'acc',
            'e',
            'ctx',
            'req',
            'request',
            'res',
            'response',
            '$scope'
          ]
        }
      ]
    }
  }
  var eslintMerge = proxyquire('../index.js', { inherited, deeper })
  var merged = eslintMerge(config, { location: false })
  t.same(merged.extends, [ 'eslint:recommended', 'eslint-config-airbnb-base', 'plugin:react/recommended' ])
  t.same(merged.rules['something-deep'], deeper.rules['something-deep'])
  t.same(merged.rules['no-param-reassign'], inherited.rules['no-param-reassign'])
  t.end()
})

test('it can import extensions eslint-config-[some-extension] as either full name or just [some-extension]', (t) => {
  var inherited = {
    rules: {
      'no-param-reassign': [
        'warn',
        {
          'props': false
        }
      ]
    }
  }
  var eslintMerge = proxyquire('../index.js', { 'eslint-config-inherited': inherited })
  var relative = eslintMerge({
    extends: ['inherited']
  }, { location: false })
  var absolute = eslintMerge({
    extends: ['eslint-config-inherited']
  }, { location: false })
  t.same(absolute, relative)
  t.end()
})
