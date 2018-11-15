const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(mode);
  return {
    mode: mode,
    output: {
        filename: "bundle.js"
    }
    plugins: [new HtmlWebpackPlugin()]
  };
};
