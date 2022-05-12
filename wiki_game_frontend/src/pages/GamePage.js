import { Box, Button, Center, Flex, Heading, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import GameArrow from "../components/GameArrow";

const GamePage = () => {

    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div>
            <Flex>
                <BackButton />
                <Flex p='24px' width='100%' position='fixed' justifyContent='right'>
                    <Box alignSelf='center'>
                        <Heading textAlign='center'>
                            Target Image
                        </Heading>
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" boxSize='300px' fit='contain' />
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
                                <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" boxSize='300px' fit='contain' />
                            </Box>
                        </Center>
                    </Box>

                    <GameArrow/>

                    <HStack spacing='16px' width='100%' justify='center'>
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" fit='contain' maxWidth='15%' />
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" maxWidth='15%' fit='contain' />
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" maxWidth='15%' fit='contain' />
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" maxWidth='15%' fit='contain' />
                        <Image src="https://farm8.staticflickr.com/7212/6896667434_2605d9e181_z.jpg" maxWidth='15%' fit='contain' />
                    </HStack>
                </Flex>

                <Flex p='24px' position='fixed' bottom='0' width='100%'>
                    <Box alignSelf='center'>
                        <Button>Restart</Button>
                    </Box>
                    <Spacer />
                    <Box alignSelf='center'>
                        Time: {time}
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