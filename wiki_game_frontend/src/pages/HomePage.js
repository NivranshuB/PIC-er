import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const HomePage = () => {
    return (
        <div>
            inside navbar
            <Button as={Link} to='leaderboard'>Leaderboard</Button>
        </div>
    )
}

export default HomePage;