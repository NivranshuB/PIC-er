import { Box, Button, ButtonGroup, Center, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { useAuth0 } from "@auth0/auth0-react";
import MD5 from 'crypto-js/md5';

const NavbarPage = () => {

    const { user, loginWithRedirect, logout, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isOpenSignup, onOpen: onOpenSignup, onClose: onCloseSignup} = useDisclosure();

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
                    <Button variant='borderlessWhite' onClick={() => loginWithRedirect({screen_hint: 'signup'})}>Sign Up</Button>
                    <SignupModal isOpen={isOpenSignup} onClose={onCloseSignup}/>
                    {(!isLoading && isAuthenticated) 
                    ? <span><Button variant='borderless' onClick={() => logout({returnTo: window.location.origin})}>Logout</Button><h2>{MD5(user.username).toString()}</h2></span>
                    : <Button variant='borderless' onClick={() => loginWithRedirect()}>Login</Button>}
                    <LoginModal isOpen={isOpen} onClose={onClose}/>
                </ButtonGroup>

            </Flex>
            {/* Renders children pages */}
            <Outlet />
        </Box>
    )
}

export default NavbarPage;