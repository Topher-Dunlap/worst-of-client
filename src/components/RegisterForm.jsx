import React, {useContext} from 'react';
import AuthApiService from '../service/auth-api-service'
import RegisterFormInput from "./RegisterFormInput";
import ThemeContext from "./ThemeContext";

export default function RegisterForm() {

    const context = useContext(ThemeContext);
    const headerTheme = context.headerStyle;

    const handleRegSubmit = (ev) => {

        const {first_name, last_name, email, password} = ev.target

        AuthApiService.postUser({
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value,
        })
            .then(user => {
                first_name.value = ''
                last_name.value = ''
                email.value = ''
                password.value = ''
            })
            .catch(error => {
                console.error({error})
            })
    }

    const mapFormInputs = formOptions.map((option, idx) =>
        <RegisterFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    )

    return (
        <form onSubmit={handleRegSubmit}>
            <header style={headerTheme}>
                <h2>Register</h2>
            </header>
            <section style={margin}>
                <header>
                    <h3>Start discovering your low standards today</h3>
                </header>
            </section>
            {mapFormInputs}
            <button type='submit'>Sign Up</button>
        </form>

    )
}

const margin = {
    margin: "0rem 2rem"
}

const formOptions = [
    {
        fieldLabel: "First name",
        inputName: "first_name",
        type: "text",
    },
    {
        fieldLabel: "Last name",
        inputName: "last_name",
        type: "text",
    },
    {
        fieldLabel: "Email",
        inputName: "email",
        type: "text",
    },
    {
        fieldLabel: "Password",
        inputName: "password",
        type: "password",
    },
]