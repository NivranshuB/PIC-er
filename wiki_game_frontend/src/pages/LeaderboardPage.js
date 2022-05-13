import { Center, Flex, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from 'react'
import BackButton from "../components/BackButton";
import LeaderboardList from "../components/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";
import { getLeaderboard, getPersonalLeaderboard } from "../services/api";
import { useAuth0 } from "@auth0/auth0-react";

const LeaderboardPage = () => {

    const { user, isAuthenticated } = useAuth0();
    const personalHighScores = [
        { rank: 1, name: "person1", clicks: 10, time: "3:04" },
        { rank: 2, name: "person2", clicks: 11, time: "23:07" },
        { rank: 2, name: "person3", clicks: 15, time: "1:03" },
        { rank: 2, name: "person4", clicks: 1, time: "7:09" },
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
    const [globalLead, setGlobalLead] = useState([])
    // getLeaderboard().then((o) => setGlobalLead(o))
    const [personalLead, setPersonalLead] = useState([])

    
    // to be replaced by auth0
    // const isAuthenticated = true;

    useEffect(() => {
        async function loadLeaderboardData() {
            console.log('Loading global leaderboard')
            getLeaderboard().then((o) => {
                setGlobalLead(o);
                console.log(globalLead);
            });
            if (isAuthenticated) {
                console.log('Loading personal leaderboard for ' + user.nickname)
                // await setPersonalLead(user.username).then((o) => setPersonalLead(o))
                getPersonalLeaderboard(user.nickname).then((o) => setPersonalLead(o))
            }
        }
        loadLeaderboardData();
    }, []);

    return (
        <div>
            <BackButton />

            <Flex m='24px'>
                {isAuthenticated
                    ? <LeaderboardList items={personalLead} title='Personal High Scores' />
                    : <NotLoggedInCard text={notLoggedInText}/>}

                <LeaderboardList items={globalLead} title='Global Leaderboard' />
            </Flex>
        </div>
    )
}

export default LeaderboardPage;