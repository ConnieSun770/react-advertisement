const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')

const PORT = 8080
const webpackDevConfig = {
    mode:'development',
    devtool:'eval-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            inject:'body',
            title:'React App',
            filename:'index.html',
            template:path.join(__dirname,'../src/index.html')
        }),
        new OpenBrowserPlugin({
            url:`http://localhost:${PORT}/#/`
        }),
    ]
}

module.exports = merge(webpackDevConfig,webpackConfigBase)
