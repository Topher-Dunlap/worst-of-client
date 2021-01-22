import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import {useForm} from "react-hook-form";

export default function Login() {

    const context = useContext(ThemeContext);
    const {register, handleSubmit, errors} = useForm();
    const theme = context.theme;

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <section style={theme}>
            <form onSubmit={handleSubmit(onSubmit)} >
                <header style={headerStyle}>
                    <h1>Login</h1>
                </header>
                <div>
                    <input ref={register({required: true, minLength: 2})} name="emailField" placeholder="bill&ted@gmail.com"/>
                    <br/>
                    <input ref={register({required: true, minLength: 2})} name="passwordField"/>
                    <br/>
                    <button type="submit">Login</button>
                    {errors.emailField && <p>E-Mail is required</p>}
                    {errors.passwordField && <p>Password is required</p>}
                </div>
            </form>
        </section>
    )
}

const headerStyle = {
    marginTop: "6rem",
    marginBottom: "3rem",
}
