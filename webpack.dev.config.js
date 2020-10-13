const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    'js/main': ['@babel/polyfill', path.join(__dirname, 'src', 'js', 'index.js')],
    'serviceworker': ['@babel/polyfill', path.join(__dirname, 'src', 'serviceworker.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
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