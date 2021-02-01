import React from 'react';
import NavListButtons from "./NavListButtons";
import TokenService from '../service/token-service'
import LogInOutService from "../service/log-in-out-service"
// import {Link} from "react-router-dom";

export default function NavList() {

    // const HandleLogoutClick = () => {
    //     TokenService.clearAuthToken()
    // }
    //
    // function RenderLogoutLink() {
    //     return (
    //         <div style={marginRight} className='Header__logged-in'>
    //             <Link
    //                 onClick={HandleLogoutClick}
    //                 to='/'>
    //                 Logout
    //             </Link>
    //         </div>
    //     )
    // }
    //
    // function RenderLoginLink() {
    //     return (
    //         <div style={marginRight}>
    //             <Link
    //                 style={linkSpace}
    //                 to='/register'>
    //                 Register
    //             </Link>
    //             <Link
    //                 style={linkSpace}
    //                 to='/login'>
    //                 Log in
    //             </Link>
    //         </div>
    //     )
    // }



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
                        ? LogInOutService.RenderLogoutLink()
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

// const linkSpace = {
//     margin: "2.5rem 1rem"
// }
//
// const marginRight = {
//     marginRight: "2rem"
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