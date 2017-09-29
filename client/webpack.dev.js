const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const output_path = path.resolve(__dirname, '../www');

module.exports = merge(common,{
  output: {
    path: output_path,
    filename: '[name].[hash].bundle.js',
  },
  plugins: [

    new CleanWebpackPlugin([output_path], {allowExternal: true}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../www'),
    hot: true
  },
});