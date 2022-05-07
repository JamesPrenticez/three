const path = require('path')
const express = require('express')

const server = express()

/* This is only required in development to allow for hot reloading - remove in production*/
let webpack = require('webpack');
let webpackConfig = require('../webpack.config.js')
let compiler = webpack(webpackConfig);

server.use(require('webpack-dev-middleware')(compiler, {}))
server.use(require('webpack-hot-middleware')(compiler, {
  path: '/__webpack_hmr',
}))
/* ---------------------------------------------------------------------------------------*/

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server