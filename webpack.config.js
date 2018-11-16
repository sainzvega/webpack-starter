const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const loadEnvConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode: mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    loadEnvConfig(mode)
  );
};
