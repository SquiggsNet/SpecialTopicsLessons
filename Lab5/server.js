var http = require('http');
var builtinModules = require('builtin-modules');
var isBuiltinModule = require('is-builtin-module');
var validator = require('validator');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, function(){
    console.log('Server running at http://'+hostname+':'+port+'/');

    //step 1 - display builtin-modules
    console.log('built in modules');
    console.log(builtinModules);

    //step 2 - displays whether module IS builtin
    console.log('is-builtin?');
    console.log('fs:');
    console.log(isBuiltinModule('fs'));
    console.log('http:');
    console.log(isBuiltinModule('http'));
    console.log('net:');
    console.log(isBuiltinModule('net'));
    console.log('url:');
    console.log(isBuiltinModule('url'));
    console.log('unicorn:');
    console.log(isBuiltinModule('unicorn'));
    console.log('squiggsnet:');
    console.log(isBuiltinModule('squiggsnet'));
    //=> false :(

    //step 3 - validator
    console.log('Validation:');
    console.log('isNumeric validation on:');
    console.log('Hello World:');
    console.log(validator.isNumeric('Hello World'));
    console.log('H1l2o 3o4l5:');
    console.log(validator.isNumeric('H3l1o Wor7d'));
    console.log('4311030412:');
    console.log(validator.isNumeric('4311030412'));

    //step 4 - sqlite3
    db.serialize(function() {

        db.each("SELECT ArtistId AS id, info FROM Artist", function(err, row) {
            console.log(row.id + ": " + row.info);
        });
    });

    db.close();

});