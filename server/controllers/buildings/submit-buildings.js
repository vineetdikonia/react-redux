const buildings = require('../../models').buildings;

module.exports = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    var buildingsData = new buildings(req.body);
    buildingsData.save()
        .then(item => {
            res.status(200).send({data: item, message:"Success, Your Building data has been saved to the database!"})
        }).catch(function (error) {
            res.status(400).send(error);
        })
};