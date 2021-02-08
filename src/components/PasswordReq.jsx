import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function Login() {

    const context = useContext(ThemeContext);
    const centerText = context.centerText;

    return (
        <div style={passwordReq}>
            <h3 style={centerText}>Password Requirements</h3>
            <ul style={listStyle}>
                <li>Password must contain 1 upper case, lower case, number and special character</li>
                <li>Password must be longer than 8 characters</li>
                <li>Password must be less than 72 characters</li>
            </ul>
        </div>
    )
}

const passwordReq = {
    margin: "6rem 0",
    borderColor: "#000000",
    borderWidth: "thin",
    fontSize: "medium"
}

const listStyle = {
    listStylePosition: "inside",
    textAlign: "center",
    margin: "0 2rem",
    padding: "2rem",
    borderColor: "black",
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
}

