import React from 'react';
import {useForm} from "react-hook-form";
import LoginFormInput from "./LandingFormInput";


export default function LoginForm() {

    const {handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    const formOptions = [
        {
            fieldLabel: "E-Mail",
            inputName: "email",
            type: "text",
        },
        {
            fieldLabel: "Password",
            inputName: "password",
            type: "password",
        },
    ]

    const mapFormInputs = formOptions.map((option, idx) =>
        <LoginFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    )
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <header style={headerStyle}>
                <h1>Login</h1>
            </header>
            <div>
                {mapFormInputs}
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

const headerStyle = {
    marginTop: "6rem",
    marginBottom: "3rem",
}