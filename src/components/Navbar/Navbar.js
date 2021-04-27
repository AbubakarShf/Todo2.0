import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo,
} from "./Navbar.element";
// import Login from "../../pages/Login/Login";

import todoSvg from "../../svg/todo.svg";
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Logo src={todoSvg} alt="logo" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" exact activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeStyle>
                        Todo
                    </NavLink>
                    <NavLink to="/signup" activeStyle>
                        SignUp
                    </NavLink>
                    <NavLink to="/logout" activeStyle>
                        LogOut
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;
