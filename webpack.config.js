var path = require('path')
var webpack = require('webpack')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  mode: 'development',
  entry: {
    app: PATHS.src + '/index.ts'
  },
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",
    overlay: true,

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack boilerplate',
      hash: true,
      filename: 'index.html',
      template: PATHS.src + '/index.html',
      scripts: ['./demo.js']
    }),
    new WebpackBuildNotifierPlugin({
      title: 'My Project Webpack Build'
    }),
    new webpack.IgnorePlugin(/test\.ts$/)
  ]
}
