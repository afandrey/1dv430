var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
	title: {type: String, required: true},
	body: String,
	author: {type: String, required: true},
	posted: {type: Date, default: Date.now},
	likes: {default: 0}
}, {collection: 'post'});

var PostModel = mongoose.model("PostModel", PostSchema);

module.exports = PostModel;