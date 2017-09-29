# eslint-config-loanmarket-base

This is the base eslint configuation for Loan Market’s javascript development.
This package is built on top of [airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base). It does not include any React or test runner specific configuration options.

## Installation

```bash
npm install --save-dev eslint-config-loanmarket-base eslint eslint-config-airbnb-base eslint-plugin-import babel-eslint
```

## Basic usage

Create a `.eslintrc.json` file in the base of your new projects directory.

**.eslintrc.json
```
{
  "env": {},
  "extends": [
    "loanmarket-base"
  ],
  "plugins": [],
  "rules": {}
}

```

For more advance usage checkout out the eslint documentation - https://eslint.org/docs/user-guide/configuring
