const webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextWebpackPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

console.log('当前运行环境', nodeEnv);

let plugins = [

    //清空build目录
    new CleanWebpackPlugin(['build']),

    //全局变量
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(nodeEnv)
        }
    }),

    //提取公共脚本
    new webpack.optimize.CommonsChunkPlugin({
        name: ['script/vendor']
    }),

    //提取样式等文件
    new ExtractTextWebpackPlugin({
        filename: 'style/style-[hash:5].css'
    }),

    //首页配置
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
]

//生成环境需要特殊处理部分
if(isProduction){
    plugins.push(
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            output:{
                comments: false
            },
            compress: {
                warnings: false
            }
        })
    )
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    entry: {
        'script/app': ['entry.jsx'],
        'script/vendor': ['react','react-dom']
    },
    output: {
        filename: '[name]-[hash:5].js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'src')
        ],
        alias: {
            "components": path.resolve(__dirname, "src/components"),
            "views": path.resolve(__dirname, "src/views"),
            "app": path.resolve(__dirname, "src/app"),
            "sass": path.resolve(__dirname, "src/sass"),
            "utils": path.resolve(__dirname, "src/utils")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader?limit=1000&name=image/[md5:hash:base64:10].[ext]']
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2)$/,
                use: ['file-loader?limit=1000&name=font/[md5:hash:base64:10].[ext]']
            }
        ]
    },
    plugins
}