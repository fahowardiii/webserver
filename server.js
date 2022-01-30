var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs');

var server = http.createServer(function (req, res) {   // 2 - creating  web server
    if( req.url == "/") { // check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // set the response content
        fs.readFile('./index.html', function (err, idexHTML) {
            if (err) {
                throw err;
            }
            res.write(idexHTML);
            res.end();
        });     
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html'});

        fs.readFile('./student.html', function (err, stuHTML) {
            if (err) {
                throw err;
            }
            res.write(stuHTML);
            res.end();

        });
        
    }
    else if (req.url == "/admin") {
        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile('./admin.html', function (err, adminHTML) {
            if (err) {
                throw err;
            }
            res.write(adminHTML);
            res.end();

        });
        
    }
    else{
        res.end("Invalid Request!");
    }  
});

server.listen(5000); // listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')