import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";

const GamePage = () => {

    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    return (
        <div>
            <BackButton />
            Time: {time}
        </div>
    )
}

export default GamePage;