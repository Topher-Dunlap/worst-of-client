import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";

export default function Results() {

    const context = useContext(ThemeContext);

    ///generates random background color from context
    const backgroundColor = context.backgroundColors;
    const randomColorNum = Math.floor(Math.random() * Math.floor(3));
    const backgroundColorPicker = backgroundColor[randomColorNum]

    return (
        <section style={backgroundColorPicker}>
            <div>
                <h1 style={bottomMargin}>Results</h1>
            </div>
        </section>
    )
}

const bottomMargin = {
    marginBottom: "2rem",
}
