const tenants = require('../../models').tenant_infos;

module.exports = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    var tenantsData = req.body;
    tenantsData.map(data => {
        tenants.create(data)
            .then(item => {
                res.status(200).send({ data: item, message: "Success, Your Building data has been saved to the database!" })
            }).catch(function (error) {
                res.status(400).send(error);
            })
    });  
};