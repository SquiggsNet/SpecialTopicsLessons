var express = require('express');
var router = express.Router();
var BearsController = require('../controllers/BearsController');

router.use(function (req,res,next) {
    //do logging
    console.log('something is happening in the API');
    next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ message: 'welcome to our Employees api!' });
});


//add more routes here
router.route('/bears')
    .post(BearsController.store)
    .get(BearsController.index);


router.route('/bears/:bear_id')
    .get(BearsController.show);
    //.put(BearsController.update)
    //.delete(BearsController.destroy);



module.exports = router;
/**
 * Created by inet2005 on 12/6/16.
 */
