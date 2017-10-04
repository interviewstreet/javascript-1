#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var program = require('commander')
var mkdirp = require('mkdirp')
var _ = require('lodash')

var eslintReduce = require('../index.js')

function list (val) {
  return val.split(',')
}

program
  .version('1.0.0')
  .option('-f, --file <file>', 'eslint file to reduce')
  .option('-o, --output <file>', 'output file')
  .option('-v, --verbose', 'print information on process')
  .option('-x, --exclude <items>', 'list of plugins to exclude', list)
  .parse(process.argv)

if (!program.file) process.exit()

var config = require(path.resolve(program.file))

var newConfig = eslintReduce(config, { verbose: program.verbose, exclude: program.exclude })

if (!_.isEmpty(newConfig)) {
  var string = JSON.stringify(newConfig, null, ' ')
  if (!program.output) {
    console.log(string)
  } else {
    var directory = path.dirname(program.output)
    try {
      fs.statSync(directory)
    } catch (e) {
      mkdirp.sync(directory)
    }
    fs.writeFileSync(program.output, JSON.stringify(newConfig, null, ' '))
  }
}
