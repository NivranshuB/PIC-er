import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const LeaderboardPage = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate(-1)}>Back</Button>
            Leaderboard
        </div>
    )
}

export default LeaderboardPage;