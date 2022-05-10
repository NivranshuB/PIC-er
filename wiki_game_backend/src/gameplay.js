/** 
 * Not sure if the startImage, targetImage, imageClicks, etc, should be stored here. I think this implementation wouldn't work if more than one player 
 * plays this game at once. Would technically make sense if we could make a new gameplay object for each player since these info are player specific, but 
 * I don't think that's the best way to proceed. I think a stateless model would work better, where the user provides this sort of information and we just 
 * process it in our functions. 
 * 
*/

const NUM_OF_IMAGES = 5;

// INITIALIZE GAME --> Todo
export function createGame(collection) {
    let startImageArray = collection.find({tagCount: {$lt: 3}}).toArray(); //get list of starting images with a tag count of less than 1 or 2.
    let startImage = startImageArray[getRandomIntBetweenValues(0, len(startImageArray))]; //randomly select one of the images  
    let startImageTagArray = startImage.imageTags; //get tags for the start image

    let targetImageArray = collection.find({imageTags: {$all: startImageTagArray}, tagCount: {$gte: 3}}) //gets a list of target images with a tag count of 3 or more and with tags that include the tags of the starting image.
    let targetImage = targetImageArray[getRandomIntBetweenValues(0, len(targetImageArray))];

    let levelImages = []; //Set the level images to 4 random images and one image 'closer' to the target 
    let nextCloserImage = getACloserImage(collection, closerImageTags(startImageTagArray, targetImage.imageTags));
    let otherImages = getRandomImages(collection);

    //Checks if nextCloserImage is null. If it is, that means there is no closer image with the tags required, so just return the target image.
    if (nextCloserImage != null) {
        levelImages.push(nextCloserImage);
    } else {
        levelImages.push(targetImage);
    }
    levelImages.concat(otherImages);

    return ([startImage, targetImage, levelImages]); //could be a json object if that makes things easier 
}

/**
 * Gets the next set of tags to find the next closer image based off of the current image's tags and the target image tags.
 */
function closerImageTags(currentImageTag, targetImageTag) {
    let newImageTags = targetImageTag.filter(tag => !currentImageTag.includes(tag));
    return currentImageTag.push(newImageTags[0]);
}

// Iterate the 'level' of the game --> Todo (Not sure if this is really required)
function newLevel(imageClicked) {
    //Increment the number of clicks
    imageClicks += 1;

    //Check if the game is won => i.e. if the imageClicked is the target image

    //Analyse the number of tags in the imageClicked that are the same as the
    //target image
    numberOfMatchingTags = 0;

    //One of the next images will have 1 additional tag that matches with the
    //target image
    numberOfNextImageMatchingTags = numberOfMatchingTags + 1;

    //Retrieve an image from MongoDB that is closer to the target image

    //Retrieve 4 other random images from MongoDB for the next level

    //Shuffle the 5 images above in random order and return this array back
    return ([]);
}

/**
 * Not sure if this is really required.
 */
function getGameStatus() {
    return ongoing;
}

/**
 * Not sure if this is really required.
 */
function resetGame() {
    startImage = ''; //Set the start image to a random image from MongoDB
    targetImage = ''; //Set the target image to a random image from MongoDB
    ongoing = false;
    imageClicks = 0;   
}

/** 
 * Get one image that is closer to the target image compared to the previous iteration of images. tagsMatching should be an array of tags that the desired
 * image should have. If no image matching this is found, return null, which would indicate that the target image should be presented.
 * Can't use findOne because it returns the first matching document in order, which is bad because under the same conditions, this document will always be 
 * returned.
*/
export function getACloserImage(collection, tagsMatching) {
    // console.log(getRandomIntBetweenValues(0, ))
    collection.find({imageTags: {$all: tagsMatching}}).toArray()
    .then((closerImageArray) => {return closerImageArray.length > 0 ? closerImageArray[getRandomIntBetweenValues(0, closerImageArray.length)] : {} })
    
}

/** Get 4 random images that are randomly generated from the MongoDB database */
export function getRandomImages(collection) {
    return collection.aggregate([{ $sample: {size: NUM_OF_IMAGES - 1} }]).toArray()
}

// Check if the game has been won or not

export function getRandomIntBetweenValues(min, max) {
    let diff = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * diff);
    rand = rand + min;
    return rand;
}