import React from 'react';
import {useForm} from "react-hook-form";
import LoginFormInput from "./LandingFormInput";


export default function LoginForm() {

    const {register, handleSubmit} = useForm();
    const onSubmit = (ev) => {
        ev.preventDefault()
        const {user_name, password} = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

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
                <br/>
                <input ref={register} type="checkbox" name="remember-me" value="true"/>
                <label>
                    <span>Remember Me</span>
                </label>
            </div>
        </form>
    )
}

const headerStyle = {
    marginTop: "6rem",
    marginBottom: "3rem",
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