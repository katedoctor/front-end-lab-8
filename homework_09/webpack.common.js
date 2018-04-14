const webpack = require('webpack');
const path = require('path');
const CleanWebPlugin = require('clean-webpack-plugin');
const HTMLWebPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(_dirname, 'src'),
  entry: {
    'app.bundle.js' : ['./app.js', './clock/clock.js', './clock/canvasState.js'],
    'style.css' : ['./app.scss', './clock/clock.scss'],
    'index.html' : './app.html',
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CleanWebPlugin(['bin'],{
      root: "/",
      verbose: true,
      dry: true,
      "watch": true
    }),
    new HTMLWebPlugin({    }),
    new ExtractTextPlugin('style.css')
  ],
  output: {
    path: path.resolve(_dirname, 'bin'),
    filename: '[name]',
  },
  module:{
    rules:[{
      test:/\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/,
      options: { presets: ["es2015"] },
    },
    {
      test: /\.*(sass|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:['css-loader, sass-loader'],
        options: {sourceMap: true},
      }),
    }
  ]}

};