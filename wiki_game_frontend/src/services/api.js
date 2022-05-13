import axios from 'axios';

export const startGame = async () => {
    const response = await axios.get('/api/game')
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

export const continueGame = async ({ selectedTags }) => {
    const response = await axios.put('/api/game/continue', {
        selectedTags: selectedTags,
    })
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

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

export const getLeaderboard = async () => {
    const response = await axios.get('/api/leaderboard')
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

export const getPersonalLeaderboard = async (name) => {
    const response = await axios.get('/api/leaderboard/' + name)
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}

export const deletePersonalLeaderboard = async (name) => {
    const response = await axios.delete('/api/leaderboard/' + name)
        .catch(error => {
            throw new Error(error.message);
        })
    return response.data;
}