var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var stRouter = require('./routes/st'); //Conectar con ruta st
var psRouter = require('./routes/ps'); //Conectar con ruta ps

var app = express();


app.use(cors());//Se usa cors
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/st', stRouter);//Conectar y usar ruta st
app.use('/ps', psRouter);//Conectar y usar ruta ps


module.exports = app;