var path = require('path');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var webpack = require('webpack');

module.exports = {
  entry: {
    'prod-bundle': './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
    new ImageminPlugin(),
    new webpack.ProvidePlugin({ Papa: 'papaparse' }),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000&mimetype=application/font-woff'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=20000000'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=20000000'
      },
      { 
        test: /\.png$/,
        loader: 'url-loader?limit=20000000'
      }
    ]
  }
};