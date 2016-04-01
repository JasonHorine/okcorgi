var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.findOne({ _id: '56fead1ae4b0281bef93a752' }, 'name', function(err, corgi) {
    if (err) console.log(err);
    console.log(corgi);
  });
});



module.exports = router;
