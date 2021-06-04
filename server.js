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
app.use(require('./routes/routes'));
app.use(require('./routes/controllers'));

app.listen(port);
console.log('Server started at http://localhost:' + port);