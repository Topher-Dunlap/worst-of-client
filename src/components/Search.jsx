import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
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
    padding: "70px 15px",
}
