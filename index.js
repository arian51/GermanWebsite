const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();
const port = process.env.PORT || 8080;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/static", express.static('./static/'));

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

const dbName = 'myDictionary';
const collName = 'words';

client.connect(function(err) {
    console.log('Connected successfully to server');
    assert.equal(null, err);
    const db = client.db(dbName);

    let HtmlWord = '';
    let HtmlMeaning = '';
    app.post('/', function(req, res) {
        HtmlWord = req.body.word;
        HtmlMeaning = req.body.meaning;
        let myobj = { word: HtmlWord, meaning: HtmlMeaning };
        db.collection("words").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
        res.redirect('back');
    });

    app.get('/myCharts', function(req, res) {
        db.collection("words").find({}).toArray(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                let recData = JSON.stringify(result)
                console.log(result)
                // res.send(result);
            }
        })
        res.sendFile(path.join(__dirname, '/views/charts.html'));
    });

    app.get('/getData', function(req, res) {
        db.collection("words").find({}).toArray(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                let recData = JSON.stringify(result)
                console.log(result)
                res.json(recData);
            }
        })
    });

    app.get('/getWord', function(req, res) {
        db.collection("words").find({}, { "word": 1 }).toArray(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                console.log(result[4])
                // let recData = JSON.stringify(result)
                res.json(result);
            }
        })
    });

    app.get('/myWords', function(req, res) {
        res.sendFile(path.join(__dirname, '/views/words.html'));
    });

});

app.listen(port);
console.log('Server started at http://localhost:' + port);