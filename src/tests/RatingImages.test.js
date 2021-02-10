import React from 'react';
import ReactDOM from 'react-dom';
import RatingImages from '../components/RatingImages';
import zero from "../yelp_stars/web_and_ios/large/large_0.png";
import one from "../yelp_stars/web_and_ios/large/large_1.png";
import oneHalf from "../yelp_stars/web_and_ios/large/large_1_half.png";
import two from "../yelp_stars/web_and_ios/large/large_2.png";
import twoHalf from "../yelp_stars/web_and_ios/large/large_2_half.png";
import three from "../yelp_stars/web_and_ios/large/large_3.png";
import threeHalf from "../yelp_stars/web_and_ios/large/large_3_half.png";
import four from "../yelp_stars/web_and_ios/large/large_4.png";
import fourHalf from "../yelp_stars/web_and_ios/large/large_4_half.png";
import five from "../yelp_stars/web_and_ios/large/large_5.png";

describe(`RatingImages component`, () => {

    let businessRating = 1

    const imageStore = [
        {id: 0, src: zero},
        {id: 1, src: one},
        {id: 1.5, src: oneHalf},
        {id: 2, src: two},
        {id: 2.5, src: twoHalf},
        {id: 3, src: three},
        {id: 3.5, src: threeHalf},
        {id: 4, src: four},
        {id: 4.5, src: fourHalf},
        {id: 5, src: five},
    ]

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RatingImages
                businessRating={businessRating}
                imageStore={imageStore}
            />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})