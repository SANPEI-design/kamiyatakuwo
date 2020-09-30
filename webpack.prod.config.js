const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    index: path.join(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'docs', 'js'),
    filename: 'main.js'
  }
}