/**
 * This is a simple RESTful api for dealing with the requests for the wiki game leaderboard.
 */
 import express from 'express';
 import { getLocalLeaderboard, getGlobalLeaderboard, clearLocalLeaderboard } from '../../app-data/leaderboard-dao';
 
 const HTTP_CREATED = 201;
 const HTTP_NOT_FOUND = 404;
 const HTTP_NO_CONTENT = 204;
 
 const router = express.Router();
 
 //Retrieve the array of score entries of the global leaderboard
 router.get('/', (req, res) => {
    getGlobalLeaderboard().then((output) => res.json(output));
 })

  //Retrieve the array of score entries of the local leaderboard
 router.get('/:name', (req, res) => {
    const { name } = req.params;
    getLocalLeaderboard(name).then((output) => res.json(output));
})

 //Delete the local leaderboard of all entries for the specified user
 router.delete('/:username', (req, res) => {
    const { username } = req.params;
    res.status(HTTP_NO_CONTENT).send();
    clearLocalLeaderboard(username);
})
 
 export default router;