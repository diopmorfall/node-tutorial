var http = require("http"); //* needed module to work with a server
var server = http.createServer(function(req, res){
    //* starting a server, the callback runs whenever we make a request
    console.log("Request made" + req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'}) //* setting the response headers
    res.end("Ayo blue lockers") //? ending the request with some data
});

server.listen(4000, '127.0.0.1'); //* now the server is ready to listen for requests
console.log("Ego is listening to you")
//todo: try this locally