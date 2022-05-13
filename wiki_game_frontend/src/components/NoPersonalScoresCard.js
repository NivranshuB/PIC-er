import { Center, Container, Flex, Stack } from "@chakra-ui/react";

const NoPersonalScoresCard = (props) => {

    const { text } = props;

    return (
        <Flex align='center' width='95%' bg='lighterBackground' borderRadius='8'  ml='16px' mr='16px'>
            <Container>
                <Stack p='24px'>
                    <Center>
                        {text}
                    </Center>
                </Stack>
            </Container>
        </Flex>
    )
}

export default NoPersonalScoresCard;