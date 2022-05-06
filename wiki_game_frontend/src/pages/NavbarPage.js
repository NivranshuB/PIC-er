import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const NavbarPage = () => {
    return (
        <div>
            <Flex color='accent' backgroundColor='lighterBackground'>
                PIC-er
            </Flex>
            {/* Renders children pages */}
            <Outlet />
        </div>
    )
}

export default NavbarPage;