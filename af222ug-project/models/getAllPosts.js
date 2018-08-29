var PostModel = require('./PostModel');

module.exports = function getAllPosts(req, res) {
	PostModel
		.find()
		.then(
			function(posts) {
				res.json(posts);
			},
			function(err) {
				res.sendStatus(400);
			}
		);
}