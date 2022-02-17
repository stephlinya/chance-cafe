const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const path = require('path');

module.exports = {
    entry: './src/cats.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    
        { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      ]
    },
    devServer: {
      static: path.join(__dirname, 'src'),
      hot: true,
      open: true,
      port: 8000,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/cats.html',
        filename: 'cats.html',
        inject: 'body'
      }),
      new Dotenv()
    ]
}