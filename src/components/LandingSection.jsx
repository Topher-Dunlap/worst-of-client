import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function Projects(props) {

    const headerContent = props.headerContent;
    const pContent = props.pContent;
    const sectionImage = props.sectionImage;
    const context = useContext(ThemeContext);
    const topBottomMargin = context.sectionTopBottomMargin;

    return (
        <section style={topBottomMargin}>
            <header>
                <h3>{headerContent}</h3>
            </header>
            <p>[<em>{sectionImage}</em>]</p>
            <p>{pContent}</p>
        </section>
    )
}