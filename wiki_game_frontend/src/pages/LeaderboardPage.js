import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from 'react'
import BackButton from "../components/BackButton";
import LeaderboardList from "../components/leaderboard/LeaderboardList";
import NotLoggedInCard from "../components/NotLoggedInCard";
import { getLeaderboard, getPersonalLeaderboard } from "../services/api";
import { useAuth0 } from "@auth0/auth0-react";

const LeaderboardPage = () => {

    const { user, isAuthenticated } = useAuth0();

    const notLoggedInText = 'Login or create an account to view your high scores';
    const [globalLead, setGlobalLead] = useState([]);
    const [personalLead, setPersonalLead] = useState([]);

    // retrieves leaderboard data from backend
    useEffect(() => {
        async function loadLeaderboardData() {
            getLeaderboard().then((o) => {
                setGlobalLead(o);
            });
            if (isAuthenticated) {
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