import { Button, Center, Flex, Heading, HStack, Image, Spacer, Stack, VStack } from "@chakra-ui/react";
import LeaderboardList from "../components/leaderboard/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLeaderboard, getPersonalLeaderboard } from "../services/api";
import { useAuth0 } from "@auth0/auth0-react";
import timeInMinutes from "../utils/timeInMinutes";
import RegularImageModal from "../components/modals/RegularImageModal";

const GameEndPage = () => {

    const { user, isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    const {state} = useLocation();
    const {clicks, time, startImageURL, targetImageURL} = state;



    const [globalLead, setGlobalLead] = useState([])
    const [personalLead, setPersonalLead] = useState([])


    useEffect(() => {
        async function loadLeaderboardData() {
            getLeaderboard().then((o) => {
                setGlobalLead(o);
            });
            if (isAuthenticated) {
                getPersonalLeaderboard(user.nickname).then((o) => setPersonalLead(o))
            }
        }
        loadLeaderboardData();
    }, []);

    const notLoggedInText = 'Login or create an account to view your personal high scores';

    return (
        <Flex m='24px' height='90%'>
            <VStack direction='column' width='100%' height='100%' p='36px' >
                <LeaderboardList items={globalLead} title='Global Leaderboard' />
                <Spacer/>
                {isAuthenticated
                    ? <LeaderboardList items={personalLead} title='Personal High Scores' />
                    : <NotLoggedInCard text={notLoggedInText} />}
            </VStack>
            <Center width='100%' p='36px' height='100%' alignSelf='center'>
                <Stack spacing='36px' width='100%' height='100%'>
                    <Center>
                        <Heading mb='36px'>
                            Congratulations!
                        </Heading>
                    </Center>

                    <HStack width='100%' height='50%'>
                        <VStack width='100%' height='100%'>
                            <Heading size='md'>Starting image</Heading>
                            <Image src={startImageURL} maxHeight='100%' />

                        </VStack>
                        <Spacer />
                        <VStack width='100%' height='100%'>
                            <Heading size='md'>Goal image</Heading>
                            <Image src={targetImageURL} maxHeight='100%' />
                        </VStack>
                    </HStack>
                    <Flex pt='32px'>
                        <VStack width='100%'>
                            <Heading size='md'>Clicks</Heading>
                            <Heading size='xl'>{clicks}</Heading>
                        </VStack>
                        <VStack width='100%'>

                            <Heading size='md'>Time</Heading>
                            <Heading size='xl'>{timeInMinutes(time)}</Heading>
                        </VStack>
                    </Flex>
                    <Center>
                        <HStack pt='36px' spacing='24px'>
                            <Button variant='grey' as={Link} to='/'>Home</Button>
                            <Button onClick={() => navigate('/game')}>Play Again</Button>
                        </HStack>
                    </Center>


                </Stack>

            </Center>
        </Flex>
    )
}

export default GameEndPage;