import React from 'react';
import ReactDOM from 'react-dom';
import SwitchNavRoutes from '../components/SwitchNavRoutes';
import {BrowserRouter} from "react-router-dom";


describe(`SwitchNavRoutes component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <SwitchNavRoutes/>
            </BrowserRouter>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})