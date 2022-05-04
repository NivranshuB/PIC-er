/**
 * This is a simple RESTful api for dealing with the requests for the wiki game.
 */

import express from 'express';
import { createGame, nextLevelImages } from '../../images-data/images-dao';

// const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

//Create a new game when you get a POST request
router.post('/game', async (req, res) => {

    //Retrieve two random image objects and their associated tags list
    //Set one of the image as the start image and the other as the target image
    const newGameImages = await createGame;//unimplemented

    //Send the start image and the target image in the response payload
    res.status(HTTP_CREATED)//unimplemented
        .json(newGameImages);
})

//Upon getting a PUT request send back 5 new images based on the game logic
router.put('/game', async (req, res) => {

    //Analyse the image url that the user selected

    //Make changes to the game depending on their game progress

    //Retrieve 5 image urls from the database (with one of the images being the progressing image)
    const nextImageSet = await nextLevelImages();//unimplemented

    //Send the url of the 5 images back to the client in the response payload
    res.status(HTTP_CREATED)//unimplemented
    .json(nextImageSet);
})

export default router;