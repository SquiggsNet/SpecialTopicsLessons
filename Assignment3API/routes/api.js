var express = require('express');
var router = express.Router();
var RestaurantController = require('../controllers/RestaurantController');
var UserController = require('../controllers/UserController');
var AuthController = require('../controllers/AuthController');

router.use(function (req,res,next) {

  console.log('Something is happening in our API');
  next();
});

//example of express middleware function
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({"message": "Welcome to our API"});
});

//add more routes
router.route('/restaurants')
    .get(AuthController.isAuthenticated, RestaurantController.index)
    .post(AuthController.isAuthenticated, RestaurantController.store);

router.route('/restaurants/:restaurant_id')
    .get(AuthController.isAuthenticated, RestaurantController.show)
    .put(AuthController.isAuthenticated, RestaurantController.update)
    .delete(AuthController.isAuthenticated, RestaurantController.destroy);

router.route('/users')
    .post(UserController.store)
    .get(AuthController.isAuthenticated, UserController.index);

module.exports = router;
