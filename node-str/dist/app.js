'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var app = express();
var router = express.Router();

//conecta ao banco
mongoose.Promise = Promise;
mongoose.connect(config.connectionString);

module.exports = mongoose;

// Carregar Models
var Product = require('./models/Product');
var Customer = require('./models/customer');
var Order = require('./models/order');

// Carregar as rotas
var indexRoute = require('./routes/index-route');
var productRoute = require('./routes/product-route');
var customerRoute = require('./routes/customer-route');
var orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
//Todo conteúdo vai ser convertido para json

app.use(bodyParser.urlencoded({ extended: false }));
//para codificar as urls também


app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);

module.exports = app;