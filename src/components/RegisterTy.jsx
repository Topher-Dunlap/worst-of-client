import React from 'react';
import Login from './Login'

export default function RegisterTy() {

    return (
        <div>
            <div style={centerText}>
                <h2>
                    Thank You For Registering!
                </h2>
                <p>
                    Please login to begin searching.
                </p>
            </div>
            <Login/>
        </div>
    )
}

const centerText = {
    textAlign: "center",
    margin: "2rem 0",
}

