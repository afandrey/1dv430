var PostModel = require('./PostModel');

module.exports = function createPost(req, res) {
	var post = req.body;
	console.log(post);
	PostModel
		.create(post)
		.then(
			function(postObj) {
				res.json(200);
			},
			function(error) {
				res.sendStatus(400);
			}
		);
}