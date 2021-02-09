import React from 'react';

export default function Demo() {

    return (
        <section style={demoMargin}>
            <header>
                <h2 style={headerTheme}>How to Demo</h2>
            </header>
            <p style={paraMargin}>If you'd like to demo this app without registration please enter the following credentials:</p>
            <ul style={listStyle}>
                <li>
                    Email: tester@gmail.com
                </li>
                <li>
                    Password: P@ssword1!
                </li>
            </ul>
        </section>
    )
}

const demoMargin = {
    margin: "4rem 2rem 6rem 2rem",
    borderRadius: "10px 10px 10px 10px / 10px 10px 10px 10px",
    borderStyle: "solid",
    borderColor: "#0B132B",
    padding: "20px",
}

const paraMargin = {
    margin: "0 2rem 2rem",
    textAlign: "center",
}

const headerTheme = {
    textAlign: "center",
    backgroundColor: "#0B132B",
    color: "white",
    margin: "0 0 2rem",
}

const listStyle = {
    margin: "0 1rem",
    padding: "0",
    listStyleType: "none",
    fontWeight: "bold",
    textAlign: "center"
}
