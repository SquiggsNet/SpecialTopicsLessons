module.exports.index = function(req, res) {
    //get some actor data from mysql sakila

    console.log("In the GET method");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM employees ORDER BY emp_no DESC LIMIT 0,10;',function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json(rows);

        });

        console.log(query.sql);

    });
};

module.exports.show = function(req, res) {
    //get a specific actor data from mysql sakila

    var emp_no = req.params.emp_no;

    console.log("In the GET method with params");

    req.getConnection(function(err,connection){

        var query = connection.query('SELECT * FROM employees WHERE emp_no = ?;',[emp_no] ,function(err,rows)     {

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
    var birth_date = req.body.birth_date;
    var gender = req.body.gender.toUpperCase();
    var hire_date = req.body.hire_date;

    req.getConnection(function(err,connection){

        var query = connection.query('INSERT INTO employees (first_name, last_name, birth_date, gender, hire_date) VALUES (?,?,?,?,?);',[first_name, last_name, birth_date, gender, hire_date] ,function(err,rows)     {

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

    var emp_no = req.params.emp_no;
    var first_name = req.body.first_name.toUpperCase();
    var last_name = req.body.last_name.toUpperCase();
    var birth_date = req.body.birth_date;
    var gender = req.body.gender.toUpperCase();
    var hire_date = req.body.hire_date;

    req.getConnection(function(err,connection){

        var query = connection.query('UPDATE employees SET first_name=?, last_name=?, birth_date=?, gender=?, hire_date=? WHERE emp_no=? ;',[first_name, last_name, birth_date, gender, hire_date, emp_no] ,function(err,rows)     {

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

    var emp_no = req.params.emp_no;

    req.getConnection(function(err,connection){

        var query = connection.query('DELETE FROM employees WHERE emp_no=? ;',[emp_no] ,function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({message: 'Employee Deleted'});

        });

        console.log(query.sql);

    });

};