import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import ThemeContext from "./ThemeContext";

export default function NavListLinks(props) {

    ///context theme styling
    const context = useContext(ThemeContext);
    const fontColor = context.fontColor;

    ///props
    const closeMenu = props.closeMenu;
    const routeName = props.routeName;
    const routePath = props.routePath;

    return (
        <li>
            <Link
                onClick={closeMenu}
                style={fontColor}
                to={routePath}>
                {routeName}
            </Link>
            <hr/>
        </li>
    )
}