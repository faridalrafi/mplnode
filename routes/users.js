var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('accountmgt', { title: 'Express' });
});
router.get('/new', function(req, res, next) {
  res.render('addnewacc', { title: 'Express' });
});

module.exports = router;
