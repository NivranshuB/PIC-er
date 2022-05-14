import { Box, Button, Center, Flex, Heading, HStack, Image, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import GameArrow from "../components/GameArrow";
import ImageModal from "../components/ImageModal";
import { continueGame, endGame, startGame } from "../services/api";
import { useAuth0 } from "@auth0/auth0-react";
import MD5 from 'crypto-js/md5';
import timeInMinutes from "../utils/timeInMinutes";

let closerImage = {};

const GamePage = () => {

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

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    useEffect(() => {
        handleStart();
    }, []);

    const handleStart = async () => {
        let shuffledArray = [];
        startGame().then((data) => {
            const { startImage, targetImage, levelImages } = data;
            shuffledArray = shuffleImages(levelImages);
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

    const shuffleImages = (images) => {
        closerImage = images[0];

        let randomImages = [];
        if (Object.keys(closerImage).length > 0) {
            randomImages.push(closerImage);
            for (let image of images.slice(1, 6)) {
                if (image.imageID !== closerImage.imageID) {
                    randomImages.push(image);
                    if (randomImages.length === 5) {
                        break;
                    }
                }
            }
        } else {
            randomImages = images.slice(1, 6);
        }

        let index = randomImages.length;
        while (index !== 0) {
            let randomIndex = Math.floor(Math.random() * index);
            index--;

            [randomImages[index], randomImages[randomIndex]] = [randomImages[randomIndex], randomImages[index]];
        }
        return randomImages;
    }

    const checkGameComplete = (image) => {
        if (image.imageURL === data.targetImage.imageURL) {
            if (isAuthenticated) {
                endGame({ username: user.nickname, email: MD5(user.email).toString(), highscore: clicks, startImageURL: originalImage.imageURL, targetImageURL: data.targetImage.imageURL, time: time });
            }
            navigate('/end', { state: { clicks: clicks, time: time, startImageURL: originalImage.imageURL, targetImageURL: data.targetImage.imageURL } });
        }
    }

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

        if (tagMatchCount === targetTags.length) {
            return { selectedTags: targetTags };
        }

        if (tagMatchCount === 0) {
            return { selectedTags: imageTags };
        }

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
        <Flex direction='column' height='100%'>
            <BackButton />
            {loading
                ? <Center><Heading>Loading...</Heading></Center>
                : <>
                    <Flex width='100%' position='absolute' zIndex='-1'>


                        <Heading size='md' alignSelf='center' p='32px' textAlign='center' width='200px'>
                            Select the image below that best links you to the target image
                        </Heading>
                        <Spacer />
                        <Flex direction='column' p='32px' justify='right'>
                            <Heading textAlign='center'>
                                Target Image
                            </Heading>
                            <Image src={data.targetImage.imageURL} maxWidth='300px' maxHeight='300px' fit='contain' p='8px' _hover={{ transform: 'scale(2)' }} />
                            <Box alignSelf='center'>
                                Time: {timeInMinutes(time)}
                            </Box>
                            <Spacer />
                            <Box alignSelf='center'>
                                Clicks: {clicks}
                            </Box>
                        </Flex>
                    </Flex>

                    <Flex direction='column' height='100%'>

                        <Flex alignSelf='center' direction='column' height='80%'>
                            <Flex>
                                <Spacer />
                                <Center>
                                    <Box>
                                        <Heading textAlign='center'>
                                            Current Image
                                        </Heading>
                                        <Image src={data.startImage.imageURL} maxWidth='300px' maxHeight='300px' fit='contain' p='8px' _hover={{ transform: 'scale(2)' }} />
                                    </Box>
                                </Center>
                                <Spacer />
                            </Flex>

                            <GameArrow />

                            <HStack spacing='16px' width='100%' justify='center' alignItems='start'>
                                {data.images.map((image) => {
                                    return (
                                        <ImageModal image={image} handleContinue={handleContinue} />
                                    )
                                })}
                            </HStack>
                        </Flex>

                        <Flex p='24px' position='fixed' bottom='0' width='100%'>
                            <Box alignSelf='center'>
                                <Button onClick={() => handleRestart()}>Restart</Button>
                            </Box>
                            <Spacer />

                        </Flex>
                    </Flex>
                </>}
        </Flex>
    )
}

export default GamePage;