var net = require("net"),
port = Number(process.env.PORT || 6100);

var relay = net.createServer(function (socket) {

	console.log("render socket connected");

	socket.on("data", function(data){

		console.log("rendering: " + data);
		socket.write("render successful");
	});

	socket.on("close", function(data){

		console.log("closed");
	});

}).listen(port);
