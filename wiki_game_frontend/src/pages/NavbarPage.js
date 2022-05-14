import { Box, Button, ButtonGroup, Center, Flex, HStack, Spacer } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarPage = () => {
    const { user, loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

    return (
        <Box height='100vh'>
            <Flex color='accent' backgroundColor='lighterBackground'>
                <Center pl='4'>
                    <Link to='/'>
                        PIC-er
                    </Link>
                </Center>

                <Spacer />

                <ButtonGroup>

                    {(!isLoading && isAuthenticated)
                        ? <HStack>
                            <h2>Hi, {user.nickname}</h2>
                            <Button variant='borderless' onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                        </HStack>
                        : (<>
                            <Button variant='borderlessWhite' onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Sign Up</Button>
                            <Button variant='borderless' onClick={() => loginWithRedirect()}>Login</Button>
                        </>)}
                </ButtonGroup>

            </Flex>
            
            {/* Renders children pages */}
            <Outlet />
        </Box>
    )
}

export default NavbarPage;