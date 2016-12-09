/**
 * Created by inet2005 on 12/9/16.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    address: {
        building: String,
        coord: Array,
        street: String,
        zipcode: String
    },
    borough: String,
    cuisine: String,
    grades:{
        date:{
            $date: String,
            grade: String,
            score: String
        }
    },
    name: String,
    restaurant_id: String

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);