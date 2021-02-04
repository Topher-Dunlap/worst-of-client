import React from 'react';
// import {useForm} from "react-hook-form";
import AuthApiService from '../service/auth-api-service'
import RegisterFormInput from "./RegisterFormInput";

export default function RegisterForm() {

    // const {handleSubmit} = useForm();
    const handleRegSubmit = (ev) => {

        console.log("event targets", ev)
        // ev.preventDefault()
        const {first_name, last_name, email, password} = ev.target
        // AuthApiService.passwordReq(password)

        // this.setState({error: null})
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
                console.log("post user server res: ", user)
                // this.props.onRegistrationSuccess()
            })
            .catch(error => {
                console.error({error})
            })
    }

    // function renderPasswordError(password) {
    //     AuthApiService.passwordReq(password)
    // }

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