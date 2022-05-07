import { Box, Button, Center, Flex, Heading, HStack, Spacer, Stack, VStack } from "@chakra-ui/react";
import LeaderboardList from "../components/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";
import { Link } from "react-router-dom";

const GameEndPage = (props) => {

    const { clicks, time } = props;

    const personalHighScores = [
        { rank: 1, name: "person1", clicks: 10, time: "a" },
        { rank: 2, name: "person2", clicks: 11, time: "f" },
        { rank: 2, name: "person3", clicks: 15, time: "b" },
        { rank: 2, name: "person4", clicks: 1, time: "z" },
    ];

    const globalHighScores = [
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
        <Flex m='24px'>
            <VStack width='100%'>
                <LeaderboardList items={globalHighScores} title='Global Leaderboard' />
                {isAuthenticated
                    ? <LeaderboardList items={personalHighScores} title='Personal High Scores' />
                    : <NotLoggedInCard text={notLoggedInText} />}
            </VStack>
            <Center width='100%'>
                <Stack spacing='36px'>
                    <Center>
                        <Heading mb='36px'>
                            Congratulations!
                        </Heading>
                    </Center>

                    <HStack>
                        <VStack width='100%'>
                            <Heading size='md'>Starting image</Heading>
                            <Box bg='accent' w='400px' h='250px'>
                                Image
                            </Box>

                        </VStack>
                        <Spacer />
                        <VStack width='100%'>
                            <Heading size='md'>Goal image</Heading>
                            <Box bg='accent' w='400px' h='250px'>
                                Image
                            </Box>
                        </VStack>
                    </HStack>
                    <Flex>
                        <VStack width='100%'>
                            <Heading size='md'>Clicks</Heading>
                            <Heading size='lg'>{clicks}3</Heading>
                        </VStack>
                        <VStack width='100%'>

                            <Heading size='md'>Time</Heading>
                            <Heading size='lg'>{time}3:04</Heading>
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