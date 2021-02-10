import React from 'react';
import ReactDOM from 'react-dom';
import ResultsItem from '../components/ResultsItem';
import one from "../yelp_stars/web_and_ios/large/large_1.png";


describe(`ResultsItem component`, () => {

    let location = {
        display_address: ["123", "street"],
    }

    let rating = 1

    let imageStore = [
        {id: 1, src: one},
        ]

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <ResultsItem
                location={location}
                rating={rating}
                imageStore={imageStore}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})