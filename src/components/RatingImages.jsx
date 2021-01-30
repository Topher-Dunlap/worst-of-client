import React from 'react';
import zero from '../yelp_stars/web_and_ios/large/large_0.png';
import one from '../yelp_stars/web_and_ios/large/large_1.png';
import oneHalf from '../yelp_stars/web_and_ios/large/large_1_half.png';
import two from '../yelp_stars/web_and_ios/large/large_2.png';
import twoHalf from '../yelp_stars/web_and_ios/large/large_2_half.png';
import three from '../yelp_stars/web_and_ios/large/large_3.png';
import threeHalf from '../yelp_stars/web_and_ios/large/large_3_half.png';
import four from '../yelp_stars/web_and_ios/large/large_4.png';
import fourHalf from '../yelp_stars/web_and_ios/large/large_4_half.png';
import five from '../yelp_stars/web_and_ios/large/large_5.png';

///rating image function
export default function RatingImageFinder(props) {

    //import rating prop
    const businessRating = props.businessRating;

    ///filter the images comparing rating to ID correlating to image
    const filteredRatingImage = imageStore.filter(id => id.id === businessRating)

    return (
        <img alt="rating" src={filteredRatingImage[0].src}/>
    )
}

//store image paths to correlating ID
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