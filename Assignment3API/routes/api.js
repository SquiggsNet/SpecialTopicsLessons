var express = require('express');
var router = express.Router();
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
    .get(RestaurantController.index)
    .post(RestaurantController.store);

router.route('/restaurants/:restaurant_id')
    .get(RestaurantController.show)
    .put(RestaurantController.update)
    .delete(RestaurantController.destroy);

router.route('/users')
    .post(UserController.store)
    .get(AuthController.isAuthenticated, UserController.index);

module.exports = router;
