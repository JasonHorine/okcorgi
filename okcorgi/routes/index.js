var express = require('express');
var router = express.Router();
var Corgi = require('../models/corgi');

/* GET home page. */
router.get('/', function(req, res, next) {
  // get a corgi without any votes (pawRight == null)
  Corgi.findOne({pawRight: null}, 'name age sex interests url', function(err, corgi) { // query database for one non-voted corgi
    if (err) console.log(err);
    console.log(corgi); // for testing
    if (corgi){ // if a corgi is returned, render the index
      res.render('index', { corgi: corgi }); // render the index page with the unvoted corgi
    }
    else { // if no more unvoted corgis were found, redirect to the show all page
      res.redirect('/corgis'); //respond as if a GET to the /corgis URL arrived
    }
  });
});



module.exports = router;
