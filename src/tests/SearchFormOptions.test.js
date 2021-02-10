import React from 'react';
import ReactDOM from 'react-dom';
import SearchFormOptions from '../components/SearchFormOptions';


describe(`SearchFormOptions component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <SearchFormOptions/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})