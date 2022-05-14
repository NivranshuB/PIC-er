import { Box, Center, Flex, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, VStack } from "@chakra-ui/react";
import RegularImageModal from "../modals/RegularImageModal";

const LeaderboardCard = (props) => {

    const { rank, name, clicks, time, startImage, targetImage} = props;

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            bg='lighterBackground'
            border='1px'
            borderColor='lighterBackground'
            borderRadius='8px'
            p='4px'
            m='8px'
            _hover={{ borderColor: 'accent', cursor: 'pointer' }}
            onClick={onOpen}
        >
            <Center flex='1'>
                {rank}
            </Center>
            <Box flex='2'>
                {name}
            </Box>
            <Center flex='1'>
                {clicks}
            </Center>
            <Center flex='1'>
                {time}
            </Center>

            <Modal isOpen={isOpen} onClose={onClose} size='3xl'>
                <ModalOverlay />
                <ModalContent bg='lighterBackground'>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex p='4px' ml='8px' mr='8px' mt='36px'>
                            <Center flex='1' >
                                <Heading size='md'>#</Heading>
                            </Center>
                            <Box flex='2'>
                                <Heading size='md'>Name</Heading>
                            </Box>
                            <Center flex='1'>
                                <Heading size='md'>Clicks</Heading>

                            </Center>
                            <Center flex='1'>
                                <Heading size='md'>Time</Heading>
                            </Center>
                        </Flex>

                        <Flex borderRadius='8px' p='4px' ml='8px' mr='8px' mt='24px' bg='background'>
                            <Center flex='1' >
                                {rank}
                            </Center>
                            <Box flex='2'>
                                {name}
                            </Box>
                            <Center flex='1'>
                                {clicks}
                            </Center>
                            <Center flex='1'>
                                {time}
                            </Center>

                        </Flex>
                            <Flex m='24px'>
                                <VStack width='100%' p='8px'>
                                    <Heading size='md'>Starting image</Heading>
                                    <Box bg='background' padding='8px' borderRadius='8px'>
                                        {/* <Image src={startImage}></Image>    */}
                                        <RegularImageModal image={startImage} />
                                    </Box>
                                </VStack>
                                <VStack width='100%' p='8px'>
                                    <Heading size='md'>Goal image</Heading>
                                    <Box bg='background' padding='8px' borderRadius='8px'>
                                        {/* <Image src={targetImage}></Image> */}
                                        <RegularImageModal image={targetImage} />
                                    </Box>
                                </VStack>
                            </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Flex>
    )
}

export default LeaderboardCard;