// Load required packages
var User = require('../models/User');

// Create endpoint /api/users for POST
module.exports.store = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New Restaurant reviewer has been added to the team!' });
    });
};

// Create endpoint /api/users for GET
module.exports.index = function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};