import { Heading, Image, HStack, Box, Progress, Center, Text } from "@chakra-ui/react"
import { useState } from "react";
import BackButton from "../components/BackButton";
import HelpDoneButton from "../components/HelpDoneButton";
import HelpNextButton from "../components/HelpNextButton";
import HelpPreviousButton from "../components/HelpPreviousButton";

const HelpPage = () => {

    const [helpFirstPage, setHelpFirstPage] = useState(true);
    const [helpLastPage, setHelpLastPage] = useState(false);
    const [helpCurrentPageNumber, setHelpCurrentPageNumber] = useState(1);  //Help pages are indexed from 1
    const [helpImageSource, setHelpImageSource] = useState(null);           //NEED TO USE THE CORRECT IMAGE SOURCE

    const totalNumberOfHelpPages = 10;  //NEED TO CHANGE TO CORRECT NUMBER OF PAGES


    return(
        <div>
            <BackButton />

            <Center><Heading fontSize='4xl'>Help</Heading></Center>

            {/*Image source from public folder */}
            {/*<Image boxSize='500px' src={helpImageSource}>Help image goes here</Image>*/}

            {/* Buttons to navigate through help pages with progress bar */}
            <Center>
                <HStack spacing='150px'>
                    <Box w='150px'>
                        {helpFirstPage ? 
                        <HelpPreviousButton 
                            setHelpFirstPage={setHelpFirstPage} 
                            setHelpLastPage={setHelpLastPage} 
                            helpCurrentPageNumber={helpCurrentPageNumber}
                            setHelpCurrentPageNumber={setHelpCurrentPageNumber}
                            setHelpImageSource={setHelpImageSource}/> 
                        : null}
                    </Box>
                    <Box w='600px'>
                        <Progress size='md' colorScheme='red' bg='lighterBackground' borderRadius='8px' value={(helpCurrentPageNumber/totalNumberOfHelpPages)*100} />
                        <Center><Text>{helpCurrentPageNumber}/{totalNumberOfHelpPages}</Text></Center>
                    </Box>
                    <Box w='150px'>
                        {helpLastPage ? 
                        <HelpDoneButton/> :
                        <HelpNextButton
                            setHelpFirstPage={setHelpFirstPage}
                            setHelpLastPage={setHelpLastPage} 
                            helpCurrentPageNumber={helpCurrentPageNumber}
                            setHelpCurrentPageNumber={setHelpCurrentPageNumber}
                            setHelpImageSource={setHelpImageSource}/> 
                        }
                    </Box>
                </HStack>
            </Center>
        </div>
    )

}

export default HelpPage;