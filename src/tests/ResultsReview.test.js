import React from 'react';
import ReactDOM from 'react-dom';
import ResultsReview from '../components/ResultsReview';


describe(`ResultsReview component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <ResultsReview/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})