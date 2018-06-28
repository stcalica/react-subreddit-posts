const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const htmlWebpackPlugin = new HtmlWebpackPlugin({
//   template: path.join(__dirname, 'example/src/index.html'),
//   filename: './index.html'
// });

module.exports = {
  entry: path.join(__dirname, 'example/src/index.js'),
  output: {
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react'],
              plugins: ['transform-class-properties']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // plugins: [ htmlWebpackPlugin ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
  }
};
