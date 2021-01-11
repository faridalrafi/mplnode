var express = require('express');
var router = express.Router();
const freightcontroller = require('../controllers/freightController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/airfreight', freightcontroller.ShowAirfreight);

router.get('/inlandfreight', freightcontroller.ShowLandfreight);

router.get('/seafreight', freightcontroller.ShowSeafreight);

router.post('/airfreight',freightcontroller.NewAirfreight);
router.post('/seafreight',freightcontroller.NewSeafright);
router.post('/inlandfreightkg',freightcontroller.Newlandfrightkg);
router.post('/inlandfreightcharter',freightcontroller.Newlandfrightcharter);


module.exports = router;
