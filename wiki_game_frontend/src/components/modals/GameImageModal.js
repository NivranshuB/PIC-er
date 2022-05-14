import { Button, Image, Modal, ModalBody, ModalContent, ModalOverlay, Spacer, Stack, useDisclosure } from "@chakra-ui/react";

const GameImageModal = ({ image, handleContinue }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = (image) => {
        onClose();
        handleContinue(image);
    }

    return (
        <>
            <Spacer />
            <Image src={image.imageURL} minWidth='15%' maxWidth='15%' maxHeight='250px' fit='contain' onClick={onOpen} _hover={{ cursor: 'pointer' }} />
            <Spacer />

            <Modal isOpen={isOpen} onClose={onClose} size='xl'>
                <ModalOverlay backdropFilter='auto' backdropBrightness='20%' />
                <ModalContent bg='transparent'>
                    <ModalBody >
                        <Stack>
                            <Image src={image.imageURL} height='100%' />
                            <Button alignSelf='center' onClick={() => handleClick(image)}>Select</Button>
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </>

    )
}

export default GameImageModal;