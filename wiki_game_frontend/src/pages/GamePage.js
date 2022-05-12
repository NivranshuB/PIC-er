import { Box, Button, Center, Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import GameArrow from "../components/GameArrow";
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
        setData({
            startImage: startImage,
            targetImage: targetImage,
            images: levelImages,
        });
        setOriginalImage(startImage);
        console.log(data);
        console.log(startImage)
        setClicks(0);
        setTime(0);
        console.log(data.images);
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
        const dataToSend = {selectedTags: image.imageTags};
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
            navigate('/end', { state: { clicks: clicks, time: time, startImageURL: originalImage.imageURL, targetImageURL: data.targetImage.imageURL}});
        }
    }

    const handleRestart = () => {
        handleStart();
    }

    return (
        <div>
            <Flex>
                <BackButton />
                <Flex p='24px' width='100%' position='fixed' justifyContent='right'>
                    <Box alignSelf='center'>
                        <Heading textAlign='center'>
                            Target Image
                        </Heading>
                        <Image src={data.targetImage.imageURL} boxSize='300px' fit='contain' />
                    </Box>
                </Flex>

            </Flex>

            <Flex direction='column'>
                <Flex position='fixed' width='20%' textAlign='center' p='16px'>
                    <Heading size='md'>
                        Select the image below that best links you to the target image
                    </Heading>
                </Flex>

                <Flex alignSelf='center' direction='column'>
                    <Box>
                        <Center>
                            <Box>
                                <Heading textAlign='center'>
                                    Current Image
                                </Heading>
                                <Image src={data.startImage.imageURL} boxSize='300px' fit='contain' />
                            </Box>
                        </Center>
                    </Box>

                    <GameArrow />

                    <HStack spacing='16px' width='100%' justify='center'>
                        {data.images.map((image) => {
                            return (
                                <Image src={image.imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue(image)} />
                            )
                        })}
                        {/* <Image src={data.images[0].imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue()} />
                        <Image src={data.images[1].imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue()} />
                        <Image src={data.images[2].imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue()} />
                        <Image src={data.images[3].imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue()} />
                        <Image src={data.images[4].imageURL} maxWidth='15%' fit='contain' onClick={() => handleContinue()} /> */}
                    </HStack>
                </Flex>

                <Flex p='24px' position='fixed' bottom='0' width='100%'>
                    <Box alignSelf='center'>
                        <Button onClick={() => handleRestart()}>Restart</Button>
                    </Box>
                    <Spacer />
                    <Box alignSelf='center'>
                        Time: {minutes}:{seconds}
                    </Box>
                    <Spacer />
                    <Box alignSelf='center'>
                        Clicks: {clicks}
                    </Box>
                </Flex>
            </Flex>

        </div>
    )
}

export default GamePage;