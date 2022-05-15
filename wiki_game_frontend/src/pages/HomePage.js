import { Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Heading color='accent' textAlign='center' size='4xl' p='150px' fontSize='18vh'>PIC-er</Heading>
            <VStack direction='column' p='16px' spacing='16px'>
                <Button as={Link} to='game' variant='home'>Play</Button>
                <Button as={Link} to='leaderboard' variant='home'>Leaderboard</Button>
                <Button as={Link} to='help' variant='home'>Help</Button>
            </VStack>
        </>
    )
}

export default HomePage;