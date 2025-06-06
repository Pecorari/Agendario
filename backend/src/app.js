const express = require('express');
const router = require('./router');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use(router);

module.exports = app;
