var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/test/bears:27017'); // connect to our database
var Bear = require('../models/Bear');

module.exports.store = function(req, res) {
    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    bear.save(function (err) {
        if (err)
            res.send(err);

        res.json({message: 'Bear created!'});
    });
};

module.exports.index = function(req, res) {
    Bear.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
};

module.exports.show = function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
};

//module.exports.update;
//module.exports.delete;