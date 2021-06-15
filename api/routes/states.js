var express = require('express');
var router = express.Router();

const csvFilePath = 'public/datafiles/state_data.csv';
const csv = require('csvtojson');
const { json } = require('express');
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
const jsonArray = csv().fromFile(csvFilePath);


router.get('/', function(req, res, next) {
  res.send("State Data:" + jsonArray);
});


module.exports = router;