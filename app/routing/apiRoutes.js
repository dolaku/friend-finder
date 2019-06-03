const path = require('path');
const friendsData = require("../data/friends.js");

module.exports = (app) => {

    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });

    app.post('/api/friends', (req, res) => {
        console.log(req.body);
        
        var bestMatch = {
            name: "",
            photo: "",
            topMatch: 1000
        
        };
        
        let yourScores = [];
        let scoreDiff;

        // push 10 survey inputs into yourScores array
        for (let i = 0; i < 10; i++) {
            yourScores.push(req.body.scores[i]);
        }

        for (let i = 0; i < friendsData.length; i++) {
            scoreDiff = 0;

            for (j = 0; j < 10; j++) {
                scoreDiff += Math.abs(yourScores[j] - friendData[i].scores[j]);
            }

            if (scoreDiff < topMatch) {
                topMatch = scoreDiff;
                bestMatch = friendData[i].name;
                bestMatchPhoto = friendData[i].photo;
            }
        }

        friends.push(req.body);
        res.json(bestMatch);

    });

}