var express = require('express');
var app = express();
var port = 3000;
var dt = new Date().toString();

var middlewr = require('./middleware.js');

// module.exports = dt;
//app.use(middlewr.requireAuthentication);
app.use(middlewr.logger);
//
// app.get('/', function (req, res) {
// 	res.send('Hello http server');
// });

//set the route
app.get('/about', middlewr.requireAuthentication, function (req, res) {
	res.send('in about page!!');
});

app.use(express.static(__dirname+'/public'));

app.listen(port, function (){
	console.log('Express Server Started on ' , port , '!');
});