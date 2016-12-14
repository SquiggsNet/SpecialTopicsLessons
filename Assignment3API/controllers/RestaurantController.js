/**
 * Created by inet2005 on 12/9/16.
 */

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/test/restaurants:27017'); // connect to our database

var Restaurant = require('../models/Restaurant');

module.exports.index = function(req, res) {
    Restaurant.find(function(err, restaurants) {
        if (err)
            res.send(err);

        res.json(restaurants);
    }).limit( 10 ).sort( { _id: -1 } );
};

module.exports.store = function(req, res) {

    var restaurant = new Restaurant();      // create a new instance of the Restaurant model
    // set the restaurant info(comes from the request)
    restaurant.address =
    {
        building: req.body.building,
        coord: [req.body.coordOne, req.body.coordTwo],
        street: req.body.street,
        zipcode: req.body.zipcode
    };
    restaurant.borough = req.body.borough;
    restaurant.cuisine = req.body.cuisine;
    // restaurant.grades =
    // [{
    //     date:{
    //         $date: req.body.gDate,
    //         grade: req.body.gGrade,
    //         score: req.body.gScore
    //     }
    // }];
    restaurant.name = req.body.name;
    restaurant.restaurant_id = req.body.restaurant_id;

    // save the restaurant and check for errors
    restaurant.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Restaurant created!' });
    });

};

module.exports.show = function(req, res) {
    Restaurant.findById(req.params.restaurant_id, function(err, restaurant) {
        if (err)
            res.send(err);
        res.json(restaurant);
    });
};

//fix create then look into update
module.exports.update = function(req, res) {

    // use our restaurant model to find the bear we want
    Restaurant.findById({_id: req.params.restaurant_id}, function(err, restaurant) {

        if (err)
            res.send(err);

        //need to insert update info


        restaurant.address =
        {
            building: req.body.building,
            coord: [req.body.coordOne, req.body.coordTwo],
            street: req.body.street,
            zipcode: req.body.zipcode
        };
        restaurant.borough = req.body.borough;
        restaurant.cuisine = req.body.cuisine;
        // restaurant.grades =
        // {
        //     date:{
        //         $date: req.body.gDate,
        //         grade: req.body.gGrade,
        //         score: req.body.gScore
        //     }
        // };
        restaurant.name = req.body.name;
        restaurant.restaurant_id = req.body.restaurant_id;

        // save the restaurant
        restaurant.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Restaurant updated!' });
        });

    });
};

module.exports.destroy = function(req, res) {
    Restaurant.remove({_id: req.params.restaurant_id},function(err, restaurant) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted Restaurant' });
    });
};
