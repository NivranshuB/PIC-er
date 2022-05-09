/**
 * Not used currently
 */

function createGame(dummy_images) {
    return (dummy_images.slice(0, 2));
}

function nextLevelImages(dummy_images) {
    const nextImages = dummy_images.slice(2);

    return nextImages;
}

export {
    createGame,
    nextLevelImages
}