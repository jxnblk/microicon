const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, './server/landing/entry.js'),

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
  }
}
