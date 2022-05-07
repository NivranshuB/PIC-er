import { Box, Center } from "@chakra-ui/react";
import LeaderboardCard from "./LeaderboardCard"

const LeaderboardList = (props) => {

    const { items, title } = props;

    return (
        <Box width='100%' m='16px'>
            <Center>
                {title}
            </Center>


            {items.map((item) => {
                return (
                    <LeaderboardCard rank={item.rank} name={item.name} clicks={item.clicks} time={item.time} />
                )
            })}

        </Box>
    )
}

export default LeaderboardList;