import { Button, Center, FormControl, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Spacer, Stack } from "@chakra-ui/react"

const LoginModal = (props) => {

    const { isOpen, onClose } = props;

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='lighterBackground'>
                    <ModalCloseButton />
                    <ModalBody>

                        <Stack spacing='24px'>
                            <Spacer />
                            <Center>
                                <Heading size='lg' alignContent='center'>Login</Heading>
                            </Center>
                            <Spacer />
                            <FormControl>
                                <Input id='username' placeholder='Username'/>
                            </FormControl>
                            <Spacer />
                            <FormControl>
                                <Input id='password' placeholder='Password' type='password'/>
                            </FormControl>
                            <Spacer />
                            <Center>
                                <Button type='submit'>Login</Button>
                            </Center>
                            <Spacer />
                            <Center>
                                Don't have an account?
                                <Button variant='borderless' ml='8px'>Sign up</Button>
                            </Center>
                            <Spacer />
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )

}

export default LoginModal;