import { Center, Flex, Spacer } from "@chakra-ui/react";
import BackButton from "../components/BackButton";
import LeaderboardList from "../components/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";

const LeaderboardPage = () => {

    const personalHighScores = [
        { rank: 1, name: "person1", clicks: 10, time: "a" },
        { rank: 2, name: "person2", clicks: 11, time: "f" },
        { rank: 2, name: "person3", clicks: 15, time: "b" },
        { rank: 2, name: "person4", clicks: 1, time: "z" },
    ];

    const globalHighScores = [
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },
        { rank: 1, name: "number 1", clicks: 3, time: "0:01" },
        { rank: 2, name: "number 2", clicks: 3, time: "0:02" },

    ];

    const notLoggedInText = 'Login or create an account to view your high scores';

    // to be replaced by auth0
    const isAuthenticated = false;

    return (
        <div>
            <BackButton />

            <Flex m='24px'>
                {isAuthenticated
                    ? <LeaderboardList items={personalHighScores} title='Personal High Scores' />
                    : <NotLoggedInCard text={notLoggedInText}/>}

                <LeaderboardList items={globalHighScores} title='Global Leaderboard' />
            </Flex>
        </div>
    )
}

export default LeaderboardPage;