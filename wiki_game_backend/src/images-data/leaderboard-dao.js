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
function getLocalLeaderboard(username) {
    const localLeaderboard = [];

    return localLeaderboard;
}

//Return the global leaderboard from MongoDB
function getGlobalLeaderboard() {
    const globalLeaderboard = [];

    return globalLeaderboard; 
}

//Remove all entries of a particular user's local leaderboard
function clearLocalLeaderboard(userID) {
    //remove all MongoDB entries for 'userID'
    return;
}

export {
    addLocalScore,
    addGlobalScore,
    getLocalLeaderboard,
    getGlobalLeaderboard,
    clearLocalLeaderboard
}