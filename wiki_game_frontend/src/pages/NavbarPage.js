import { Button, ButtonGroup, Center, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

const NavbarPage = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isOpenSignup, onOpen: onOpenSignup, onClose: onCloseSignup} = useDisclosure();

    return (
        <div>
            <Flex color='accent' backgroundColor='lighterBackground'>
                <Center pl='4'>
                    PIC-er
                </Center>

                <Spacer />
                <ButtonGroup>
                    <Button variant='borderlessWhite' onClick={onOpenSignup}>Sign Up</Button>
                    <SignupModal isOpen={isOpenSignup} onClose={onCloseSignup}/>
                    <Button variant='borderless' onClick={onOpen}>Login</Button>
                    <LoginModal isOpen={isOpen} onClose={onClose}/>
                </ButtonGroup>

            </Flex>
            {/* Renders children pages */}
            <Outlet />
        </div>
    )
}

export default NavbarPage;