var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/userController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('accountmgt', { title: 'Express' });
});
router.get('/new', function(req, res, next) {
  res.render('addnewacc', { title: 'Express' });
});

router.post('/validate',usercontroller.validate)

module.exports = router;
