import { Button, Center, Image, Modal, ModalBody, ModalContent, ModalOverlay, Stack, useDisclosure } from "@chakra-ui/react";

const ImageModal = ({ image, handleContinue }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Image src={image.imageURL} maxWidth='16%' maxHeight='80%' fit='contain' onClick={onOpen} _hover={{ cursor: 'pointer' }} />

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay backdropFilter='auto' backdropBrightness='20%' />
                <ModalContent bg='transparent'>
                    <ModalBody >
                        <Stack>
                            <Image src={image.imageURL} height='100%' />
                            <Button alignSelf='center' onClick={() => handleContinue(image)}>Select</Button>
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default ImageModal;