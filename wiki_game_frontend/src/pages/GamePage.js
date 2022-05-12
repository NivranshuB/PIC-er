import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

const GamePage = () => {

    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div>
            <BackButton />

            <Flex>
                <Flex p='24px' position='fixed' bottom='0' width='100%'>
                    <Box alignSelf='center'>
                        Stuck?
                        <Button>Restart</Button>
                    </Box>
                    <Spacer />
                    <Box alignSelf='center'>
                        Time: {time}
                    </Box>
                    <Spacer />
                    <Box alignSelf='center'>
                        Clicks: {clicks}
                    </Box>
                </Flex>
            </Flex>

        </div>
    )
}

export default GamePage;