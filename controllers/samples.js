"use strict"

var url = require('url');

var samplesController = {};

samplesController.sayHello = function (req, res) {
    var data = {};

    return res.send("Hello");
}

samplesController.sayHelloToSomeone = function (req, res) {
    var data = {};

    // Task: still not parse url
    // hello?name=friend
    // https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost
    // var get_params = url.parse(req.originalUrl, true).query;

    // if (Object.keys(params).length == 0) {
    //
    //     return res.end('Hello all');
    // } else {
    //
    //     return res.send('Hello ' + req.params.name);
    // }

    return res.send('Hello ' + req.params.name);
}

module.exports = samplesController;
