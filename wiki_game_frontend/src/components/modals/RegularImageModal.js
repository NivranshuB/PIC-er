import { Center, Image, Modal, ModalBody, ModalContent, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";

const RegularImageModal = ({ image }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Center>
                <Image src={image} fit='contain' maxWidth='300px' maxHeight='300px' onClick={onOpen} _hover={{ cursor: 'pointer' }} />
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