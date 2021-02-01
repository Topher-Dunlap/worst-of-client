import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import TokenService from "./token-service";
import AuthContext from "../components/AuthContext";


const LogInOutService = {

    RenderLogoutLink() {
        const { setLoggedIn } = useContext(AuthContext)
        const HandleLogoutClick = () => {
                TokenService.clearAuthToken()
                setLoggedIn(TokenService.hasAuthToken())
        }

        return (
            <div style={marginRight} className='Header__logged-in'>
                <Link
                    onClick={HandleLogoutClick}
                    to='/'>
                    Logout
                </Link>
            </div>
        )
    },

    RenderLoginLink() {
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
}

export default LogInOutService

const linkSpace = {
    margin: "2.5rem 1rem"
}

const marginRight = {
    marginRight: "2rem"
}