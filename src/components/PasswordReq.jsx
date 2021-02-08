import React from 'react';

export default function Login() {

    return (
        <div style={passwordReq}>
            <h3>Password Requirements</h3>
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
    borderRadius: "5px",
    borderColor: "black",
        backgroundColor: "#E5E5E5",
        boxShadow:
            `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
        0 6.7px 2.3px rgba(0, 0, 0, 0.048),
        0 12.5px 4px rgba(0, 0, 0, 0.06),
        0 22.3px 6.9px rgba(0, 0, 0, 0.072),
        0 41.8px 8.4px rgba(0, 0, 0, 0.086),
        0 100px 100px rgba(0, 0, 0, 0.12)`
}

