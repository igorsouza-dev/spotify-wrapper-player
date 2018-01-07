const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './example'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, './example'),
    port: 8081,
    host: '127.0.0.1',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
        }],
      },
    ],
  },
};
