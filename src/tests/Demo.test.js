import React from 'react';
import ReactDOM from 'react-dom';
import Demo from '../components/Demo';
import ThemeContext from "../components/ThemeContext";

describe(`Demo component`, () => {

    const headerTheme = {
        textAlign: "center",
        backgroundColor: "#0B132B",
        color: "white",
        margin: "0 0 2rem",
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <ThemeContext.Provider value={{headerTheme}}>
                <Demo/>,
            </ThemeContext.Provider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})