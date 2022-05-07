import { Button, ButtonGroup, Center, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { useAuth0 } from "@auth0/auth0-react";



const NavbarPage = () => {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {isOpen: isOpenSignup, onOpen: onOpenSignup, onClose: onCloseSignup} = useDisclosure();

    return (
        <div>
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
                    {isAuthenticated 
                    ? <span><Button variant='borderless' onClick={() => logout({returnTo: window.location.origin})}>Logout</Button><h2>{user.email}</h2></span>
                    : <Button variant='borderless' onClick={() => loginWithRedirect()}>Login</Button>}
                    
                    
                    <LoginModal isOpen={isOpen} onClose={onClose}/>
                </ButtonGroup>

            </Flex>
            {/* Renders children pages */}
            <Outlet />
        </div>
    )
}

export default NavbarPage;