var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/userController')

/* GET users listing. */
router.get('/', usercontroller.ShowUser);
router.get('/new', function(req, res, next) {
  res.render('addnewacc', { title: 'Express' });
});
router.get('/update/:id',usercontroller.updatepage)
router.get('/del/:id',usercontroller.del)

router.post('/update/:id',usercontroller.update)
router.post('/validate',usercontroller.validate)
router.post('/add',usercontroller.add)
module.exports = router;
