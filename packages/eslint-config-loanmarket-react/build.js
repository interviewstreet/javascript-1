const fs = require('fs');
const _ = require('lodash');
const config = require('./index.js');

const exclude = [];

function reduceExtensions(eslintConfig) {
  if (eslintConfig.extends) {
    const notReduceable = [];
    const extracted = [];
    let newConfig = {};
    eslintConfig.extends.forEach((plugin, index) => {
      let importedConfig
      if(!exclude.includes(plugin)) {
        try {
          importedConfig = require(`eslint-config-${plugin}`);
        } catch (e) {
          try {
            importedConfig = require(plugin);
          } catch (e) {}
        }
      }
      if (!importedConfig) {
        console.log('cannot import:', plugin)
        notReduceable.push(plugin);
      } else {
        console.log('importing:', plugin);
        extracted.push(plugin);
        const reduced = reduceExtensions(importedConfig);
        newConfig = _.merge(newConfig, reduced);
      }
    });
    newConfig = _.merge(newConfig, eslintConfig);
    newConfig.extends = _.union(_.without(newConfig.extends, ...extracted), notReduceable);
    return newConfig;
  }
  return eslintConfig;
}

const newConfig = reduceExtensions(config);
if (!_.isEmpty(newConfig)) {
  try {
    fs.statSync('./dist');
  } catch (e) {
    fs.mkdirSync('./dist');
  }
  fs.writeFileSync('./dist/.eslintrc.json', JSON.stringify(newConfig, null, ' '));
}


