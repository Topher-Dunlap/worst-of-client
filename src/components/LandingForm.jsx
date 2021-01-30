import React from 'react';
import {useForm} from "react-hook-form";
import LandingFormInput from "./LandingFormInput";


export default function LandingForm() {

    const {handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    const mapFormInputs = formOptions.map((option, idx) =>
        <LandingFormInput
            key={idx}
            fieldLabel={option.fieldLabel}
            inputName={option.inputName}
            type={option.type}
        />
    )
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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