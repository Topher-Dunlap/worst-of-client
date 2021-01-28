import React from 'react';


export default function ResultsItem(props) {
    const businessName = props.name
    const businessRating = props.rating
    const businessImage = props.image_url
    const yelpLink = props.url

    return(
        <li style={resultsStyle}>
            <h2>{businessName}</h2>
            <p>Rating: {businessRating}</p>
            <img style={imageStyle} alt="business" src={businessImage}/>
            <br/>
            <a href={yelpLink}>Yelp page</a>
        </li>
    )
}

const imageStyle = {
    width: "75%",
    height: "auto",
}

const listStyling = {
    listStyleType: "none",
}

const resultSpacer = {
    margin: "3rem, auto",
}

const resultsStyle = {
    listStyleType: "none",
    textAlign: "center",
    margin: "5rem auto",
    height: "75%",
}