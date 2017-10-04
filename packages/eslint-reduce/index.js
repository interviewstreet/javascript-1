const path = require('path')
const _ = require('lodash')

function mergeShallow (a, b) {
  var unionKeys = _.union(_.keys(a), _.keys(b))
  return unionKeys.reduce((p, k) => {
    if (a[k] === undefined) p[k] = b[k]
    else if (b[k] === undefined) p[k] = a[k]
    else if (typeof b[k] === 'string' || typeof b[k] === 'number') p[k] = b[k]
    else if (_.isArray(a[k]) && _.isArray(b[k])) p[k] = _.union(a[k], b[k])
    else if (_.isObject(a[k]) && _.isObject(b[k])) p[k] = _.extend(a[k], b[k])
    return p
  }, {})
}

function eslintReduce (eslintConfig, options) {
  const location = options && options.location !== undefined ? options.location : './node_modules/'
  const verbose = options && !!options.verbose
  const exclude = []
  if (eslintConfig.extends) {
    const notReduceable = []
    const extracted = []
    let newConfig = {}
    eslintConfig.extends.forEach((plugin, index) => {
      let importedConfig
      var dir
      if (!exclude.includes(plugin)) {
        try {
          dir = location ? path.resolve(location, `eslint-config-${plugin}`) : `eslint-config-${plugin}`
          if (verbose) console.log('resolving', dir)
          importedConfig = require(dir)
        } catch (e) {
          try {
            dir = location ? path.resolve(location, plugin) : plugin
            if (verbose) console.log('failed, now trying to resolving', dir)
            importedConfig = require(dir)
          } catch (e) {
            if (verbose) console.log('failed to resolve:', plugin)
          }
        }
      }
      if (!importedConfig) {
        notReduceable.push(plugin)
      } else {
        extracted.push(plugin)
        const reduced = eslintReduce(importedConfig, options)
        newConfig = mergeShallow(newConfig, reduced)
      }
    })
    newConfig = mergeShallow(newConfig, eslintConfig)
    newConfig.extends = _.union(_.without(newConfig.extends, ...extracted), notReduceable)
    return newConfig
  }
  return eslintConfig
}

module.exports = eslintReduce
