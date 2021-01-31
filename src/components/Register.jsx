import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import RegisterForm from "./RegisterForm";

export default function Login() {

    const context = useContext(ThemeContext);
    const theme = context.theme;

    return (
        <section style={theme}>
            <RegisterForm />
        </section>
    )
}

