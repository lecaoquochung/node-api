"use strict";

var Promise            = require("bluebird");

var statusesController = {};

statusesController.ping = function (req, res) {
    return res.send("pong").end();
};

module.exports = statusesController;
