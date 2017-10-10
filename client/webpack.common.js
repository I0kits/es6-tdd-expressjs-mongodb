const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const theme = require('./src/theme');
const output_path = path.resolve(__dirname, '../www');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: output_path,
    filename: '[name].[hash]-[id].bundle.js',
  },

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
    new CleanWebpackPlugin([output_path], {allowExternal: true}),
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
          use: ['css-loader', 'sass-loader','less-loader']
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