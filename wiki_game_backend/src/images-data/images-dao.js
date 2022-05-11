/**
 * Contains all the access methods to retrieve image objects from MongoDB
 */
import { dummy_images } from './dummy-images';

//Function to send the start image, the target image and the 5 level images upon game initialisation
function createGame() {

}
function dummyCreateGame() {//Placeholder function
    return ({
        startImage: dummy_images[0],
        targetImage: dummy_images[1],
        levelImages: dummy_images.slice(2)
    });
}

//Function to send the next 5 level images depending on what the selected image's tags are and what
//the target image's tags are
function nextLevelImages() {

}
function dummyNextLevelImages(selectedTags, targetTags) {//Placeholder function
    const nextImages = dummy_images.slice(2);

    return nextImages;
}

export {
    dummyCreateGame,
    dummyNextLevelImages
}