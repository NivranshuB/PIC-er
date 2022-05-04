/**
 * Not used currently
 */

async function createGame() {
    return ({
        startImage: "http://images.cocodataset.org/train2017/000000545675.jpg",
        targetImage: "http://images.cocodataset.org/train2017/000000577558.jpg"
    })
}

async function nextLevelImages() {
    const nextImages = [
        "http://images.cocodataset.org/train2017/000000326098.jpg",
        "http://images.cocodataset.org/train2017/000000345434.jpg",
        "http://images.cocodataset.org/train2017/000000183620.jpg",
        "http://images.cocodataset.org/train2017/000000398419.jpg",
        "http://images.cocodataset.org/train2017/000000494819.jpg"
    ]
}

export {
    createGame,
    nextLevelImages
}