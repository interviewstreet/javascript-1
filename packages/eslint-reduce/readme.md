# eslint-reduce

[![Build Status](https://travis-ci.org/loanmarket/javascript.svg?branch=master)](https://travis-ci.org/loanmarket/javascript)

This is a simple utility for reducing your eslint config into a single `.eslintrc.json` file without any external dependencies.

We made this tool to help us manage shared our eslint configs across multiple projects while using [Code Climate](codeclimate.com) for quality control.

Code Climate currently does not allow users to import custom eslint config files - see this issue https://github.com/codeclimate/codeclimate-eslint/issues/86.


## installation

```
# to use within a project
npm install eslint-reduce --save-dev

# or globally to use as a CLI utility
npm install eslint-reduce --global
```

## CLI usage

```
  Usage: eslint-reduce [options]

  Options:

    -V, --version          output the version number
    -f, --file             eslint file to reduce
    -o, --output           output file
    -v, --verbose          print information on process
    -h, --help             output usage information
```

## Use in javascript

```js
var eslintReduce = require('eslint-reduce')
var eslintConfig = require('./your-eslint-config')

var reducedConfig = eslintReduce(config)
```

## API

**eslintReduce(file, [options])**

returns eslint config object.

Options include:

```
{
  verbose: true|false // log process. default: false
  location: string // specify where to look for extensions.
  exclude: [ strings ] // an array of extendions that you want to ignore
}
```
