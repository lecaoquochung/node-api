"use strict"

// path at top level module
require("app-module-path").addPath(__dirname);

// Express
var express = require('express');
var app = express();

app.get('/api', function(req, res){
	res.send('NODE API');
});

// Server
var server = app.listen(8001, function(){
	console.log('NODE-API started on port 8001');
});
