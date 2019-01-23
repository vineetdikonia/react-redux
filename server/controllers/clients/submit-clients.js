const clients = require('../../models').clients;

module.exports = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    var clientsData = new clients(req.body);
    clientsData.save()
        .then(data => {
            res.status(200).send("Success, Your Client has been saved to the database!")
        }).catch(function (error) {
            console.log(error);
        })
};