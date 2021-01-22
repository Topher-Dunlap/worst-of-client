import React from 'react';

export default function Projects(props) {

    const headerContent = props.headerContent;
    const pContent = props.pContent;
    const sectionImage = props.sectionImage;

    return (
        <section>
            <header>
                <h3>{headerContent}</h3>
            </header>
            <p>[<em>{sectionImage}</em>]</p>
            <p>{pContent}</p>
        </section>
    )
}