let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:{
        'main': ['babel-polyfill','./scripts/app.js','./scripts/polyfill.js'],
    },
    context: path.join(process.cwd(), 'app'),
    resolve:{
        modules: [
            'node_modules',
            path.resolve(process.cwd(), 'app')
        ],
        extensions: ['.js','.css','.less']
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|swf)$/,
                use: 'url-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{loader:'css-loader'},{loader:'less-loader'}]
                })
            },
            {
                test: /\.css$/,
                include: path.resolve(process.cwd(), 'app', 'scripts'),
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: path.resolve(process.cwd(), 'app', 'scripts'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader:'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }]
                })
            }
        ]
    },
    plugins:[
        new webpack.ProgressPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),//作用域提升
        new webpack.optimize.CommonsChunkPlugin({
            names: 'main',
            filename:"main.bundle[hash:7].js"
        }),
        new ExtractTextPlugin('[name].bundle[hash:7].css'),
        new HtmlWebpackPlugin({ 
            template: './index.html',
            favicon: './favicon.ico',
            chunks:['main'],
            minimize: true
        })
    ]
}