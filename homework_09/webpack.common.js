const webpack = require('webpack');
const path = require('path');
const CleanWebPlugin = require('clean-webpack-plugin');
const HTMLWebPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(_dirname, 'src'),
  entry: {
    'app.bundle.js' : ['./app.js', './clock/clock.js', './clock/canvasState.js'],
    'style.css' : ['./app.scss', './clock/clock.scss'],
    'index.html' : './app.html',
  },
  output: {
    path: path.resolve(_dirname, 'bin'),
    filename: '[name]',
  },
  module:{
    rules:[{
      test:/\.js$/,
      use: ['babel-loader'],
      options: { presets: ["es2015"] },
    },
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebPlugin(['bin']),
    new HTMLWebPlugin({


    })
  ]
};