import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function LandingSection(props) {

    const headerContent = props.headerContent;
    const pContent = props.pContent;
    const sectionImage = props.sectionImage;
    const context = useContext(ThemeContext);
    const topBottomMargin = context.sectionTopBottomMargin;

    ///generates random background color from context
    const backgroundColor = context.backgroundColors;
    const randomColorNum = Math.floor(Math.random() * Math.floor(3));
    const backgroundColorPicker = backgroundColor[randomColorNum]

    return (
        <section style={topBottomMargin}>
            <header style={backgroundColorPicker}>
                <h3>{headerContent}</h3>
            </header>
            <img style={imgStyle} alt={"bar"} src={sectionImage}/>
            <p>{pContent}</p>
        </section>
    )
}

const imgStyle = {
    height: "100%",
    width: "100%",
    margin: "0",
}