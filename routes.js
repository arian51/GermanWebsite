var express = require('express');
var router = express.Router();
const app = express();

// //Middle ware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });


// Define the home page route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/myCharts', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/charts.html'));
});


module.exports = router;
