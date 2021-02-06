import React from 'react';
import AuthApiService from '../service/auth-api-service'
import RegisterFormInput from "./RegisterFormInput";

export default function RegisterForm() {

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
                // this.props.onRegistrationSuccess()
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
            <header style={headerStyle}>
                <h1>Register</h1>
            </header>
            {mapFormInputs}
            <button type='submit'>Sign Up</button>
        </form>

    )
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

const headerStyle = {
    marginTop: "6rem",
    marginBottom: "3rem",
}