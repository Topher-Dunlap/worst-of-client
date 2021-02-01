import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import LoginFormInput from "./RegisterFormInput";
import AuthContext from '../components/AuthContext'
import TokenService from "../service/token-service";


export default function LoginForm() {

    const { setLoggedIn } = useContext(AuthContext);
    const {register, handleSubmit} = useForm();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const {email, password} = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, password.value)
        )

        setLoggedIn(TokenService.hasAuthToken())

        email.value = ''
        password.value = ''
        // this.props.onLoginSuccess()
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
        <form onSubmit={onSubmit}>
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