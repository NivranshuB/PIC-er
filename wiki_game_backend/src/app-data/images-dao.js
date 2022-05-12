/**
 * Contains all the access methods to retrieve image objects from MongoDB
 */
import { imageCollection } from '../server';

const NUM_OF_IMAGES = 5;

//Function to send the start image, the target image and the 5 level images upon game initialisation
async function createGame() {
    let startImage = {}
    let startImageTagArray = []
    let targetImage = {}
    let levelImages = []
    let closerImage = {}
    let randomImages = []
    await imageCollection.find({tagCount: {$lt: 3}}).toArray()
            .then((arr) => {
                startImage = arr[getRandomIntBetweenValues(0, arr.length)];
                startImageTagArray = startImage.imageTags;
            });
    await imageCollection.find({imageTags: {$all: startImageTagArray}, tagCount: {$gte: 3}}).toArray()
            .then((arr) => {targetImage = arr[getRandomIntBetweenValues(0, arr.length)]})

    await getACloserImage(closerImageTags(startImageTagArray, targetImage.imageTags)).then((o) => closerImage = o);       
    await getRandomImages().then((o) => randomImages = o);      
    levelImages.push(closerImage);
    levelImages = levelImages.concat(randomImages);
    return [startImage, targetImage, levelImages]
}

async function getNextImageSet(tagsMatching) {
    let imageSet = []
    await getACloserImage(tagsMatching).then((o) => imageSet.push(o));
    await getRandomImages().then((o) => {imageSet = imageSet.concat(o)});
    return imageSet;
}

async function getACloserImage(tagsMatching) {
    return imageCollection.find({imageTags: {$all: tagsMatching}}).toArray()
    .then((closerImageArray) => closerImageArray[getRandomIntBetweenValues(0, closerImageArray.length)])
}

function closerImageTags(currentImageTag, targetImageTag) {
    let newTag = targetImageTag.filter(tag => !currentImageTag.includes(tag));
    let newImageTags = [];
    newImageTags.push(newTag[0]);
    newImageTags = newImageTags.concat(currentImageTag);
    return newImageTags;
}

async function getRandomImages() {
    return imageCollection.aggregate([{ $sample: {size: NUM_OF_IMAGES} }]).toArray()
}

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