import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../components/Landing';
import ThemeContext from "../components/ThemeContext";
import renderer from 'react-test-renderer';

describe(`Landing component`, () => {

    const backgroundColors = [
        {backgroundColor: "#AAAAAA"},
        {backgroundColor: "#BBBBBB"},
        {backgroundColor: "#EEEEEE"},
    ]

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <ThemeContext.Provider value={{backgroundColors}}>
                <Landing/>,
            </ThemeContext.Provider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <ThemeContext.Provider value={{backgroundColors}}>
                    <Landing/>,
                </ThemeContext.Provider>,
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })

})