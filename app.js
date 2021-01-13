var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var exchangeRouter = require('./routes/exchange')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', exchangeRouter);

/* Catches all other errors */
app.use((req, res, next) => res.status(404).json({error: `We don't recognize \`${req.hostname}${req.originalUrl}\``})); 

module.exports = app;
