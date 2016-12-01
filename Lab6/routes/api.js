var express = require('express');
var employeeController = require('../controllers/employeeController');
var router = express.Router();


router.get('/', function(req, res) {
    res.json({ message: 'welcome to our Employees api!' });
});

router.route('/employees')
    .get(employeeController.index)
    .post(employeeController.store);

router.route('/employees/:emp_no')
    .get(employeeController.show)
    .put(employeeController.update)
    .delete(employeeController.destroy);

module.exports = router;