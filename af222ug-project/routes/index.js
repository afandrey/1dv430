var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Whippet Race Live' });
});

/* GET live result page */
router.get('/liveresults', function(req, res) {
	res.render('liveresults', { title: 'Live Resultat' });
});

/* GET old results page */
router.get('/archive', function(req, res) {
	res.render('archive', { title: 'Arkiv' });
});

/* GET gallery page */
router.get('/gallery', function(req, res) {
	res.render('gallery', { title: 'Galleri' });
});

/* GET blog page */
router.get('/guestbook', function(req, res) {
	res.render('guestbook', { title: 'Gästbok' });
});

/* GET links page */
router.get('/links', function(req, res) {
	res.render('links', { title: 'Länkar' });
});

router.get('/160507', function(req, res) {
	res.render('160507', { title: '160507' });
});

router.get('/160716', function(req, res) {
	res.render('160716', { title: '160716' });
});

module.exports = router;
