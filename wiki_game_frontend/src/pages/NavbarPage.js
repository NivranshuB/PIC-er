import { Button, ButtonGroup, Center, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import LoginModal from "../components/LoginModal";

const NavbarPage = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <div>
            <Flex color='accent' backgroundColor='lighterBackground'>
                <Center pl='4'>
                    PIC-er
                </Center>

                <Spacer />
                <ButtonGroup>
                    <Button variant='borderlessWhite'>Sign Up</Button>
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