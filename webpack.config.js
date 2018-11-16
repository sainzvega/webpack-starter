const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const loadPresets = require("./build-utils/loadPresets");

const loadEnvConfig = env => require(`./build-utils/webpack.${env.mode}`)(env);

module.exports = ({ mode = "production", presets = [] }) => {
  return webpackMerge(
    {
      mode: mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    loadEnvConfig({ mode, presets }),
    loadPresets({ mode, presets })
  );
};
