import React from 'react';
import RatingImages from "./RatingImages";
import ResultsReview from "./ResultsReview";
import noImg from "../images/no-img.png"

export default function ResultsItem(props) {

    ///prop values
    const businessName = props.name
    const businessRating = props.rating
    const businessImage = props.image_url
    const yelpLink = props.url
    const location = props.location
    const locationLong = props.locationLong
    const locationLat = props.locationLat
    const review = props.review
    const reviewUrl = props.reviewUrl
    const reviewerImg = props.reviewerImg
    const googleMapsURL = `https://maps.google.com/?q=${locationLat},${locationLong}`

    ///create list display for business address
    const addressMap = location.display_address.map((line, idx) =>
        <li key={idx}>
            {line}
        </li>
    )

    ///conditional render for review
    const insertReviews = () => {
        console.log("review URL: ", reviewUrl)
        if (review) {
            return (
                <ResultsReview
                    reviewerImg={reviewerImg}
                    reviewUrl={reviewUrl}
                    review={review}
                />
            )
        }
        else {
            return <p>Reviews Not Available</p>
        }
    }

    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <a href={yelpLink} style={linkStyle} target="_blank" rel="noopener noreferrer">
                    <h2>{businessName}</h2>
                </a>
                <RatingImages businessRating={businessRating}/>
                <br/>
                <img
                    style={imageStyle}
                    alt="business"
                    src={businessImage ? businessImage : noImg}
                />
                {insertReviews()}
                <div>
                    <ul style={innerListStyle}>
                        <h3>Address</h3>
                        <a href={googleMapsURL} style={addressBoxStyle} target="_blank" rel="noopener noreferrer">
                            {addressMap}
                        </a>
                    </ul>
                </div>
            </div>
        </li>
    )
}

const linkStyle = {
    color: "#5BC0BE",
    margin: "0rem 1rem",
}

const imageStyle = {
    width: "250px",
    height: "250px",
    margin: "2rem 0 0",
    borderStyle: "solid",
    borderWidth: "thin",
}

const innerListStyle = {
    listStyleType: "none",
    textAlign: "center",
    padding: "0",
    margin: "0",
    height: "75%",
}

const addressBoxStyle = {
    textAlign: "center",
    display: "inline-block",
    margin: "0 3rem",
    borderRadius: "10px 10px 10px 10px / 10px 10px 10px 10px",
    boxShadow: "0 8px 6px -6px black",
    padding: "20px",
    backgroundColor: "#E5E5E5",
    color: "#5BC0BE",
}

const resultsStyle = {
    listStyleType: "none",
    textAlign: "center",
    padding: "2rem",
    margin: "1rem .5rem",
    height: "75%",
    borderRadius: "5px",
}

const resultsDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    padding: "3rem 0",
    boxShadow:
        `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
        0 6.7px 2.3px rgba(0, 0, 0, 0.048),
        0 12.5px 4px rgba(0, 0, 0, 0.06),
        0 22.3px 6.9px rgba(0, 0, 0, 0.072),
        0 41.8px 8.4px rgba(0, 0, 0, 0.086),
        0 100px 100px rgba(0, 0, 0, 0.12)`
}