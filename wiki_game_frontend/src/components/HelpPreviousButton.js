import { Button } from "@chakra-ui/react"

/**
 * Function to move to previous image in Help page.
 * If first page, will hide the previous button because there are no other images before page 1
 * @param {*} param0 setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource
 * @returns Previous Button
 */
function HelpPreviousButton({ setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource }) {

    const moveToPreviousHelpPage = () => {

        if (helpCurrentPageNumber === 2) {
            setHelpFirstPage(true);
            setHelpLastPage(false);
        } else {
            setHelpFirstPage(false);
            setHelpLastPage(false);
        }
        setHelpCurrentPageNumber(helpCurrentPageNumber - 1);
        setHelpImageSource('helpImages/helpPage' + (helpCurrentPageNumber - 1) + '.png');
    }

    return (
        <Button onClick={() => moveToPreviousHelpPage()}>Previous</Button>
    )
}

export default HelpPreviousButton;