const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(common,{
  plugins: [
    new UglifyJSPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
})