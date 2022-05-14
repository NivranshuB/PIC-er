import { Center, Container, Flex, Stack } from "@chakra-ui/react";

const NoPersonalScoresCard = (props) => {

    const { text } = props;

    return (
        <Flex align='center' bg='lighterBackground' borderRadius='8' ml='16px' mr='16px' mt='8px' >
            <Container>
                <Stack p='24px' ml='8px' mr='8px' >
                    <Center >
                        {text}
                    </Center>
                </Stack>
            </Container>
        </Flex>
    )
}

export default NoPersonalScoresCard;