import { Center, Image, Modal, ModalBody, ModalContent, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";

/**
 * Image modal for image without the need for a button
 * Allows the user to view a larger version of the image
 * @param {*} image image to be displayed
 * @returns Image as well as a modal
 */
const RegularImageModal = ({ image }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center w='300px' h='300px' >
                <Image src={image} fit='contain' maxH='100%' maxW='100%' onClick={onOpen} _hover={{ cursor: 'pointer' }}  />
            </Center>

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay backdropFilter='auto' backdropBrightness='20%' />
                <ModalContent bg='transparent'>
                    <ModalBody >
                        <Stack>
                            <Image src={image} height='100%' />
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default RegularImageModal;