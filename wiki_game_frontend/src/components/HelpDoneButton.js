import { Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

/**
 * Displays on last step of help page
 * @returns Button
 */
const HelpDoneButton = () => {

    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(-1)}>Done</Button>
    )
}

export default HelpDoneButton;