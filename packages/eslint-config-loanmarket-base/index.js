module.exports = {
  "extends": [
    "eslint:recommended",
    "airbnb-base"
  ],
  "env": {
    "es6": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
    "sourceType": "module"
  },
  "rules": {
    "no-mixed-operators": ["error", { "allowSamePrecedence": true }],
    "arrow-body-style": 0,
    "no-fallthrough": ["error", { "commentPattern": "break[\\s\\w]*omitted" }],
    "no-param-reassign": ["error", { "props": false } ],
    "class-methods-use-this": ["error", { "exceptMethods": ["getChildContext", "componentDidMount", "componentWillMount", "componentWillUpdate", "componentWillReceiveProps"] }],
    "no-underscore-dangle": 0,
    "new-cap": ["error", {
      "capIsNew": false
    }],
    "func-names": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "max-len": [0, { "code": 120, "ignoreStrings": true }],
    "curly": 0,
    "indent": [
      "error", 2
    ],
    "linebreak-style": [
      "error", "unix"
    ],
    "quotes": [
      "warn", "single", {"avoidEscape": true, "allowTemplateLiterals": true}
    ],
    "semi": [
      "error", "always"
    ],
    "no-console": 0,
    "consistent-return": 0,
    "no-unused-expressions": [
      "error", { "allowShortCircuit": true, "allowTernary": false }
    ],
    "no-plusplus": 0,
    "prefer-destructuring": 0,
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "padded-blocks": ["warn", "never"],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ]
  }
};
