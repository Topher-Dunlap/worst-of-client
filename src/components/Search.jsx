import React, {useContext, useState} from 'react';
import ThemeContext from "./ThemeContext";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function Search() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    ///useState for yelp API results
    const [apiResults, setApiResults] = useState([{}]);

    //if no search has been made return no results
    function NoResults() {
        return <div></div>
    }

    //if search returns results render results else return nothing
    function ResultsConditional() {
        if (Object.keys(apiResults).length > 1) {
            console.log(apiResults)
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
