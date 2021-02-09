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

    // ///create list display for business address
    const addressString = location.display_address.join(' ')

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
        } else {
            return <p style={noReviewDivStyle}>Reviews Not Available</p>
        }
    }

    return (
        <li style={resultsStyle}>
            <div style={resultsDivStyle}>
                <img
                    style={imageStyle}
                    alt="business"
                    src={businessImage ? businessImage : noImg}
                />
                <a
                    href={yelpLink}
                    style={linkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 style={headerStyle}>{businessName}</h2>
                </a>
                <RatingImages businessRating={businessRating}/>
                <br/>
                        <h3 style={reviewHeaderMargin}>Customer Review</h3>
                        {insertReviews()}
                    <div style={divAddressStyle}>
                        <h3 style={addressMargin}>Address:</h3>
                        <a
                            href={googleMapsURL}
                            style={addressBoxStyle}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {addressString}
                        </a>
                    </div>
                </div>
        </li>
    )
}

const addressMargin = {
    margin: "0 .5rem 0"
}

const reviewHeaderMargin = {
    margin: "3rem 2rem .5rem"
}

const headerStyle = {
    margin: "2rem 2rem 0",
    fontSize: "2.5rem",
}

const linkStyle = {
    color: "#5BC0BE",
    padding: "0 2rem",
}

const imageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "5px 5px 0px 0px",
}

const divAddressStyle = {
    display: "flex",
    textAlign: "left",
    padding: "0",
    margin: "3rem 2rem 0",
    height: "75%",
}

const addressBoxStyle = {
    color: "#5BC0BE",
}

const noReviewDivStyle = {
    margin: "0 2rem 0 2rem",
    display: "inline-block",
    borderRadius: "10px 10px 10px 10px / 10px 10px 10px 10px",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "#E5E5E5",
    padding: "20px",
}

const resultsStyle = {
    listStyleType: "none",
    textAlign: "left",
    padding: "2rem",
    margin: "auto",
    height: "20%",
    width: "75%",
    borderRadius: "5px",
}

const resultsDivStyle = {
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    padding: "0 0 3rem",
    boxShadow:
        `0 2.8px 1.2px rgba(0, 0, 0, 0.034),
        0 6.7px 2.3px rgba(0, 0, 0, 0.048),
        0 12.5px 4px rgba(0, 0, 0, 0.06),
        0 22.3px 6.9px rgba(0, 0, 0, 0.072),
        0 41.8px 8.4px rgba(0, 0, 0, 0.086),
        0 100px 100px rgba(0, 0, 0, 0.12)`
}