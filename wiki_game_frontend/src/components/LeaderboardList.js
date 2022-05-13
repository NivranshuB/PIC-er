import { Box, Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { overflowBoxStyle } from "../theme";
import LeaderboardCard from "./LeaderboardCard"
import NoPersonalScoresCard from "./NoPersonalScoresCard";
import NotLoggedInCard from "./NotLoggedInCard";

const LeaderboardList = (props) => {

    const { items, title } = props;

    const [clicksSorted, setClicksSorted] = useState(true);

    // Sort time by converting string to seconds
    // const sortTime = (a, b) => {
    //     let aTime = a.time.split(':');
    //     aTime = (parseInt(aTime[0]) * 60) + parseInt(aTime[1]);
    //     let bTime = b.time.split(':');
    //     bTime = (parseInt(bTime[0]) * 60) + parseInt(bTime[1]);

    //     return aTime - bTime;
    // }

    const timeInMinutes = (a) => {
        let mins = (Math.floor(a / 60)).toString();
        let seconds = ((a % 60).toString().padStart(2, '0'))
        return `${mins}:${seconds}`
    }

    const handleSort = () => {

        if (clicksSorted) {
            items.sort((a, b) => (a.clicks > b.clicks) ? 1 : -1);
        } else {
            items.sort((a, b) => (a.time > b.time) ? 1 : -1);
        }
        setClicksSorted(!clicksSorted)
    }

    // Sorts code once on page load
    // useEffect(() => {
    //     handleSort();
    // }, []);

    return (
        <Flex width='100%' ml='16px' mr='16px' direction='column' height='48%'>
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
                    <Button variant={clicksSorted ? 'borderlessWhite' : 'borderless'} onClick={() => handleSort()}>
                        <Heading size='lg'>Clicks</Heading>
                    </Button>

                </Center>
                <Center flex='1'>
                    <Button variant={clicksSorted ? 'borderless' : 'borderlessWhite'} onClick={() => handleSort()}>
                        <Heading size='lg'>Time</Heading>
                    </Button>
                </Center>
            </Flex>

            <Box overflow='auto' sx={overflowBoxStyle}>
                
                {items.length > 0 ? (items.map((item, index) => {
                    return (
                        <LeaderboardCard rank={index + 1} name={item.username} clicks={item.highscore} time={timeInMinutes(item.time)} startImage={item.startImageURL} targetImage={item.targetImageURL} />
                    )
                })) : <NoPersonalScoresCard text={"Play some games to get your scores on the board!"}/>}
            </Box>


        </Flex>
    )
}

export default LeaderboardList;