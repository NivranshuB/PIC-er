/**
 * This is a simple RESTful api for dealing with the requests for the wiki game.
 */
import express from 'express';
import { dummyCreateGame, dummyNextLevelImages } from '../../images-data/images-dao';

// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

//Retrieve the start image, the target image and the 5 level images for a new game when you get a
// GET request
router.get('/', (req, res) => {
    const newGameImages = dummyCreateGame();

    //Send the start image and the target image in the response payload
    res.json(newGameImages);
})

//Upon getting a PUT request to '/continue' send back 5 new images based on the selected image's tags
//and the target image's tags
router.put('/continue', async (req, res) => {
    const selectedTags = req.body.selectedTags;
    const targetTags = req.body.targetTags;

    const nextImagesSet = dummyNextLevelImages(selectedTags, targetTags);
    res.json(nextImagesSet);
});

export default router;