var net = require('net');
var fs = require('fs');
var totalClients = 0;
var chatHistory = [];
var messages = [];

var server = net.createServer(function(connection){
	connection.setEncoding("utf8");
	connection.write("Welcome to Matt's chatroom!\n");
	chatHistory.push(connection);
	totalClients++;
	connection.write("There are " + totalClients + " people are in this chatroom\n");
	connection.on("data", function(clientInput){
		var userInput = clientInput.toString().trim();
		var id = chatHistory.indexOf(connection)
		chatHistory.forEach(function(elem){
		elem.write("User " + parseInt(id+1) + ": " + userInput +"\n")
		messages.push(elem);
		
		})
	});
	// connection.on("exit", function(){
	// 	chatHistory.splice(chatHistory.indexOf(connection), 1);

	// 	connection.write("User " + parseInt(id+1) + " has left the chatroom\n")

	// })

});

server.listen(2006, function(){
	console.log("Chatroom up and running");
});



// var connections = [];

// var server = net.createServer()
// server.on("connection", function(connection){
// 	connections.push(connection)
// })