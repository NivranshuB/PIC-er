import { Button } from "@chakra-ui/react"

function HelpPreviousButton ({setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource}) {
    
    const moveToPreviousHelpPage = () => {

        if (helpCurrentPageNumber === 2) {
            setHelpFirstPage(true);
            setHelpLastPage(false);
        } else {
            setHelpFirstPage(false);
            setHelpLastPage(false);            
        }
        setHelpCurrentPageNumber(helpCurrentPageNumber - 1);
        setHelpImageSource('helpImages/' + (helpCurrentPageNumber - 1) + '.png');
    }

    return (
        <Button onClick={() => moveToPreviousHelpPage()}>Previous</Button>
    )
}

export default HelpPreviousButton;