'use strict';

require("app-module-path").addPath(__dirname + "/../../");

var math = require('sample/math');

exports.test_add = function (test) {
    test.equal(math.add(1, 1), 2);
    test.done();
};

exports.test_subtract = function (test) {
    test.equals(math.subtract(4,2), 2);
    test.done();
};
