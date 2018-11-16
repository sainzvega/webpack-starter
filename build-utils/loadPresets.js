const webpackMerge = require("webpack-merge");

const applyPresets = env => {
  const { presets } = env;    
  const mergedPresets = [].concat(...[presets]); // copied for sean larking. If presets is an array why do we have to do this?
  const mergedConfigs = mergedPresets.map(preset =>
    require(`./presets/webpack.${preset}`)
  );

  return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
