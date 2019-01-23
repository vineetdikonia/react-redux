const bodyParser = require('body-parser');
const parseJson = bodyParser.json();

const getClients = require('../controllers/clients/get-clients');
const submitClients = require('../controllers/clients/submit-clients');


module.exports = function (app) {
    app.post('/api/submit-clients', parseJson, (req, res) => {
        submitClients(req, res);
    });

    app.get('/api/get-clients', function (req, res) {
        getClients(req, res);
    });
}