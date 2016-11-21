var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

router.get('/actors', function(req, res) {
  //get some actor data from mysql sakila
  req.getConnection(function(err,connection){

    connection.query('SELECT * FROM actor',function(err,rows)     {

      if(err)
        console.log("Error Selecting : %s ",err );

      res.json(rows);

    });

  });
});

module.exports = router;
