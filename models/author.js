'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  surname: {type:String, required:true, index:true},
  forename: {type:String, index:true}
});

var Author;
var modelName = 'author';

try {
  Author = mongoose.model(modelName);
} catch(e) {
  Author = mongoose.model(modelName, AuthorSchema);
}

module.exports = Author;