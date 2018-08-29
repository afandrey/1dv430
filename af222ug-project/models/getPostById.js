var PostModel = require('./PostModel');

module.exports = function getPostById(req, res) {
	var postId = req.params.id;
	PostModel
		.findById(postId)
		.then(
			function(post) {
				res.json(post);
			},
			function(err) {
				res.sendStatus(400);
			}
		)
}