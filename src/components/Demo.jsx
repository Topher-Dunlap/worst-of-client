import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function Demo() {

    const context = useContext(ThemeContext);
    const headerTheme = context.headerStyle;

    return (
        <section style={bottomMargin}>
            <header>
                <h2 style={headerTheme}>How to Demo</h2>
            </header>
            <p style={paraMargin}>If you'd like to demo this app without registration please enter the following credentials:</p>
            <ul style={listStyle}>
                <li>
                    Email: test@gmail.com
                </li>
                <li>
                    Password: P@sswordsAreCool1!
                </li>
            </ul>
        </section>
    )
}

const bottomMargin = {
    marginBottom: "6rem",
}

const paraMargin = {
    margin: "2rem 2rem",
    textAlign: "center",
}

const listStyle = {
    margin: "0 1rem",
    padding: "0",
    listStyleType: "none",
    fontWeight: "bold",
    textAlign: "center"
}
