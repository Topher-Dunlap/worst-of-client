import React from 'react';
import ReactDOM from 'react-dom';
import NavListLinks from '../components/NavListLinks';
import {BrowserRouter} from "react-router-dom";


describe(`NavListLinks component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        let routePath = '/'

        ReactDOM.render(
            <BrowserRouter>
                <NavListLinks routePath={routePath}/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})