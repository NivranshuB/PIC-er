import { Box, Button, ButtonGroup, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarPage = () => {
    const { user, loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

    return (
        <Box height='100vh'>
            <Flex color='accent' backgroundColor='lighterBackground' pl='16px' pr='16px'>
                    <Link to='/'>
                        <Heading textAlign='center'>PIC-er</Heading>
                    </Link>

                <Spacer />

                <ButtonGroup>

                    {/* Displays Sign up and Login buttons if not logged in else shows username and Logout button */}
                    {(!isLoading && isAuthenticated)
                        ? <HStack>
                            <Text color='white'>Hi, {user.nickname}</Text>
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