

let startImage;
let targetImage;
let ongoing = false;
let imageClicks;
let levelImages = [];

// INITIALIZE GAME --> Todo
function createGame() {
    startImage = []; //Set the start image to a random image from MongoDB
    targetImage = []; //Set the target image to a random image from MongoDB
    ongoing = true;
    imageClicks = 0;
    levelImages = []; //Set the level images to 4 random images and one image 'closer' to the target 

    return ([startImage, targetImage]);
}

// Iterate the 'level' of the game --> Todo
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

function getGameStatus() {
    return ongoing;
}

function resetGame() {
    startImage = ''; //Set the start image to a random image from MongoDB
    targetImage = ''; //Set the target image to a random image from MongoDB
    ongoing = false;
    imageClicks = 0;   
}

// Get one image that is closer to the target image compared to the previous iteration of images
// Todo
function getACloserImage(tagsMatching) {

}

// Get 4 random images that are randomly generated from the MongoDB database
// Todo
function getARandomImage() {

}

// Check if the game has been won or not