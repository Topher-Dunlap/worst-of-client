import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function Projects() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
            <div>
                <h1 style={bottomMargin}>Landing</h1>
            </div>
        </section>
    )
}

const bottomMargin = {
    marginBottom: "2rem",
}
