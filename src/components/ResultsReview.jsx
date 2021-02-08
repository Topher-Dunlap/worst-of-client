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
                        <a href={reviewUrl} style={linkColorStyle} target="_blank" rel="noopener noreferrer">
                            click for complete review.
                        </a>
                </p>
            </div>
    )
}

const divStyle = {
    margin: "0 2rem 0 2rem",
    display: "inline-block",
    borderRadius: "10px 10px 10px 10px / 10px 10px 10px 10px",
    borderWidth: "thin",
    borderStyle: "solid",
    borderColor: "#E5E5E5",
    padding: "20px",
}

const reviewImgStyle = {
    width: "75px",
    height: "75px",
    float: "left",
    margin: ".5rem 1rem",
    borderRadius: "50%"
}

const reviewTextStyle = {
    margin: "0",
    textAlign: "left",
}

const linkColorStyle = {
    color: "#5BC0BE",
    margin: "0 .5rem",
}
