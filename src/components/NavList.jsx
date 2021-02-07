import React, {useContext, useEffect} from 'react';
import NavListButtons from "./NavListButtons";
import TokenService from '../service/token-service'
import AuthContext from '../components/AuthContext'
import {Link} from "react-router-dom";

export default function NavList() {

    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const HandleLogoutClick = () => {
        TokenService.clearAuthToken()
        setLoggedIn(TokenService.hasAuthToken())
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("worst-of-client-auth-token");
        if (loggedInUser) {
            setLoggedIn(true);
        }
    },);

    function RenderLogoutLink() {
        return (
                <Link
                    onClick={HandleLogoutClick}
                    to='/'>
                    Logout
                </Link>
        )
    }

    function RenderLoginLink() {
        return (
            <div>
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
            {/*<ul style={topNavLeft}>*/}
            {/*    {mapNavRoutes}*/}
            {/*    {loggedIn ? RenderLogoutLink() : RenderLoginLink()}*/}
            {/*</ul>*/}
            <div style={myLinks}>
                {mapNavRoutes}
                {loggedIn ? RenderLogoutLink() : RenderLoginLink()}
            </div>
            <h1 style={headerStyle}>Worst Of</h1>
        </div>
    )
}

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
    justifyContent: "center",
}

const myLinks = {
    display: "none",
}

const linkSpace = {
    margin: "2.5rem 1rem"
}

const marginRight = {
    marginRight: "2rem",
    display: "inline-block",
}

const topNav = {
    // overflow: "hidden",
    backgroundColor: "#0B132B",
    // display: "inline",
    display: "flex",
    border: "1px solid black",
    // justifyContent: "center",
}

const topNavLeft = {
    display: "inline-block",
    float: "left",
    color: "#f2f2f2",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    fontSize: "17px",
}

const topNavRight = {
    display: "inline-block",
    float: "right"
}