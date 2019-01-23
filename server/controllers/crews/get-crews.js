const crews = require('../../models').crews;

module.exports = (req, res) => {
    // Find all lists belonging crews

    crews.findAll().then(instancesArray => {
        if (instancesArray) {
            res.send(instancesArray);
        } else {
            res.send();
        }
    }).catch(() => res.send());
};