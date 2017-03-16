'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {type:String, required: true, index:true},
  text: {type:String, required:true, form:{type: 'textarea', rows: 'auto'}},
  author: {type: Schema.Types.ObjectId, ref: 'author', required: true}
});

var Post;
var modelName = 'post';

try {
  Post = mongoose.model(modelName);
} catch(e) {
  Post = mongoose.model(modelName, PostSchema);
}

module.exports = Post;