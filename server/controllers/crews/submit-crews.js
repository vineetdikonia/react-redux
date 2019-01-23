const crews = require('../../models').crews;

module.exports = (req, res) => {
    if (!req.body) return res.sendStatus(400)
    var crewsData = new crews(req.body);
    crewsData.save()
        .then(item => {
            res.status(200).send("Success, Your Crew has been saved to the database!")
        })
};