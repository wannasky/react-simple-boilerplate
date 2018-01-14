const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

//服务器端口
const SERVER_PORT = 8282;

config.entry['script/app'].unshift('webpack-dev-server/client?http://localhost:'+SERVER_PORT+'/');
let compiler = webpack(config);
let server = new WebpackDevServer(compiler,{
    inline: true,
    hot: true
});

server.listen(SERVER_PORT);