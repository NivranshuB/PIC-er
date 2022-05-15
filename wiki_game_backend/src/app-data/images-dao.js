/**
 * Contains all the access methods to retrieve image objects from MongoDB
 */
import { imageCollection } from '../server';

const NUM_OF_IMAGES = 6;

//Function to send the start image, the target image and the 5 level images upon game initialisation
async function createGame() {

    //Setup game data
    let startImage = {}
    let startImageTagArray = []
    let targetImage = {}
    let levelImages = []
    let closerImage = {}
    let randomImages = []

    //Find a start image for the game
    await imageCollection.find({tagCount: {$lt: 3}}).toArray()
            .then((arr) => {
                startImage = arr[getRandomIntBetweenValues(0, arr.length)];
                startImageTagArray = startImage.imageTags;
            });

    //Find a target image for the game
    await imageCollection.find({imageTags: {$all: startImageTagArray}, tagCount: {$gte: 3}}).toArray()
            .then((arr) => {targetImage = arr[getRandomIntBetweenValues(0, arr.length)]})

    //Find the first five level images of the game
    await getACloserImage(closerImageTags(startImageTagArray, targetImage.imageTags)).then((o) => closerImage = (o == null || o.imageID == targetImage.imageID) ? {} : o);       
    await getRandomImages().then((o) => randomImages = o);      
    levelImages.push(closerImage);
    levelImages = levelImages.concat(randomImages);
    return {startImage, targetImage, levelImages}
}

//Find the next set of images depending on a set of tags sent from the frontend
async function getNextImageSet(tagsMatching) {
    let imageSet = []
    await getACloserImage(tagsMatching).then((o) => (o != null) ? imageSet.push(o) : imageSet.push({}));
    await getRandomImages().then((o) => {imageSet = imageSet.concat(o)});
    return imageSet;
}

//Find the next 'closer' image that will be conceptually more similar to the target image
async function getACloserImage(tagsMatching) {
    return imageCollection.find({imageTags: {$all: tagsMatching}, tagCount: tagsMatching.length}).toArray()
    .then((closerImageArray) => closerImageArray[getRandomIntBetweenValues(0, closerImageArray.length)])
}

//Compare the tags of the clicked image and the target image to find the tags the next 'closer' image will have
function closerImageTags(currentImageTag, targetImageTag) {
    let newTag = targetImageTag.filter(tag => !currentImageTag.includes(tag));
    let newImageTags = [];
    newImageTags.push(newTag[0]);
    newImageTags = newImageTags.concat(currentImageTag);
    return newImageTags;
}

//Get random images from the image collection
async function getRandomImages() {
    return imageCollection.aggregate([{ $sample: {size: NUM_OF_IMAGES} }]).toArray()
}

//Get a random integer value between the min and max parameters supplied
function getRandomIntBetweenValues(min, max) {
    let diff = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand = rand + min;
    return rand;
}

export {
    createGame,
    getNextImageSet
}