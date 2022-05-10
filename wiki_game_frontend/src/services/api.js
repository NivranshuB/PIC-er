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