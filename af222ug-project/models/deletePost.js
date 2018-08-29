var PostModel = require('./PostModel');

module.exports = function deletePost(req, res) {
	var postId = req.params.id;
	PostModel
		.remove({_id: postId})
		.then(
			function() {
				res.sendStatus(200);
			},
			function() {
				res.sendStatus(400);
			}
		);
}