import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function ResultsItem(props) {

    ///generates random background color from context
    const context = useContext(ThemeContext);
    const backgroundColor = context.backgroundColors;
    const randomColorNum = Math.floor(Math.random() * Math.floor(3));
    const backgroundColorPicker = backgroundColor[randomColorNum]

    ///prop values
    const businessName = props.name
    const businessRating = props.rating
    const businessImage = props.image_url
    const yelpLink = props.url

    return(
        <li style={resultsStyle}>
            <div style={backgroundColorPicker}>
                <h2>{businessName}</h2>
                <p>Rating: {businessRating}</p>
                <img style={imageStyle} alt="business" src={businessImage}/>
                <br/>
                <a href={yelpLink} target="_blank" rel="noopener noreferrer">Yelp page</a>
            </div>
        </li>
    )
}

const imageStyle = {
    width: "75%",
    height: "auto",
}

const resultsStyle = {
    listStyleType: "none",
    textAlign: "center",
    margin: "5rem auto",
    height: "75%",
}