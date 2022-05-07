import { Button, Center, Container, Flex, Stack } from "@chakra-ui/react";

const NotLoggedInCard = (props) => {

    const { text } = props;

    return (
        <Flex align='center' width='100%' bg='lighterBackground' borderRadius='8' grow>
            <Container>
                <Stack p='24px'>
                    <Center>
                        {text}
                    </Center>
                    <Center>
                        <Button>Login</Button>
                    </Center>
                    <Center>
                        <Button variant='borderless'>Sign up</Button>
                    </Center>
                </Stack>
            </Container>
        </Flex>
    )
}

export default NotLoggedInCard;