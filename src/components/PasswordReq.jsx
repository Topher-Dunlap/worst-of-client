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
}

