var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    var readStream = fs.createReadStream(`${__dirname}/index.html`, 'utf-8') //? giving the path to the file
    readStream.pipe(res);
});

server.listen(4000, '127.0.0.1');