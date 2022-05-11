import axios from 'axios';

export const startGame = async () => {
    axios.get('/game')
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error.message);
        })
}

export const continueGame = async ({ selectedTags }) => {
    axios.put('/game/continue', {
        selectedTags: selectedTags,
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error.message);
        })
}

export const endGame = async (props) => {
    axios.post('/game/end', {
        username: props.username,
        email: props.email,
        clicks: props.clicks,
        time: props.time,
        startImage: props.startImage,
        targetImage: props.targetImage,
    })
        .then((response) => {
            return response;
        })
        .catch(error => {
            throw new Error(error.message);
        })
}

export const getLeaderboard = async () => {
    axios.get('/leaderboard')
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error.message);
        })
}

export const getPersonalLeaderboard = async (id) => {
    axios.get('/leaderboard/' + id)
        .then((response) => {
            return response.data;
        })
        .catch(error => {
            throw new Error(error.message);
        })
}