"use strict";

var fs = require("fs");
var logger = require("services/logger");
var sequelize = require("sequelize");

var dbHostName = process.env.MYSQL_HOST;
var dbHostPort = process.env.MYSQL_PORT;
var dbName = process.env.MYSQL_DATABASE;
var dbUsername = process.env.MYSQL_USER;
var dbPassword = process.env.MYSQL_PASSWORD;

var dockerDB = new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHostName,
    port: dbHostPort,
    dialect: "mysql",
    dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true
    },
    pool: {
        max: 100,
        min: 0,
        idle: 100000
    },
    logging: function (message) {
        logger.debug(message);
    },
    define: {
        // define
    }
});

// Import all model files
var modelsPath = __dirname + "/../models/";
fs.readdirSync(modelsPath).forEach(function (modelFileName) {
    // Simple guard against non-js files in the models directory
    if (modelFileName.indexOf(".js", modelFileName.length - 3) !== -1) {
        dockerDB.import(modelsPath + modelFileName);
    }
});

Object.keys(dockerDB.models).forEach(function (modelName) {
    // Run the associate function on all models that have it
    if ("associate" in dockerDB.models[modelName]) {
        dockerDB.models[modelName].associate(dockerDB.models);
    }
    // Run the initialize function on all models that have it
    if ("initialize" in dockerDB.models[modelName]) {
        dockerDB.models[modelName].initialize(dockerDB.models);
    }
});

module.exports = dockerDB;
