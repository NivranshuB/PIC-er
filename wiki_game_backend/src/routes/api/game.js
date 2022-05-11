/**
 * This is a simple RESTful api for dealing with the requests for the wiki game.
 */
import express from 'express';
import { createGame, getNextImageSet, dummyCreateGame, dummyNextLevelImages } from '../../images-data/images-dao';
import { addScore } from '../../images-data/leaderboard-dao';


// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

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