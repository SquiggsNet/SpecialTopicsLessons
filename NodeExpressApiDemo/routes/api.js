var express = require('express');
var actorController = require('../controllers/actorController');
var router = express.Router();


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/actors')
    .get(actorController.index)
    .post(actorController.store);

router.route('/actors/:actor_id')
    .get(actorController.show)
    .put(actorController.update)
    .delete(actorController.destroy);

module.exports = router;
