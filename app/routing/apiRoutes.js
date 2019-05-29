const path = require('path');
const friendsData = require("../data/friends.js");

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(path.jpin(__dirname, '../data/friends.js'));
    });

    app.post('/api/friends', (req, res) => {
        friendsData.push(req.body);
    });

}