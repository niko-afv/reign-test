'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var article_routes = require('./routes/article');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', article_routes);

module.exports = app;