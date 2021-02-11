import React from 'react';
import Login from './Login'

export default function RegisterTy() {

    return (
        <div style={centerText}>
            <h2>
                Thank You For Registering!
            </h2>
            <p>
                Please login to begin searching.
            </p>
            <Login/>
        </div>
    )
}

const centerText = {
    textAlign: "center",
}

