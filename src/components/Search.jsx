import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import {useForm} from "react-hook-form";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function Search() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
            <div style={container}>
                <header>
                    <h1>Discover Mediocre</h1>
                </header>
                <section>
                    <SearchForm/>
                </section>
            </div>
            <div>
                <Results/>
            </div>
        </section>
    )
}

const container = {
    // minHeight: "200px",
    padding: "70px 15px",
}

// nav, footer {
//     padding: 1% 0;
//     background-color: #aaa;
// }