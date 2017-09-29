const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./src/theme');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: 'Output Management',
        template: './src/index.html'
      }),
    new ExtractTextPlugin({
      filename: '[name]-[chunkhash].css',
      disable: false,
      allChunks: true,
    }),
  ],
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader']
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          }]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader:'file-loader'
        }
      }
    ]
  }
};