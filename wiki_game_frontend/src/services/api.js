import axios from 'axios';

/**
 * Begins game
 * Retrieves images to use during the game
 * 6 random images sent to ensure no duplicates of the target or closer image
 * @returns startImage, targetImage, and 6 random images
 */
export const startGame = async () => {
    const response = await axios.get('/api/game')
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

/**
 * Continues the game by retrieving more images to be displayed based on the iamge the user clicked
 * @param {*} selectedTags tags to be sent to the backend to find one matching closer image and 6 random images
 * @returns 6 random images to ensure no duplicates with the closer image
 */
export const continueGame = async ({ selectedTags }) => {
    const response = await axios.put('/api/game/continue', {
        selectedTags: selectedTags,
    })
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

/**
 * Sends the game results to be used to update the leaderboard
 * @param {*} props username, email, highscore, time, startImageURL, targetImageURL
 * @returns 
 */
export const endGame = async (props) => {
    const response = await axios.post('/api/game/end', {
        username: props.username,
        email: props.email,
        highscore: props.highscore,
        time: props.time,
        startImageURL: props.startImageURL,
        targetImageURL: props.targetImageURL,
    })
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

/**
 * Retrieves global leaderboard data, first 10 results
 * @returns first 10 leaderboard results
 */
export const getLeaderboard = async () => {
    const response = await axios.get('/api/leaderboard')
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

/**
 * Retrieves personal leaderboard data, first 10 results
 * @param {*} name name of the user to retrieve results for
 * @returns first 10 personal leaderboard results
 */
export const getPersonalLeaderboard = async (name) => {
    const response = await axios.get('/api/leaderboard/' + name)
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

/**
 * Called to delete the peronal leaderboard of a user
 * Future feature
 * @param {*} name name of the user to delete the results from
 * @returns 
 */
export const deletePersonalLeaderboard = async (name) => {
    const response = await axios.delete('/api/leaderboard/' + name)
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}