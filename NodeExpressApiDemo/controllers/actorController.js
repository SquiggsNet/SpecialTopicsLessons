/**
 * Created by inet2005 on 11/22/16.
 */

module.exports.index = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the GET method");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM actor',function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json(rows);

        });

        console.log(query.sql);

    });
};

module.exports.show = function(req, res) {
    //get a specific actor data from mysql sakila

    var actor_id = req.params.actor_id;

    console.log("In the GET method with params");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM actor WHERE actor_id = ?;',[actor_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json(rows);

        });

        console.log(query.sql);

    });
};

module.exports.store = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the POST method to create new actor");

    var first_name = req.body.first_name.toUpperCase();
    var last_name = req.body.last_name.toUpperCase();

    req.getConnection(function(err,connection){

        var query = connection.query('INSERT INTO actor (first_name, last_name) VALUES (?,?);',[first_name, last_name] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Actor Created'});

        });

        console.log(query.sql);

    });

};

module.exports.update = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the PUT method to update actor");

    var actor_id = req.params.actor_id;
    var first_name = req.body.first_name.toUpperCase();
    var last_name = req.body.last_name.toUpperCase();

    req.getConnection(function(err,connection){

        var query = connection.query('UPDATE actor SET first_name=?, last_name=? WHERE actor_id=? ;',[first_name, last_name, actor_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Actor Updated'});

        });

        console.log(query.sql);

    });

};

module.exports.destroy = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the DELETE method");

    var actor_id = req.params.actor_id;

    req.getConnection(function(err,connection){

        var query = connection.query('DELETE FROM actor WHERE actor_id=? ;',[actor_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Actor Deleted'});

        });

        console.log(query.sql);

    });

};

