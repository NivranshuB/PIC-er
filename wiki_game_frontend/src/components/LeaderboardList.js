import { Box, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import LeaderboardCard from "./LeaderboardCard"

const LeaderboardList = (props) => {

    const { items, title } = props;

    return (
        <Box width='100%' ml='16px' mr='16px'>
            <Center>
                <Heading mb='24px'>
                    {title}
                </Heading>
            </Center>

            <Flex borderRadius='8px' p='4px' ml='8px' mr='8px' >
                <Center flex='1' >
                <Heading size='lg'>#</Heading>
                </Center>
                <Box flex='2'>
                <Heading size='lg'>Name</Heading>
                </Box>
                <Center flex='1'>
                <Heading size='lg'>Clicks</Heading>
                </Center>
                <Center flex='1'>
                <Heading size='lg'>Time</Heading>
                </Center>
            </Flex>

            {items.map((item) => {
                return (
                    <LeaderboardCard rank={item.rank} name={item.name} clicks={item.clicks} time={item.time} />
                )
            })}

        </Box>
    )
}

export default LeaderboardList;