import React from 'react';
import {useForm} from "react-hook-form";
import RegisterFormInput from "./RegisterFormInput";

export default function RegisterForm() {

    const {handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
        inputName: "first-name",
        type: "text",
    },
    {
        fieldLabel: "Last name",
        inputName: "last-name",
        type: "text",
    },
    {
        fieldLabel: "Email",
        inputName: "username",
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