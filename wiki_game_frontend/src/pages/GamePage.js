import { Box, Button, Center, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import GameArrow from "../components/GameArrow";
import GameImageModal from "../components/modals/GameImageModal";
import { continueGame, endGame, startGame } from "../services/api";
import { useAuth0 } from "@auth0/auth0-react";
import MD5 from 'crypto-js/md5';
import timeInMinutes from "../utils/timeInMinutes";
import RegularImageModal from "../components/modals/RegularImageModal";

let closerImage = {};

/**
 * Displays the game page
 * Core game logic
 * @returns Game page
 */
const GamePage = () => {

    // check if data has been retrieved from the db and game is ready
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const { user, isAuthenticated } = useAuth0();

    const [data, setData] = useState({
        startImage: '',
        targetImage: '',
        images: [],
    })

    const [originalImage, setOriginalImage] = useState();
    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);

    // timer
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    // run start game once on page load
    useEffect(() => {
        handleStart();
    }, []);

    const handleStart = async () => {
        let shuffledArray = [];
        startGame().then((data) => {
            const { startImage, targetImage, levelImages } = data;
            shuffledArray = shuffleImages(levelImages, targetImage);
            setData({
                startImage: startImage,
                targetImage: targetImage,
                images: shuffledArray,
            })
            setOriginalImage(startImage);
            setLoading(false);
            setClicks(0);
            setTime(0);
        });


    }

    const handleContinue = async (image) => {
        checkGameComplete(image);
        const dataToSend = getTagsToSend(image);
        await continueGame(dataToSend)
            .then((response) => {
                let shuffledArray = shuffleImages(response);
                setData({
                    ...data,
                    startImage: image,
                    images: shuffledArray,
                })
            });

        setClicks(clicks + 1);
    }

    /**
     * shuffle images to be displayed
     * includes error checking
     * @param {*} images images to be shuffled
     * @param {*} start Target image to be checked on first run
     * @returns shuffled images
     */
    const shuffleImages = (images, start = null) => {
        closerImage = images[0];
        let imageSet = []
        let randomImages = [];

        if (start != null) {
            for (let i of images) {
                if (i.imageID !== start.imageID) {
                    imageSet.push(i);
                }
            }
        } else {
            imageSet = images;
        }

        // checks closer image exists
        if (Object.keys(closerImage).length > 0) {
            randomImages.push(closerImage);
            // checks none of the random images are duplicates of the closer image
            // only provide 5 images in total
            for (let image of imageSet.slice(1, 6)) {
                if (image.imageID !== closerImage.imageID) {
                    randomImages.push(image);
                    if (randomImages.length === 5) {
                        break;
                    }
                }
            }
        } else {
            randomImages = imageSet.slice(1, 6);
        }

        let index = randomImages.length;
        // shuffle the images
        while (index !== 0) {
            let randomIndex = Math.floor(Math.random() * index);
            index--;

            [randomImages[index], randomImages[randomIndex]] = [randomImages[randomIndex], randomImages[index]];
        }

        return randomImages;
    }

    /**
     * Will send the current game results to the backend if user is logged in
     * @param {*} image Image clicked to win the game
     */
    const checkGameComplete = (image) => {
        if (image.imageURL === data.targetImage.imageURL) {
            if (isAuthenticated) {
                endGame({
                    username: user.nickname,
                    email: MD5(user.email).toString(),
                    highscore: clicks,
                    startImageURL: originalImage.imageURL,
                    targetImageURL: data.targetImage.imageURL,
                    time: time
                });
            }
            navigate('/end', { state: { clicks: clicks, time: time, startImageURL: originalImage.imageURL, targetImageURL: data.targetImage.imageURL } });
        }
    }

    /**
     * Calculates which tags to be requested from the backend
     * @param {*} image Image the user clicked on
     * @returns The object to be sent to the backend containing the tags
     */
    const getTagsToSend = (image) => {
        const imageTags = image.imageTags;
        const targetTags = data.targetImage.imageTags;

        let tagMatchCount = 0;
        for (let tag of targetTags) {
            for (let clickedTag of imageTags) {
                if (clickedTag === tag) {
                    tagMatchCount++;
                }
            }
        }

        // if all tags match the target image's tags, send the target tags
        if (tagMatchCount === targetTags.length) {
            return { selectedTags: targetTags };
        }

        // if no tags match, send the tags of the image clicked on
        if (tagMatchCount === 0) {
            return { selectedTags: imageTags };
        }

        // if the closer image was clicked, add one random tag from the target image to progress the game smoothly
        if (closerImage.imageID === image.imageID) {
            let newTags = targetTags.filter(tag => !imageTags.includes(tag));
            const randomNewTag = newTags[Math.floor(Math.random() * newTags.length)];

            let tagsToSend = imageTags.concat(randomNewTag);
            return { selectedTags: tagsToSend };
        }

        return { selectedTags: imageTags };
    }

    const handleRestart = () => {
        handleStart();
    }

    return (
        <Flex direction='column' width='100%' height='80%'>
            <HStack width='100%'>
                <BackButton />
                <Spacer />
                <Center>
                    <Heading size='md' alignSelf='center' p='16px' textAlign='right'>
                        Select the image below that best links you to the target image
                    </Heading>
                </Center>
            </HStack>

            {loading
                ? <Center><Heading>Loading...</Heading></Center>
                : <>
                    <Flex direction='row' width='100%'>

                        <Flex alignSelf='center' direction='column' width='100%' pl='32px' pr='32px'>
                            <Flex width='100%'>
                                <HStack width='100%' alignItems='end'>

                                    <Flex alignSelf='center' width='300px' direction='column'>
                                        <Flex direction='column' p='16px'>
                                            <Box alignSelf='center'>
                                                <Heading>Time: {timeInMinutes(time)}</Heading>
                                            </Box>
                                            <Box alignSelf='center'>
                                                <Heading>Clicks: {clicks}</Heading>
                                            </Box>
                                        </Flex>

                                        <Center p='16px'>
                                            <Button onClick={() => handleRestart()}>Restart</Button>
                                        </Center>
                                    </Flex>

                                    <Spacer />

                                    <Box alignItems='end'>
                                        <Heading textAlign='center'>
                                            Current Image
                                        </Heading>
                                        <RegularImageModal image={data.startImage.imageURL} />
                                    </Box>

                                    <Spacer />

                                    <Box>
                                        <Heading textAlign='center'>
                                            Target Image
                                        </Heading>
                                        <RegularImageModal image={data.targetImage.imageURL} />

                                    </Box>
                                </HStack>
                            </Flex>

                            <GameArrow />

                            <HStack spacing='16px' width='100%' height='80%' justify='center' alignItems='start' pl='32px' pr='32px'>
                                {data.images.map((image) => {
                                    return (
                                        <GameImageModal image={image} handleContinue={handleContinue} />
                                    )
                                })}
                            </HStack>
                        </Flex>
                    </Flex>
                </>}
        </Flex>
    )
}

export default GamePage;