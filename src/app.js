'use strict';

const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./db/db');
require('./models/product');

const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;