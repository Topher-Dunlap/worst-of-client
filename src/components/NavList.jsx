import React from 'react';
import NavListButtons from "./NavListButtons";
// import {BiHome} from "react-icons/bi";


export default function NavList() {

    //Map the Nav Buttons with data from filterOptions
    const mapNavRoutes = filterOptions.map((routeData, idx) =>
        <NavListButtons
            key={idx}
            routeName={routeData.routeName}
            routePath={routeData.routePath}
        />
    )

    return (
        <div style={navContainer}>
            <ul>
                {mapNavRoutes}
            </ul>
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
    {
        routeName: "Login",
        routePath: "/login"
    },
]

const navContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#aaa",
}