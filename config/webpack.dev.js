let webpackMerge = require('webpack-merge');
let path = require('path');
let fs=require('fs');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let commonConfig=require('./webpack.common');
module.exports=webpackMerge(commonConfig,{
    //devtool:'source-map',
    output:{
        path: path.join(process.cwd(), 'dist'),
        publicPath: 'http://192.168.66.10:8082/',    
        filename: '[name].bundle.js',
        chunkFilename: '[main].chunk.js'
    },
    devServer:{
        host:'192.168.66.10',
        stats: 'minimal',
        proxy:[
            {
                context:['/'],
                target:'http://192.168.9.45:8888/',
                changeOrigin:true,
                secure:false
            },
        ]
    }
})
