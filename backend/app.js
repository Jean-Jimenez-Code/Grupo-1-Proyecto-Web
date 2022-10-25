var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var db = require('./config/db');//llamar al archivo posicionado en config 

db(); //ejecutar el archivo db

var stRouter = require('./routes/st'); //para conectar con ruta st


var app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/st', stRouter);//para conectar y usar ruta st



module.exports = app;