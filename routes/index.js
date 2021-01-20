var express = require('express');
var router = express.Router();
const freightcontroller = require('../controllers/freightController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('indexweb', { title: 'Express' });
});
router.get('/ourclient', function(req, res, next) {
  res.render('ourclient', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/logistic', function(req, res, next) {
  res.render('logistic', { title: 'Express' });
});

router.get('/freight', freightcontroller.landingFreight);
router.post('/inlandf', freightcontroller.landingInlandf)
router.post('/airf', freightcontroller.landingairf)
router.post('/seaf', freightcontroller.landingseaf)


router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/airfreight', freightcontroller.ShowAirfreight);
router.get('/airfreightdel/:id',freightcontroller.DeleteAirfreight)
router.get('/airfreightupdate/:id',freightcontroller.UpdateAirfreightPage)
router.post('/airfreightupdate/:id',freightcontroller.UpdateAirfreight)

router.get('/inlandfreight', freightcontroller.ShowLandfreight);
router.get('/inlandfreightdelkg/:id', freightcontroller.Deletelandfrightkg);
router.get('/inlandfreightdelcharter/:id', freightcontroller.Deletelandfrightcharter);
router.get('/inlandpageupdatekg/:id', freightcontroller.UpdateLandfreightPagekg);
router.get('/inlandpageupdatecharter/:id', freightcontroller.UpdateLandfreightPagecharter);
router.post('/inlandupdatekg/:id', freightcontroller.UpdateLandfreightkg);
router.post('/inlandupdatecharter/:id', freightcontroller.UpdateLandfreightcharter);


router.get('/seafreight', freightcontroller.ShowSeafreight);
router.get('/seafreightdel/:id', freightcontroller.DeleteSeafreight);
router.get('/seafreightupdate/:id',freightcontroller.UpdateSeafreightPage)
router.post('/seafreightupdate/:id',freightcontroller.UpdateSeafreight)

router.post('/airfreight',freightcontroller.NewAirfreight);
router.post('/seafreight',freightcontroller.NewSeafright);
router.post('/inlandfreightkg',freightcontroller.Newlandfrightkg);
router.post('/inlandfreightcharter',freightcontroller.Newlandfrightcharter);


module.exports = router;
