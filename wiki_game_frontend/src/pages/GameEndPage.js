import { Box, Button, Center, Flex, Heading, HStack, Spacer, Stack, VStack, Wrap } from "@chakra-ui/react";
import LeaderboardList from "../components/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";
import { Link, useLocation } from "react-router-dom";

const GameEndPage = () => {

    const {state} = useLocation();
    const {clicks, time} = state;

    const personalHighScores = [
        { rank: 1, name: "person1", clicks: 10, time: "4:03" },
        { rank: 2, name: "person2", clicks: 11, time: "2:09" },
        { rank: 2, name: "person3", clicks: 15, time: "6:06" },
        { rank: 2, name: "person4", clicks: 1, time: "90:10" },
        { rank: 1, name: "person1", clicks: 10, time: "4:03" },
        { rank: 2, name: "person2", clicks: 11, time: "2:09" },
        { rank: 2, name: "person3", clicks: 15, time: "6:06" },
        { rank: 2, name: "person4", clicks: 1, time: "90:10" },
        { rank: 1, name: "person1", clicks: 10, time: "4:03" },
        { rank: 2, name: "person2", clicks: 11, time: "2:09" },
        { rank: 2, name: "person3", clicks: 15, time: "6:06" },
        { rank: 2, name: "person4", clicks: 1, time: "90:10" },
        { rank: 2, name: "person2", clicks: 11, time: "2:09" },
        { rank: 2, name: "person3", clicks: 15, time: "6:06" },
        { rank: 2, name: "person4", clicks: 1, time: "90:10" },
        { rank: 1, name: "person1", clicks: 10, time: "4:03" },
        { rank: 2, name: "person2", clicks: 11, time: "2:09" },
        { rank: 2, name: "person3", clicks: 15, time: "6:06" },
        { rank: 2, name: "person4", clicks: 1, time: "90:10" },
    ];

    const globalHighScores = [
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },

    ];

    const notLoggedInText = 'Login or create an account to view your high scores';

    // to be replaced by auth0
    const isAuthenticated = true;

    return (
        <Flex m='24px' height='90%'>
            <VStack direction='column' width='100%' height='100%' >
                <LeaderboardList items={globalHighScores} title='Global Leaderboard' />
                <Spacer/>
                {isAuthenticated
                    ? <LeaderboardList items={personalHighScores} title='Personal High Scores' />
                    : <NotLoggedInCard text={notLoggedInText} />}
            </VStack>
            <Center width='100%' p='36px'>
                <Stack spacing='36px' width='100%'>
                    <Center>
                        <Heading mb='36px'>
                            Congratulations!
                        </Heading>
                    </Center>

                    <HStack width='100%'>
                        <VStack width='100%'>
                            <Heading size='md'>Starting image</Heading>
                            <Box bg='accent' w='100%' h='250px'>
                                Image
                            </Box>

                        </VStack>
                        <Spacer />
                        <VStack width='100%'>
                            <Heading size='md'>Goal image</Heading>
                            <Box bg='accent' w='100%' h='250px'>
                                Image
                            </Box>
                        </VStack>
                    </HStack>
                    <Flex>
                        <VStack width='100%'>
                            <Heading size='md'>Clicks</Heading>
                            <Heading size='lg'>{clicks}</Heading>
                        </VStack>
                        <VStack width='100%'>

                            <Heading size='md'>Time</Heading>
                            <Heading size='lg'>{time}</Heading>
                        </VStack>
                    </Flex>
                    <Center>
                        <HStack pt='36px' spacing='24px'>
                            <Button variant='grey' as={Link} to='/'>Home</Button>
                            <Button>Play Again</Button>
                        </HStack>
                    </Center>


                </Stack>

            </Center>
        </Flex>
    )
}

export default GameEndPage;