import React from 'react';
import {NavLink} from 'react-router-dom';
// import {BiHome} from "react-icons/bi";


export default function NavList(props) {
    return (
        <div style={navContainer}>
            <ul>
                <button style={navItem}>
                    <NavLink
                        exact to="/"
                        activeClassName="isActive"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#B3A577"
                        }}>
                        {/*<button image/>  imported image*/} About
                    </NavLink>
                </button>
                <button style={navItem}>
                    <NavLink
                        to="/login"
                        activeClassName="isActive"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#B3A577"
                        }}>
                        {/*<button image/>  imported image*/}Login
                    </NavLink>
                </button>
                <button style={navItem}>
                    <NavLink
                        to='/search'
                        activeClassName="isActive"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#B3A577"
                        }}>
                        {/*<button image/>  imported image*/}Search
                    </NavLink>
                </button>
            </ul>
        </div>
    )
}

const navContainer = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: "#aaa",
}

const navItem = {
    margin: ".5rem",
}