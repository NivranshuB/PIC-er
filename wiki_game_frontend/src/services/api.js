import axios from 'axios';

export const getLeaderboard = async () => {
    axios.get('/leaderboard')
        .then((response) => {
            return response.data;
        })
}