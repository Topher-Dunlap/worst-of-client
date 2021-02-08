import React from 'react';
import ResultsItem from "./ResultsItem";

export default function Results(props) {

    const apiResults = props.apiResults;
    const mapResultsItem = apiResults.map((business, idx) =>
        <ResultsItem
            key={idx}
            name={business.name}
            rating={business.rating}
            image_url={business.image_url}
            url={business.url}
            location={business.location}
            locationLong={business.coordinates.longitude}
            locationLat={business.coordinates.latitude}
            review={business.review}
            reviewUrl={business.reviewUrl}
            reviewerImg={business.reviewerImg}
        />
    )
    console.log("business review URL: ", apiResults[0])

    return (
        <section style={resultsColor}>
            <h1 style={headerStyle}>Results</h1>
            <ul style={listStyle}>
                {mapResultsItem}
            </ul>
        </section>
    )
}

const headerStyle = {
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    paddingTop: "3rem",
    marginTop: "2rem",
}

const resultsColor = {
    backgroundColor: "#3A506B",
}

const listStyle = {
    padding: "0",
}
