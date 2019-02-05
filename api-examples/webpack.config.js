var path = require('path')
var webpack = require('webpack')
var WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
}

module.exports = {
  mode: 'development',
  entry: {
    app: PATHS.src + '/index.ts'
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
    new WebpackBuildNotifierPlugin({
      title: 'My Project Webpack Build'
    }),
    new webpack.IgnorePlugin(/test\.ts$/)
  ]
}
