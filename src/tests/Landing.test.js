import React from 'react';
import ReactDOM from 'react-dom';
import Landing from '../components/Landing';
import renderer from 'react-test-renderer';

describe(`Landing component`, () => {

    const backgroundColors = [
        {backgroundColor: "#AAAAAA"},
        {backgroundColor: "#BBBBBB"},
        {backgroundColor: "#EEEEEE"},
    ]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('renders the UI as expected', () => {
    const context = {backgroundColors}
    const tree = renderer
        .create(<Landing/>, context)
        .toJSON();
    expect(tree).toMatchSnapshot();
})

})