// pirate model and schema here
var mongoose = require('mongoose’);  // must do this before using it

var corgiSchema = new mongoose.Schema({ // create a schema
  name: { type: String, required: true }, // if it’s not here, it cannot be written to the database
  email: { type: String, required: true, unique: true },
  favorite: String,
  created_at: Date,
  updated_at: Date
});

var Corgi = mongoose.model('Corgi', corgiSchema);

// Make this available to our other files

module.exports = Corgi;
