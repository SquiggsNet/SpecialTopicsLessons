module.exports.index = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the GET method");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM employee',function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json(rows);

        });

        console.log(query.sql);

    });
};

module.exports.show = function(req, res) {
    //get a specific actor data from mysql sakila

    var employee_id = req.params.employee_id;

    console.log("In the GET method with params");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM employee WHERE employee_id = ?;',[employee_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json(rows);

        });

        console.log(query.sql);

    });
};

module.exports.store = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the POST method to create new employee");

    var first_name = req.body.first_name.toUpperCase();
    var last_name = req.body.last_name.toUpperCase();

    req.getConnection(function(err,connection){

        var query = connection.query('INSERT INTO employee (first_name, last_name) VALUES (?,?);',[first_name, last_name] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Employee Created'});

        });

        console.log(query.sql);

    });

};

module.exports.update = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the PUT method to update employee");

    var employee_id = req.params.actor_id;
    var first_name = req.body.first_name.toUpperCase();
    var last_name = req.body.last_name.toUpperCase();

    req.getConnection(function(err,connection){

        var query = connection.query('UPDATE employee SET first_name=?, last_name=? WHERE employee_id=? ;',[first_name, last_name, employee_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Employee Updated'});

        });

        console.log(query.sql);

    });

};

module.exports.destroy = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the DELETE method");

    var employee_id = req.params.employee_id;

    req.getConnection(function(err,connection){

        var query = connection.query('DELETE FROM employee WHERE employee_id=? ;',[employee_id] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Employee Deleted'});

        });

        console.log(query.sql);

    });

};