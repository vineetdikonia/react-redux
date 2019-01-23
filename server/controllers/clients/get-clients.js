const clients = require('../../models').clients;

module.exports = (req, res) => {
    // Find all lists belonging clients

    clients.findAll().then(instancesArray => {
        if (instancesArray) {
            res.send(instancesArray);
        } else {
            res.send();
        }
    }).catch(() => res.send());
};