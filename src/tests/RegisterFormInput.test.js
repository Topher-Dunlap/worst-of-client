import React from 'react';
import ReactDOM from 'react-dom';
import RegisterFormInput from '../components/RegisterFormInput';


describe(`RegisterFormInput component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RegisterFormInput/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})