var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.findOne({ name: 'Bob' }, 'name age url', function(err, corgi) {
    if (err) console.log(err);
    console.log(corgi);

  res.render('index', { title: 'Express' });
  });
});



module.exports = router;
