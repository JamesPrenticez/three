const path = require('path')
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client?reload=true', './client/index.js'],
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],      
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}