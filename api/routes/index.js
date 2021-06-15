var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to express' });
});

const csvFilePath = 'public/datafiles/state_data.csv';
const csv = require('csvtojson');
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
module.exports = router;
