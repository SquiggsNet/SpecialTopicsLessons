/**
 * Created by inet2005 on 12/6/16.
 */

var mongoose   = require('mongoose');
//mongoose.connect('mongodb://localhost/test/bears:27017'); // connect to our database

var Bear = require('../models/Bear');


module.exports.store = function(req, res) {

    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)
    //bear.userId = req.user._id;

    // save the bear and check for errors
    bear.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Bear created!' });
    });

};

// module.exports.index = function(req, res) {
//     Bear.find({userId: req.user._id}, function(err, bears) {
//         if (err)
//             res.send(err);
//
//         res.json(bears);
//     });
// };

module.exports.index = function(req, res) {
    Bear.find(function(err, bears) {
        if (err)
            res.send(err);

        res.json(bears);
    });
};

// module.exports.show = function(req, res) {
//     Bear.find({_id: req.params.bear_id, userId: req.user._id}, function(err, bear) {
//         if (err)
//             res.send(err);
//         res.json(bear);
//     });
// };

module.exports.show = function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
        if (err)
            res.send(err);
        res.json(bear);
    });
};

// module.exports.update = function(req, res) {
//
//     // use our bear model to find the bear we want
//     Bear.find({_id: req.params.bear_id, userId: req.user._id}, function(err, bear) {
//
//         if (err)
//             res.send(err);
//
//         bear.name = req.body.name;  // update the bears info
//
//         // save the bear
//         bear.save(function(err) {
//             if (err)
//                 res.send(err);
//
//             res.json({ message: 'Bear updated!' });
//         });
//
//     });
// };

module.exports.update = function(req, res) {

    // use our bear model to find the bear we want
    Bear.findById(req.params.bear_id, function(err, bear) {

        if (err)
            res.send(err);

        bear.name = req.body.name;  // update the bears info

        // save the bear
        bear.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Bear updated!' });
        });

    });
};

// module.exports.destroy = function(req, res) {
//     Bear.remove({_id: req.params.bear_id, userId: req.user._id}, function(err, bear) {
//         if (err)
//             res.send(err);
//
//         res.json({ message: 'Successfully deleted' });
//     });
// };

module.exports.destroy = function(req, res) {
    Bear.remove(function(err, bear) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
};
