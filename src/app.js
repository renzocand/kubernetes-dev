const express = require ('express');
const morgan = require ('morgan');
const bodyParser = require('body-parser')

require('./database');
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(morgan('dev')); 

app.use(require('./routes/index'));

module.exports = app;