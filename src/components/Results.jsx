import React from 'react';
import ResultsItem from "./ResultsItem";

export default function Results(props) {

    const apiResults = props.apiResults;
    console.log("apiResults Results component: ", apiResults)
    const mapResultsItem = apiResults.map((business, idx) =>
        <ResultsItem
            key={idx}
            name={business.name}
            rating={business.rating}
            image_url={business.image_url}
            url={business.url}
            location={business.location}
            review={business.review}
        />
    )

    return (
        <section>
            <h1 style={bottomMargin}>Results</h1>
            <ul style={listStyle}>
                {mapResultsItem}
            </ul>
        </section>
    )
}

const bottomMargin = {
    textAlign: "center",
    marginBottom: "2rem",
}

const listStyle = {
    padding: "0",
}
