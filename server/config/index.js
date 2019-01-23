const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const parseJson = bodyParser.json();
const configureSequelize = require('./sequelize');
const routes = require('../routes');
const app = express();

const server = http.Server(app);

module.exports = () => {
    // Sync the db
    configureSequelize();

    // Routes
    routes(app);
    
    return server;
};
