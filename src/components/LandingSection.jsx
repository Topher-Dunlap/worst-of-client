import React from 'react';

export default function LandingSection(props) {

    const pContent = props.pContent;
    const sectionImage = props.sectionImage;

    return (
        <section>
            <p style={sectionPara}>{pContent}</p>
            <img style={imgStyle} alt={"bar"} src={sectionImage}/>
        </section>
    )
}

const imgStyle = {
    height: "100%",
    width: "100%",
    margin: "0",
}

const sectionPara = {
    margin: "4rem 2rem"
}