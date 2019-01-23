const bodyParser = require('body-parser');
const parseJson = bodyParser.json();

const getBuildings = require('../controllers/buildings/get-buildings');
const submitBuildings = require('../controllers/buildings/submit-buildings');
const submitTenantInfo = require('../controllers/buildings/submit-tenant-info');


module.exports = function (app) {
    app.post('/api/submit-buildings', parseJson, (req, res) => {
        submitBuildings(req, res);
    });

    app.post('/api/submit-tenant', parseJson, (req, res) => {
        submitTenantInfo(req, res);
    });

    app.get('/api/get-buildings', function (req, res) {
        getBuildings(req, res);
    });
}