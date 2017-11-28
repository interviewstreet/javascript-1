const alloff = require('./weeks/week0');
const week1 = require('./weeks/week1');

module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "import"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".json"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".jsx"
    ],
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ],
  },
  "extends": [
    "eslint:recommended"
  ],
  "parser": "babel-eslint",
  "rules": Object.assign(alloff, week1)
};
