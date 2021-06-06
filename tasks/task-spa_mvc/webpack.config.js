const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const DIST_PATH =  path.resolve(__dirname, 'dist')

module.exports = {
  entry: path.resolve(__dirname, 'src/script.js'),
  output: {
    path: DIST_PATH,
    filename: 'script[hash].bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      inject: true,   
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
   rules: [
     {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
     },
     {
       test: /\.css$/,
       use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
       ]
     },
     {
       test: /\.(png|svg|jpg|gif)$/,
       use: [
          'file-loader'
       ]
     }
   ]
  },
  devServer: {
    contentBase: DIST_PATH,
    port: 9000
  },
  devtool: 'inline-source-map',
};