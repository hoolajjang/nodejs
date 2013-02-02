
var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'});
	res.end(req.connection.remoteAddress + ":" + req.connection.remotePort);
}).listen("8080", "192.18.18.102");

