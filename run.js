<<<<<<< HEAD
var http = require("http");
=======
var http = require("http");
>>>>>>> 340c353e637533466b224c7566c73269b65c9348

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain', 'Access-Control-Allow-Origin':'*'});
	res.end(req.connection.remoteAddress + ":" + req.connection.remotePort);
<<<<<<< HEAD
}).listen(process.env.PORT, process.env.IP);
=======
}).listen("8080", "192.18.18.102");
>>>>>>> 340c353e637533466b224c7566c73269b65c9348
