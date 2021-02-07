import React from 'react';
import noImg from "../images/no-img.png";

export default function ResultsReview(props) {

    const review = props.review;
    const reviewUrl = props.reviewUrl;
    const reviewerImg = props.reviewerImg;

    return (
            <div style={divStyle}>
                <img
                    style={reviewImgStyle}
                    alt="reviewer"
                    src={reviewerImg ? reviewerImg : noImg}
                />
                <p style={reviewTextStyle}>
                    "{review}"
                    <a href={reviewUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                        click for complete review.
                    </a>
                </p>
            </div>
    )
}

const divStyle = {
    display: "inline-block",
    margin: "3rem 3rem",
    textAlign: "left",
    borderRadius: "10px 10px 10px 10px / 10px 10px 10px 10px",
    boxShadow: "0 8px 6px -6px black",
    padding: "20px",
    backgroundColor: "#5BC0BE",
    color: "white",
}

const reviewImgStyle = {
    width: "75px",
    height: "75px",
    float: "left",
    margin: ".5rem 1rem",
    borderRadius: "50%"
}

const reviewTextStyle = {
    margin: "0"
}

const linkStyle = {
    margin: "0 .5rem"
}
