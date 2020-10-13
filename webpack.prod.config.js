const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'js/main': ['@babel/polyfill', path.join(__dirname, 'src', 'js', 'index.js')],
    'serviceworker': ['@babel/polyfill', path.join(__dirname, 'src', 'serviceworker.js')]
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].js'
  }
}