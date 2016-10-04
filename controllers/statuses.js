"use strict";

var Promise            = require("bluebird");

var statusesController = {};

statusesController.ping = function (req, res) {
    var data = {
        message_code: 200,
        message: "OK",
        result: "pong"
    };

    return res.status(200).json(data);
};

module.exports = statusesController;
