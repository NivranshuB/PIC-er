import { Outlet } from "react-router-dom";

const NavbarPage = () => {
    return (
        <div>
            Navbar
            {/* Renders children pages */}
            <Outlet/>
        </div>
    )
}

export default NavbarPage;