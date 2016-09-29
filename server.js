"use strict"

// path at top level module
require("app-module-path").addPath(__dirname);

// Express
var express = require('express');
var app = express();

// Controller
var statusesController = require("controllers/statuses");

// route
app.get("/api", function(req, res){
	res.send("NODE API");
});

app.get("/api/v2/ping", statusesController.ping);


// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server
var server = app.listen(8001, function(){
	console.log('NODE-API started on port 8001');
});
