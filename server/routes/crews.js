const bodyParser = require('body-parser');
const parseJson = bodyParser.json();

const getCrews = require('../controllers/crews/get-crews');
const submitCrews = require('../controllers/crews/submit-crews');


module.exports = function (app) {
    app.post('/api/submit-crew', parseJson, (req, res) => {
        submitCrews(req, res);
    });

    app.get('/api/get-crews', function (req, res) {
        getCrews(req, res);
    });
}