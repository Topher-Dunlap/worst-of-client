import React, {useContext} from 'react';
// import ThemeContext from "./ThemeContext";
import RegisterForm from "./RegisterForm";
import PasswordReq from "./PasswordReq";

export default function Login() {

    // const context = useContext(ThemeContext);
    // const theme = context.theme;

    return (
        <section>
            <RegisterForm />
            <PasswordReq />
        </section>
    )
}

