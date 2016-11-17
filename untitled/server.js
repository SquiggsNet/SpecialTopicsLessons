var http = require('http');
var mysql = require('mysql');
var data;
var url = require('url');
var rowCount = 10;


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'inet2005',
    database : 'sakila'
});

function getData(count) {
    connection.connect();

    connection.query('SELECT * FROM film LIMIT 0, '+count+';', function(err, rows, fields) {
        if (err) throw err;

        data=rows;

        // for(var i=0;i<rows.length;i++){
        //     console.log(rows[i].title);
        // }

        //console.log('The solution is: ', rows[0].solution);
    });

    connection.end();

    return data;
}


var hostname = '127.0.0.1';
var port = process.argv[2];

var server = http.createServer(function(req, res){
    var queryData = url.parse(req.url, true).query;
    data - getData(queryData.count);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port+'/');
});