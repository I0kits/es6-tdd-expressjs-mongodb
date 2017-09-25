const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'Output Management',
        template: './src/index.html'
      }),
    new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {loader: 'html-loader'},
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  }
};