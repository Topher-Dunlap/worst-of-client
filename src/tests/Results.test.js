import React from 'react';
import ReactDOM from 'react-dom';
import Results from '../components/Results';


describe(`Results component`, () => {

    let apiResults = [{
        businessName: "name",
        rating: 2,
        businessImage: "image_url",
        yelpLink: "url",
        coordinates: {
                longitude: "00",
                latitude: "00"
            },
        location: {
            display_address: ["123", "street"]
        },
        locationLong: "locationLong",
        locationLat: "locationLat",
        review: "review",
        reviewUrl: "reviewUrl",
        reviewerImg: "reviewerImg",
    }]

    it('Results without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <Results apiResults={apiResults}/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})