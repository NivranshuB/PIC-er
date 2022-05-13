import { Box, Button, Center, Flex, Heading, HStack, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spacer, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import GameArrow from "../components/GameArrow";
import ImageModal from "../components/ImageModal";
import { continueGame, startGame } from "../services/api";

const GamePage = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        startImage: '',
        targetImage: '',
        images: [],
    })

    const [originalImage, setOriginalImage] = useState();

    const handleStart = async () => {
        const data = await startGame();
        const { startImage, targetImage, levelImages } = data;
        let shuffledArray = shuffleImages(levelImages);
        setData({
            startImage: startImage,
            targetImage: targetImage,
            images: shuffledArray,
        });
        setOriginalImage(startImage);
        setClicks(0);
        setTime(0);
    }

    const shuffleImages = (images) => {
        let index = images.length;
        while (index !== 0) {
            let randomIndex = Math.floor(Math.random() * index);
            index--;

            [images[index], images[randomIndex]] = [images[randomIndex], images[index]];
        }
        return images;
    }

    useEffect(() => {
        handleStart();
    }, []);

    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);

    let minutes = parseInt(time / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const handleContinue = async (image) => {
        checkGameComplete(image);
        const dataToSend = getTagsToSend(image);
        const response = await continueGame(dataToSend);
        setData({
            ...data,
            startImage: image,
            images: response,
        })
        setClicks(clicks + 1);
    }

    const checkGameComplete = (image) => {
        if (image.imageURL === data.targetImage.imageURL) {
            navigate('/end', { state: { clicks: clicks, time: time, startImageURL: originalImage.imageURL, targetImageURL: data.targetImage.imageURL } });
        }
    }

    const getTagsToSend = (image) => {
        console.log('clicke image:');
        console.log(image);
        console.log('target image:');
        console.log(data.targetImage);
        // {selectedTags: image.imageTags};
        return { selectedTags: image.imageTags };
    }

    const handleRestart = () => {
        handleStart();
    }

    return (
        <Flex direction='column' height='100%'>
            <BackButton />
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
                        Time: {minutes}:{seconds}
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

        </Flex>
    )
}

export default GamePage;