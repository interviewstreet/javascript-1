module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "loanmarket-base"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "mocha"
  ],
  "rules": {
    "react/jsx-first-prop-new-line": 0,
    "react/forbid-prop-types": [
      2, { "forbid": ["any", "array"] }
    ],
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/no-array-index-key": 0,
    "react/display-name": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "mocha/no-exclusive-tests": "error",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }
    ]
  }
};
