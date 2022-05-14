import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Container, Flex, Stack } from "@chakra-ui/react";

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