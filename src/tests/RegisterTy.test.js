import React from 'react';
import ReactDOM from 'react-dom';
import RegisterTy from '../components/RegisterForm';


describe(`RegisterTy component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <RegisterTy/>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    })

})