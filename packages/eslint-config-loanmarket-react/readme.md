# eslint-config-loanmarket-react

This is the react specific eslint configuation for Loan Market’s javascript development.
This package is built on top of [airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base). It does not include any React or test runner specific configuration options.

## Installation

```bash
npm install --save-dev eslint-config-loanmarket-react eslint
```

## Basic usage

Create a `.eslintrc.json` file in the base of your new projects directory.

**.eslintrc.json
```
{
  "env": {},
  "extends": [
    "loanmarket-react"
  ],
  "plugins": [],
  "rules": {}
}

```

For more advance usage checkout out the eslint documentation - https://eslint.org/docs/user-guide/configuring

## Using with Code Climate

Currently Code Climate does not support importing eslint configs through NPM.
To circumvent this limitation we provide a compiled eslint file that you can import directly in your `.codeclimate.yml`.

```yml
engines:
  eslint:
    enabled: true
    channel: "eslint-4"
    config:
      config: ./node_modules/eslint-config-loanmarket-react/dist/.eslintrc.json
  duplication:
    enabled: true
    config:
      languages:
         javascript:
           mass_threshold: 50
    checks:
      Similar code:
        enabled: false
ratings:
  paths:
    - "**.js"
```

You will need to exclude this file from your `.gitignore`, so that the codeclimate can access it directly.
