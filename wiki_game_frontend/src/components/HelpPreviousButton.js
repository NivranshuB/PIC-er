import { Button } from "@chakra-ui/react"

function HelpPreviousButton (setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource) {
    
    const moveToPreviousHelpPage = () => {
        //NEED TO CONSIDER HOW MANY HELP PAGES THERE ARE IN TOTAL

        if (helpCurrentPageNumber == 2) {
            setHelpFirstPage(true);
            setHelpLastPage(false);
            setHelpCurrentPageNumber(helpCurrentPageNumber - 1);
            setHelpImageSource(null);       //NEED TO SET TO GET THE IMAGE
        } else {
            setHelpFirstPage(false);
            setHelpLastPage(false);
            setHelpCurrentPageNumber(helpCurrentPageNumber - 1)
            setHelpImageSource(null);       //NEED TO SET TO GET THE IMAGE
        }
    }

    return (
        <Button onClick={() => moveToPreviousHelpPage()}>Previous</Button>
    )
}

export default HelpPreviousButton;