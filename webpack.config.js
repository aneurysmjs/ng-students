'use strict';

let path = require('path'),
    webpack = require('webpack');

module.exports = {
   context: __dirname,
   entry: [
      './client/app/app.js'
   ],
   output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
   },
   module: {
      preLoaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: 'jshint-loader'
         }
      ],
      loaders: [
         {
            test: /\.js$/,
            loader: 'babel',
            exclude: [
               path.resolve(__dirname, 'node_modules')
            ],
            query: {
               presets: ['es2015']
            }
         },
         {test: /\.html$/, loader: 'html', exclude: /node_modules/},
         {test: /\.css$/,  loader: 'style!css', exclude: /node_modules/},
         {test: /\.(jpe?g|png|gif|svg)$/i, loader:'url'}
      ]
   }
};