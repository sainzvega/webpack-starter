const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin()]
  };
};
