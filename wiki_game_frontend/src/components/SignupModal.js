import { Button, Center, FormControl, FormHelperText, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Spacer, Stack } from "@chakra-ui/react"

const SignupModal = (props) => {

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
                                <Heading size='lg' alignContent='center'>Sign Up</Heading>
                            </Center>
                            <Spacer />
                            <FormControl>
                                <Input id='username' placeholder='Username'/>
                            </FormControl>
                            <Spacer />
                            <FormControl>
                                <Input id='password' placeholder='Email' type='email'/>
                                <FormHelperText>e.g. email@email.com</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Input id='password' placeholder='Password' type='password'/>
                                <FormHelperText>Must be at least 8 characters</FormHelperText>
                            </FormControl>
                            <FormControl>
                                <Input id='confirmPassword' placeholder='Confirm Password' type='password'/>
                            </FormControl>
                            <Spacer />
                            <Center>
                                <Button type='submit'>Sign Up</Button>
                            </Center>
                            <Spacer />
                            <Center>
                                Already have an account?
                                <Button variant='borderless' ml='8px'>Login</Button>
                            </Center>
                            <Spacer />
                        </Stack>

                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )

}

export default SignupModal;