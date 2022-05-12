import { scoreCollection } from '../server'
const LEADERBOARD_RESULTS_LIMIT = 10
/**
 * Contains all the access methods to retrieve local and global score objects from MongoDB
 */

//Check if the local score is in the top 10 highest scores for the user
function addScore(request) {
    //If a new local score was created return true else return false
    scoreCollection.insertOne({
        username: request.body.username,
        email: request.body.email,
        highscore: request.body.highscore,
        startImageURL: request.body.startImageURL,
        targetImageURL: request.body.targetImageURL,
        time: request.body.time
    })
}

//Return the local leaderboard for a particular user from MongoDB
async function getLocalLeaderboard(username) {
    const localLeaderboard = await scoreCollection.find({username: username}).sort({highscore: 1}).limit(LEADERBOARD_RESULTS_LIMIT).toArray();
    return localLeaderboard;
}

//Return the global leaderboard from MongoDB
async function getGlobalLeaderboard() {
    const globalLeaderboard = await scoreCollection.find().sort( {highscore: 1}).limit(LEADERBOARD_RESULTS_LIMIT).toArray();
    return globalLeaderboard;
}

//Remove all entries of a particular user's local leaderboard
function clearLocalLeaderboard(username) {
    scoreCollection.deleteMany({username:username})
}

export {
    addScore,
    getLocalLeaderboard,
    getGlobalLeaderboard,
    clearLocalLeaderboard
}