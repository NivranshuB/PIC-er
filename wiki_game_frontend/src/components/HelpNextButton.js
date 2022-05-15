import { Button } from "@chakra-ui/react"
import { totalNumberOfHelpPages } from "../pages/HelpPage";

const HelpNextButton = ({setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource}) => {

    const moveToNextHelpPage = () => {
        if (helpCurrentPageNumber === (totalNumberOfHelpPages - 1)) {
            setHelpFirstPage(false);
            setHelpLastPage(true)
        } else {
            setHelpFirstPage(false);
            setHelpLastPage(false);  
        }
        setHelpCurrentPageNumber(helpCurrentPageNumber + 1);
        setHelpImageSource('helpImages/helpPage' + (helpCurrentPageNumber + 1) + '.png');
    }

    return (
        <Button onClick={() => moveToNextHelpPage()}>Next</Button>
    )
}

export default HelpNextButton;