import React from 'react';
import ReactDOM from 'react-dom';
import LoginFormInput from '../components/LoginFormInput';


describe(`LoginFormInput component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <LoginFormInput/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})