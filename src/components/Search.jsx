import React, {useContext, useState} from 'react';
import ThemeContext from "./ThemeContext";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function Search() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    ///useState for yelp API results
    const [apiResults, setApiResults] = useState([{}]);

    function NoResults() {
        return <div></div>
    }

    function ResultsConditional() {
        console.log(apiResults)
        if (Object.keys(apiResults).length > 1) {
            return <Results apiResults={apiResults}/>
        }
        else {
            return <NoResults />;
        }
    }

    return (
        <section style={theme}>
            <div style={container}>
                <header>
                    <h1>Discover Mediocre</h1>
                </header>
                <section>
                    <SearchForm setApiResults={setApiResults}/>
                </section>
            </div>
            <div>
                <ResultsConditional/>
            </div>
        </section>
    )
}

const container = {
    padding: "70px 15px",
}
