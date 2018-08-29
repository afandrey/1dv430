var PostModel = require('./PostModel');

module.exports = function updatePost(req, res) {
	var postId = req.params.id;
	var post = req.body;
	PostModel
		.update({_id: postId}, {
			title: post.title,
			author: post.author,
			body: post.body
		})
		.then(
			function(status) {
				res.sendStatus(200);
			},
			function(err) {
				res.sendStatus(400);
			}
		);
}