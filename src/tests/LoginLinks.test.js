import React from 'react';
import ReactDOM from 'react-dom';
import LoginLinks from '../components/LoginLinks';
import {BrowserRouter} from "react-router-dom";


describe(`LoginLinks component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <LoginLinks/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})