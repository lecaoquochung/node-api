"use strict"

// Path at top level module
require("app-module-path").addPath(__dirname);

// Express
var express = require('express');

// Middlewares
var bodyParser = require('body-parser');
var url = require('url');

// Controller
var statusesController = require("controllers/statuses");
var samplesController = require("controllers/samples");

// Create app
var app = express();

// Use middlewares
app.use(bodyParser.json());

// Route
app.get("/api", function(req, res){
	res.send("NODE API");
});

// statusesController
app.get("/api/v1/ping", statusesController.ping);

// samplesController
app.get("/api/v1/samples/hello", samplesController.sayHello);
app.get("/api/v1/samples/hello/:name", samplesController.sayHelloToSomeone);
// app.get("/api/v1/samples/contacts", samplesController.getContacts);

// Error handling middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('ERROR: Something is missing');
});

// Server
var server = app.listen(8001, function(){
	console.log('NODE-API started on port 8001');
});
