import { Button, ButtonGroup, Center, Flex, Spacer } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const NavbarPage = () => {
    return (
        <div>
            <Flex color='accent' backgroundColor='lighterBackground'>
                <Center pl='4'>
                PIC-er
                </Center>
                
                <Spacer />
                <ButtonGroup>
                    <Button>Sign Up</Button>
                    <Button>Login</Button>
                </ButtonGroup>

            </Flex>
            {/* Renders children pages */}
            <Outlet />
        </div>
    )
}

export default NavbarPage;