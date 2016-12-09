var express = require('express');
var router = express.Router();
var BearsController = require('../controllers/BearsController');
var RestaurantController = require('../controllers/RestaurantController');
var UserController = require('../controllers/UserController');
var AuthController = require('../controllers/AuthController');

router.use(function (req,res,next) {

  console.log('Something is happening in our API');
  next();
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to our API"});
});

//add more routes
router.route('/restaurants')
    .get(RestaurantController.index);
    //.post(AuthController.isAuthenticated, BearsController.store);

router.route('/restaurants/:restaurant_id')
    .get(RestaurantController.show);

router.route('/bears')
    .get(AuthController.isAuthenticated, BearsController.index)
    .post(AuthController.isAuthenticated, BearsController.store);



router.route('/bears/:bear_id')
   .get(AuthController.isAuthenticated, BearsController.show)
   .put(AuthController.isAuthenticated, BearsController.update)
   .delete(AuthController.isAuthenticated, BearsController.destroy);

router.route('/users')
    .post(AuthController.isAuthenticated, UserController.store)
    .get(AuthController.isAuthenticated, UserController.index);



module.exports = router;
