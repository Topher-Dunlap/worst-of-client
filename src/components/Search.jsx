import React, {useContext, useState} from 'react';
import ThemeContext from "./ThemeContext";
import Results from "./Results";
import SearchForm from "./SearchForm";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Search() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    ///useState for yelp API results
    const [apiResults, setApiResults] = useState([]);

    ///

    ///useState for loading spinner
    const [loadingSpinner, setLoadingSpinner] = useState(false);

    //if no search has been made return no results
    function NoResults() {
        return <div style={noResultsStyle}>Sorry, no results available. Please try again or search different region</div>
    }

    //if search returns results render results else return nothing
    function ResultsConditional() {
        if (apiResults[0] !== undefined) {
            return <Results apiResults={apiResults}/>
        }
        else {
            return apiResults[0] === "No Results" ? <NoResults/> : <div></div>;
        }
    }

    return (
        <section style={theme}>
            <div style={container}>
                <header>
                    <h1>Discover Mediocre</h1>
                </header>
                <section>
                    <SearchForm
                        setApiResults={setApiResults}
                        setLoadingSpinner={setLoadingSpinner}
                    />
                </section>
            </div>
            <div>
                <Loader
                    style={centerSpinner}
                    type="TailSpin"
                    color="grey"
                    height={80}
                    width={80}
                    visible={loadingSpinner}/>
                <ResultsConditional/>
            </div>
        </section>
    )
}

const noResultsStyle = {
    color: "red",
    textAlign:"center"
}

const container = {
    padding: "70px 15px",
    textAlign: "center",
}

const centerSpinner = {
    textAlign: "center",
}
