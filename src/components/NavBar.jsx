import React, {useContext, useEffect, useState, useRef} from 'react';
import NavListLinks from "./NavListLinks";
import LoginLinks from "./LoginLinks";
import TokenService from '../service/token-service'
import AuthContext from '../components/AuthContext'
import {Link} from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Burger from 'react-css-burger';
import {CgClose} from 'react-icons/cg';
import ThemeContext from "./ThemeContext";

export default function NavBar() {

    //Context Theme
    const context = useContext(ThemeContext);
    const fontColor = context.fontColor;

    ///for Popup/burger feature
    const ref = useRef();
    const closeMenu = () => ref.current.close();
    ///for login state
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    ///for burger menu state
    const [state, setState] = useState(false);

    const HandleLogoutClick = () => {
        TokenService.clearAuthToken()
        setLoggedIn(TokenService.hasAuthToken())
    }

    ///renders login or logout options depending on auth token
    useEffect(() => {
            const loggedInUser = localStorage.getItem("worst-of-client-auth-token");
            if (loggedInUser) {
                setLoggedIn(true);
            }
        }
    );

    function RenderLogoutLink() {
        return (
            <Link
                onClick={HandleLogoutClick}
                style={fontColor}
                to='/'>
                Logout
            </Link>
        )
    }

    ///Map the login/register out links
    const loginLinks = loginLinkOptions.map((routeData, idx) =>
        <LoginLinks
            key={idx}
            closeMenu={closeMenu}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    ///Map the Nav Links with data from filterOptions
    const navRoutes = filterOptions.map((routeData, idx) =>
        <NavListLinks
            key={idx}
            closeMenu={closeMenu}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return (
        <div style={topNav}>
            <Popup
                modal
                ref={ref}
                contentStyle={popUpStyle}
                closeOnDocumentClick
                onOpen={() => setState(true)}
                onClose={() => setState(false)}
                trigger={
                    <Burger
                        active={state}
                        style={burgerStyle}
                        burger="3dy"
                        color="white"
                        hoverOpacity={0.8}
                        scale={1.2}
                    />
                }
            >
                <Link onClick={() => {
                    setState(false)
                    closeMenu()
                }
                } to={false}>
                    <CgClose style={closeButtonStyle}/>
                </Link>
                <ul style={topNavLeft}>
                    {navRoutes}
                    {loggedIn ? RenderLogoutLink() : loginLinks}
                </ul>
            </Popup>
            <h1 style={headerStyle}>Worst Of</h1>
        </div>
    )
}

//data used to populate nav login Links
const loginLinkOptions = [
    {
        routeName: "Register",
        routePath: "/register"
    },
    {
        routeName: "Login",
        routePath: "/login"
    },
]

//data used to populate nav Links
const filterOptions = [
    {
        routeName: "About",
        routePath: "/"
    },
    {
        routeName: "Search",
        routePath: "/search"
    },
]

const headerStyle = {
    color: "white",
    margin: "2rem",
    textAlign: "center",
}

const popUpStyle = {
    margin: "auto",
    background: "rgb(255, 255, 255)",
    height: "37%",
    width: "60%",
    padding: "0 0 80px",
    border: "none",
    fontSize: "25px",
    borderRadius: "5px",
}

const topNav = {
    backgroundColor: "#0B132B",
    display: "flex",
}

const topNavLeft = {
    margin: "0",
    listStyleType: "none",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
}

const closeButtonStyle = {
    margin: ".5rem",
}

const burgerStyle = {
    marginTop: "0",
}