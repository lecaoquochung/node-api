"use strict";

require("app-module-path").addPath(__dirname + "/../");

var Promise = require("bluebird");
var testUtilities = {};

testUtilities.simulateEndpoint = function (endpoint, data) {
    var request = {
        body: data,
        query: data
    };

    // if (data.token) {
    //     var decodedToken = auth.verifyToken(data.token);
    //
    //     request.user = {
    //         id: decodedToken.sub,
    //         group_id: decodedToken.gid,
    //         company_id: decodedToken.cid
    //     };
    // }

    var response = new Response();

    return new Promise(function (resolve, reject) {
        response.on("finish", function () {
            var data = JSON.parse(response.body);

            if (data) {
                data.code = response.statusCode;
            } else {
                data = {
                    code: response.statusCode
                };
            }

            resolve(data);
        });

        endpoint(request, response);
    });
};

module.exports = testUtilities;
