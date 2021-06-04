const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/static", express.static('./static/'));

//Routes
app.use(require('./routes'));  //http://127.0.0.1:8000/    http://127.0.0.1:8000/about

app.listen(port);
console.log('Server started at http://localhost:' + port);