import { Heading, Image, HStack, Box, Progress, Center, Text } from "@chakra-ui/react"
import { useState } from "react";
import BackButton from "../components/BackButton";
import HelpDoneButton from "../components/HelpDoneButton";
import HelpNextButton from "../components/HelpNextButton";
import HelpPreviousButton from "../components/HelpPreviousButton";

export const totalNumberOfHelpPages = 12;

const HelpPage = () => {

    const [helpFirstPage, setHelpFirstPage] = useState(true);
    const [helpLastPage, setHelpLastPage] = useState(false);
    const [helpCurrentPageNumber, setHelpCurrentPageNumber] = useState(1);  //Help pages are indexed from 1
    const [helpImageSource, setHelpImageSource] = useState('/helpImages/helpPage1.png');

    return (
        <div>
            <BackButton />

            <Center><Heading fontSize='4xl'>Help</Heading></Center>

            {/*Image source from public folder */}
            <Center p='16px'>
                <Image fit='contain' boxSize='55%' src={helpImageSource} />
            </Center>


            {/* Buttons to navigate through help pages with progress bar */}
            <Center>
                <HStack spacing='150px'>
                    <Box w='150px'>
                        {helpFirstPage ?
                            null :
                            <HelpPreviousButton
                                setHelpFirstPage={setHelpFirstPage}
                                setHelpLastPage={setHelpLastPage}
                                helpCurrentPageNumber={helpCurrentPageNumber}
                                setHelpCurrentPageNumber={setHelpCurrentPageNumber}
                                setHelpImageSource={setHelpImageSource} />
                            }
                    </Box>
                    <Box w='600px'>
                        <Progress size='md' colorScheme='red' bg='lighterBackground' borderRadius='8px' value={(helpCurrentPageNumber / totalNumberOfHelpPages) * 100} />
                        <Center><Text>{helpCurrentPageNumber}/{totalNumberOfHelpPages}</Text></Center>
                    </Box>
                    <Box w='150px'>
                        {helpLastPage ?
                            <HelpDoneButton /> :
                            <HelpNextButton
                                setHelpFirstPage={setHelpFirstPage}
                                setHelpLastPage={setHelpLastPage}
                                helpCurrentPageNumber={helpCurrentPageNumber}
                                setHelpCurrentPageNumber={setHelpCurrentPageNumber}
                                setHelpImageSource={setHelpImageSource} />
                        }
                    </Box>
                </HStack>
            </Center>
        </div>
    )

}

export default HelpPage;