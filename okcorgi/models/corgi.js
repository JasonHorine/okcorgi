// corgi schema here
// mlab database: user jasonh password jhorine
// database: okcorgidb
// collection: corgis
var mongoose = require('mongoose');  // must do this before using it

var corgiSchema = new mongoose.Schema({ // create a schema
  name: { type: String, required: true }, // if it’s not here, it cannot be written to the database
  age: Number, //
  sex: Boolean, //female = 0, male = 1
  interests: String,
  url: String, // url to the image
  pawRight: Boolean  // has a pawRight vote = 1
});

var Corgi = mongoose.model('Corgi', corgiSchema);

// Make this available to our other files

module.exports = Corgi;
