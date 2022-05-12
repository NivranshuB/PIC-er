import { Box, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import {ArrowBackIcon} from "@chakra-ui/icons";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <Box m='16px'>
            <Button leftIcon={<ArrowBackIcon/>} onClick={() => navigate(-1)}>Back</Button>
        </Box>
        
    )
}

export default BackButton;