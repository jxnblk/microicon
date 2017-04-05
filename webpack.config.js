
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './server/landing/entry.js',

  output: {
    path: path.join(__dirname, 'server'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
}

