import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Container, Flex, Stack } from "@chakra-ui/react";

/**
 * Displays the not logged in card to notify that the user is unable to view this section of the game as they are not logged in
 * Usually for hiding the personal leaderboard high scores
 * @param {*} text to display to the user
 * @returns 
 */
const NotLoggedInCard = (props) => {

    const { text } = props;

    const { loginWithRedirect } = useAuth0();

    return (
        <Flex align='center' width='100%' bg='lighterBackground' borderRadius='8' ml='16px' mr='16px'>
            <Container>
                <Stack p='24px'>
                    <Center>
                        {text}
                    </Center>
                    <Center>
                        <Button onClick={() => loginWithRedirect()}>Login</Button>
                    </Center>
                    <Center>
                        <Button variant='borderless' onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Sign up</Button>
                    </Center>
                </Stack>
            </Container>
        </Flex>
    )
}

export default NotLoggedInCard;