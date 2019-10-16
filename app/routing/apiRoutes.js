var friendList = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friendlist", function(req, res) {
        res.json(friendList);
    });

    app.post("/api/friendlist", function(req, res) {
        var newFriendScore = req.body.scores;
        var scoreArr = [];
        var friendCount = 0;
        var bestMatch = 0;

        for(var i = 0; i< friendList.length; i++) {
            var scoreDiff = 0;

            for(var j = 0; j < newFriendScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScore[j])));
            }

            scoreArr.push(scoreDiff);
        }

        for(var i = 0; i < scoreArr.length; i++) {
            if(scoreArr[i] <= scoreArr[bestMatch]) {
                bestMatch = i;
            }
        }

        var bestie = friendList[bestMatch];
        res.json(bestie);

        friendList.push(req.body);
    })
}