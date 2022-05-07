import { Box, Center, Flex } from "@chakra-ui/react";

const LeaderboardCard = (props) => {

    const { rank, name, clicks, time } = props;

    return (
            <Flex bg='lighterBackground' borderRadius='8px' p='4px' m='8px' >
                <Center flex='1'>
                    {rank}
                </Center>
                <Box flex='2'>
                    {name}
                </Box>
                <Center flex='1'>
                    {clicks}
                </Center>
                <Center flex='1'>
                    {time}
                </Center>
            </Flex>
    )
}

export default LeaderboardCard;