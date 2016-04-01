var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.find({}, 'name age url pawRight', function(err, allCorgis) {
    if (err) console.log(err);
    console.log(allCorgis);

  res.render('index', { corgisArray: allCorgis });
  });
});



module.exports = router;
