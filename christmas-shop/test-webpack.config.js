// "dev": "set NODE_ENV=development&&webpack",
// "start": "set NODE_ENV=development&&webpack serve --open",
// "watch": "set NODE_ENV=development&&webpack --watch",
// "build": "set NODE_ENV=production&&webpack"

// $ npm install --save-dev webpack webpack-cli webpack-dev-server
// $ npm install --save-dev html-webpack-plugin
// $ npm install --save-dev style-loader css-loader postcss-loader postcss postcss-preset-env sass-loader sass mini-css-extract-plugin

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

console.log(mode + ' mode');

module.exports = {
  mode: mode,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [

        ]
      }
    ],
  },
};
