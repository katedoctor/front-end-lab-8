const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackRlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry: {
    'bundle.js' : ['./js/calculating-module.js', './js/interface-module.js', './js/output-module.js'],
    'styles.css' : './styles/styles.css',
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader'],
      }),
    },
    ]
  },
  plugins: [
    new CleanWebpackRlugin(['dist']),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new ExtractTextPlugin('style.css'),
  ],
  output: {
    path: path.resolve('dist'),
    filename: '[name]'
  },
  watch: true
}
