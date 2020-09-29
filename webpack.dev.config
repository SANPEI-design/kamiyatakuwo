const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    index: path.join(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}