'use strict';

require("app-module-path").addPath(__dirname + "/../../");

var _           = require("lodash");
var mocha       = require("mocha");
var assert      = require("chai").assert;
var Promise     = require("bluebird");

var testUtilities = require("tests/testUtilities");

var statusesController = require("controllers/statuses");

describe("controllers/statuses", function () {

    describe("#ping"), function(done) {

        it("Return pong", function(done) {
            var data = {};

            testUtilities.simulateEndpoint(statusesController.ping, data)
            .then(function(res) {
                console.log("/////////////" + JSON.stringify(res));
                assert.equal(res.code, 404);
                done();
            });
        });
    }
});
