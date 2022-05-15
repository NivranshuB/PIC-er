/**
 * This is a simple RESTful api for dealing with the requests for the wiki game.
 */
import express from 'express';
import { createGame, getNextImageSet } from '../../app-data/images-dao';
import { addScore } from '../../app-data/leaderboard-dao';

const HTTP_CREATED = 201;

const router = express.Router();

//Retrieve the start image, the target image and the 5 level images for a new game when you get a
// GET request
router.get('/', (req, res) => {
    createGame().then((output) => res.json(output));
})

//Upon getting a PUT request to '/continue' send back 5 new images based on the selected image's tags
//and the target image's tags
router.put('/continue', async (req, res) => {
    const selectedTags = req.body.selectedTags;
    getNextImageSet(selectedTags).then((nextImageSet) => res.json(nextImageSet))
});

// Create new score entry for the player (and if required for the global leaderboard)
router.post('/end', async (req, res) => {
    addScore(req)
    res.status(HTTP_CREATED).send()
    
})

export default router;