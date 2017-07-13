// var webpack = require('webpack')
// var webpackDevMiddleware = require('webpack-dev-middleware')
// var webpackHotMiddleware = require('webpack-hot-middleware')
// var config = require('./webpack.config')

var express = require('express')
var app = express()
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const pg = require('pg');
const path = require('path');
const pool = require('./lib/db');

const indexPath = path.join(__dirname, 'index.html')
const publicPath = express.static(path.join(__dirname, 'public'))

//////////////////////////////////////////////////////////
// initialize app
//////////////////////////////////////////////////////////
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})

// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))

// app.use(express.static(path.join(__dirname, 'public')));
app.use('/public', publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.get('/hello', function(req, res, next) {
    res.send('Hello')
})



//////////////////////////////////////////////////////////////
// routes and APIs
/////////////////////////////////////////////////////////////
require("./backend_APIs/oils_routes.js").init(app, pool);
require("./backend_APIs/device_routes.js").init(app, pool);
require("./backend_APIs/schedule_routes.js").init(app, pool);
