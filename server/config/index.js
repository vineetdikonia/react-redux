const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const parseJson = bodyParser.json();
const configureSequelize = require('./sequelize');

const app = express();

const server = http.Server(app);
const jobs = require('../models').jobs;
const masters = require('../models').masters;


module.exports = () => {
    // Sync the db
    configureSequelize();

    app.get('/api/check', (req, res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));
    app.get('/api/get_job', function (req, res) {
        jobs
        .findAll()
            .then((jobs) => res.status(200).send(jobs))
    });
    app.post('/api/submit-form', parseJson, (req, res) => {
        if (!req.body) return res.sendStatus(400)
        var regdata = new Jobs(req.body);
        regdata.save()
        .then(item => {
            res.status(200).send("Success, Your registration has been saved to the database!")
        })
    });

    app.post('/api/submit-master', parseJson, (req, res) => {
        if (!req.body) return res.sendStatus(400)
        var masterdata = new masters(req.body);
        masterdata.save()
            .then(item => {
                res.status(200).send("Success, Your master has been saved to the database!")
            })
    })

    app.get('/api/get-master', function (req, res) {
        masters
            .findAll({
                where: {
                    type: req.query.type
                },
            })
            .then((master) => res.status(200).send(master))
    });
    
    return server;
};
