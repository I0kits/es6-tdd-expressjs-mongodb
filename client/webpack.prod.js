const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const output_path = path.resolve(__dirname, '../www');

module.exports = merge(common,{
  output: {
    path: output_path,
    filename: '[name].[chunkhash].bundle.js',
  },
  devtool: 'source-map',

  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new CleanWebpackPlugin([output_path], {allowExternal: true}),
  ],
});