"use strict"

require("app-module-path").addPath(__dirname + "/../");

var validator = require('validator');


var stringsController = {};

stringsController.toUppercase = function (req, res) {
    // javascript
    // var str = "Hello World!";
    // var res = str.toUpperCase();
    var data = {};    
    var str = req.params.string;

    return res.send(str.toUpperCase());
}

module.exports = stringsController;
