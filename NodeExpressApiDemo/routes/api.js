var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/actors/:actor_id', function(req, res) {
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
});

router.get('/actors', function(req, res) {
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
});

router.post('/actors', function(req, res) {
  //get some actor data from mysql sakila

  console.log("In the POST method to create new actor");

  var input = JSON.parse(JSON.stringify(req.body));

  req.getConnection(function(err,connection){

    var query = connection.query('INSERT INTO actor (first_name, last_name) VALUES (?,?);',[input.first_name, input.last_name] ,function(err,rows)     {

      if(err)
        console.log("Error Selecting : %s ",err );

      res.json(rows);

    });

    console.log(query.sql);

  });

});



// router.put();
// router.delete();

module.exports = router;
