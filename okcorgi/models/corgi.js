// pirate model and schema here
var mongoose = require('mongoose');  // must do this before using it

var corgiSchema = new mongoose.Schema({ // create a schema
  name: { type: String, required: true }, // if it’s not here, it cannot be written to the database
  age: Number,
  url: String,
  pawLeft: Number,
  pawRight: Number
});

var Corgi = mongoose.model('Corgi', corgiSchema);

// Make this available to our other files

module.exports = Corgi;
