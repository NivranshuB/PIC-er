import { Button } from "@chakra-ui/react"
import { totalNumberOfHelpPages } from "../pages/HelpPage";

/**
 * Function to move to next image in Help page.
 * Checks if it is the last page, if true, will display the done button instead of the next button
 * @param {*} param0 setHelpFirstPage, setHelpLastPage, HelpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource
 * @returns Next Button
 */
const HelpNextButton = ({ setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource }) => {

    const moveToNextHelpPage = () => {
        // last next page is the last page, display the done button
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