import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import ResultsItem from "./ResultsItem";

export default function Results(props) {

    const context = useContext(ThemeContext);
    const apiResults = props.apiResults;
    console.log("Results -> apiResults:", apiResults)

    ///generates random background color from context
    const backgroundColor = context.backgroundColors;
    const randomColorNum = Math.floor(Math.random() * Math.floor(3));
    const backgroundColorPicker = backgroundColor[randomColorNum]

    const mapResultsItem = apiResults.map((business, idx) =>
        <ResultsItem
            key={idx}
            name={business.name}
            rating={business.rating}
            image_url={business.image_url}
            url={business.url}
        />
    )
    console.log("Results -> mapResultsItem:", mapResultsItem)

    return (
        <section style={backgroundColorPicker}>
            <h1 style={bottomMargin}>Results</h1>
            <ul>
                    {mapResultsItem}
            </ul>
        </section>
    )
}

const bottomMargin = {
    marginBottom: "2rem",
}
