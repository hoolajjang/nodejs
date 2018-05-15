var http = require("http");

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'});
	res.end(req.connection.remoteAddress + ":" + req.connection.remotePort);
}).listen(1818, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1818/');