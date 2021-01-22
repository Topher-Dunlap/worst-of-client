import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavList(props) {

    const routeName = props.routeName;
    const routePath = props.routePath;

    return (
        <button style={navItem}>
            <NavLink
                exact to={routePath}
                activeClassName="isActive"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#B3A577"
                }}>
                {/*<button image/>  imported image*/} {routeName}
            </NavLink>
        </button>
    )
}

const navItem = {
    margin: ".5rem",
}