const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use("/static", express.static('./static/'));

//Routes
app.use(require('./routes/routes'));
app.use(require('./routes/controllers'));

app.listen(port);
console.log('Server started at http://localhost:' + port);