/**
 * This is a simple RESTful api for dealing with the requests for the wiki game leaderboard.
 */
 import express from 'express';

 import { getLocalLeaderboard, getGlobalLeaderboard, clearLocalLeaderboard } from '../../images-data/leaderboard-dao';
 
 const HTTP_CREATED = 201;
 const HTTP_NOT_FOUND = 404;
 const HTTP_NO_CONTENT = 204;
 
 const router = express.Router();
 
 //Retrieve the array of score entries of the global leaderboard
 router.get('/', (req, res) => {
     const globalLeaderboardEntries = getGlobalLeaderboard();
 
     //Send the array of all global leaderboard entries in response
     res.json(globalLeaderboardEntries);
 })

  //Retrieve the array of score entries of the local leaderboard
 router.get('/:name', (req, res) => {
    const { name } = req.params;
    const localLeaderboardEntries = getLocalLeaderboard(name);

    //Send the array of all local leaderboard entries for the particular user in response
    res.json(localLeaderboardEntries);
})

 //Delete the local leaderboard of all entries for the specified user
 router.delete('/:id', (req, res) => {
    const { id } = req.params;

    clearLocalLeaderboard(id);

    res.status(HTTP_NO_CONTENT);
})
 
 export default router;