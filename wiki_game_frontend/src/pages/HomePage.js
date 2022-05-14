import { Button, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Heading color='accent' textAlign='center' size='4xl' p='200px'>PIC-er</Heading>
            <VStack direction='column' p='16px' spacing='16px'>
                <Button as={Link} to='game'>Play</Button>
                <Button as={Link} to='leaderboard'>Leaderboard</Button>
            </VStack>
        </>
    )
}

export default HomePage;