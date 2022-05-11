
import { scoreCollection } from '../server'
const LEADERBOARD_RESULTS_LIMIT = 10
/**
 * Contains all the access methods to retrieve local and global score objects from MongoDB
 */

//Check if the local score is in the top 10 highest scores for the user
function addLocalScore(username, hashedEmail, clicks, time, startImageURL, targetImageURL) {
    //If a new local score was created return true else return false
    return false;
}

//Check if the local score is in the top 10 highest scores for the user
function addGlobalScore(username, hashedEmail, clicks, time, startImageURL, targetImageURL) {
    //If a new global score was create return true else return false
    return false;
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
    addLocalScore,
    addGlobalScore,
    getLocalLeaderboard,
    getGlobalLeaderboard,
    clearLocalLeaderboard
}