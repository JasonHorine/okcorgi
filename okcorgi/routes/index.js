var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  Corgi.findOne({pawLeft: null, pawRight: null}, 'name age url pawRight', function(err, corgi) {
    if (err) console.log(err);
    console.log(corgi);

  res.render('index', { corgi: corgi });
  });
});



module.exports = router;
