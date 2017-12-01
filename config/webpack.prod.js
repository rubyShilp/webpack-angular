var webpack = require('webpack');
let path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/case/',    
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        })
    ]
});