const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    })
  ],
  devServer: {
    contentBase: './bin',
    stats: 'errors-only'
  }
});