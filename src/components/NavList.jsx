import React, {useContext, useEffect} from 'react';
import NavListButtons from "./NavListButtons";
import TokenService from '../service/token-service'
// import LogInOutService from "../service/log-in-out-service"
import AuthContext from '../components/AuthContext'
import {Link} from "react-router-dom";

export default function NavList() {

    const { loggedIn, setLoggedIn } = useContext(AuthContext);
    const HandleLogoutClick = () => {
        TokenService.clearAuthToken()
        setLoggedIn(TokenService.hasAuthToken())
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("worst-of-client-auth-token");
        if (loggedInUser) {
            setLoggedIn(true);
        }
    }, );

    function RenderLogoutLink() {
        return (
            <div style={marginRight} className='Header__logged-in'>
                <Link
                    onClick={HandleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    function RenderLoginLink() {
        return (
            <div style={marginRight}>
                <Link
                    style={linkSpace}
                    to='/register'>
                    Register
                </Link>
                <Link
                    style={linkSpace}
                    to='/login'>
                    Log in
                </Link>
            </div>
        )
    }

    //Map the Nav Buttons with data from filterOptions
    const mapNavRoutes = filterOptions.map((routeData, idx) =>
        <NavListButtons
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return (
        <div style={topNav}>
            <ul style={topNavLeft}>
                {mapNavRoutes}
            </ul>
            <div style={topNavRight}>
                <ul>
                    {loggedIn ? RenderLogoutLink() : RenderLoginLink()}
                </ul>
            </div>
        </div>
    )
}

//data used to populate nav buttons
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

const linkSpace = {
    margin: "2.5rem 1rem"
}

const marginRight = {
    marginRight: "2rem"
}

const topNav = {
    overflow: "hidden",
    backgroundColor: "#aaa",
}

const topNavLeft = {
    float: "left",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
}

const topNavRight = {
    float: "right"
}