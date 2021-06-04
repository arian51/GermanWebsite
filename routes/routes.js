var express = require('express');
var router = express.Router();
const path = require('path');

// Define the home page route
router.get('/', function(req, res) {
	console.log('here')
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/myCharts', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/charts.html'));
});

module.exports = router;
