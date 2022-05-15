import { Button } from "@chakra-ui/react"

function HelpNextButton (setHelpFirstPage, setHelpLastPage, helpCurrentPageNumber, setHelpCurrentPageNumber, setHelpImageSource) {

    const moveToNextHelpPage = () => {
        //NEED TO CONSIDER HOW MANY HELP PAGES THERE ARE IN TOTAL

        if (helpCurrentPageNumber == 9) {
            setHelpFirstPage(false);
            setHelpLastPage(true)
            setHelpCurrentPageNumber(helpCurrentPageNumber + 1);
            setHelpImageSource(null);       //NEED TO SET TO GET THE IMAGE
        } else {
            setHelpFirstPage(false);
            setHelpLastPage(false);
            setHelpCurrentPageNumber(helpCurrentPageNumber + 1)
            setHelpImageSource(null);       //NEED TO SET TO GET THE IMAGE
        }
    }

    return (
        <Button onClick={() => moveToNextHelpPage()}>Next</Button>
    )
}

export default HelpNextButton;