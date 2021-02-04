import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import RatingImages from "./RatingImages";
import noImg from "../images/no-img.png"

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
    const location = props.location
    const review = props.review

    ///create list display for business address
    const addressMap = location.display_address.map((line, idx) =>
        <li key={idx}>
            {line}
        </li>
    )

    return(
        <li style={resultsStyle}>
            <div style={backgroundColorPicker}>
                <h2>{businessName}</h2>
                <RatingImages businessRating={businessRating}/>
                <br/>
                <a href={yelpLink} target="_blank" rel="noopener noreferrer">
                    <img
                        style={imageStyle}
                        alt="business"
                        src={businessImage ? businessImage : noImg}
                    />
                </a>
                <p style={pStyle}>{review}</p>
                <ul style={innerListStyle}>
                    <h3>Address</h3>
                    {addressMap}
                </ul>
            </div>
        </li>
    )
}

const imageStyle = {
    width: "250px",
    height: "250px",
}

const innerListStyle = {
    listStyleType: "none",
    textAlign: "center",
    padding: "0",
    height: "75%",
}

const pStyle = {
    margin: "1rem 3rem",
}
const resultsStyle = {
    listStyleType: "none",
    textAlign: "center",
    padding: "0",
    margin: "5rem auto",
    height: "75%",
}