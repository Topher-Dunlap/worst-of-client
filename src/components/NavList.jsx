import React, { useState } from 'react';
import NavListButtons from "./NavListButtons";
import TokenService from '../service/token-service'
import LogInOutService from "../service/log-in-out-service"

export default function NavList() {

    const [loggedOutState, setLoggedOutState] = useState(true);

    const HandleLogoutClick = () => {
        console.log()
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
                    {TokenService.hasAuthToken()
                        ? LogInOutService.RenderLogoutLink(setLoggedOutState)
                        : LogInOutService.RenderLoginLink()}
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

// const navContainer = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 10,
//     backgroundColor: "#aaa",
// }

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