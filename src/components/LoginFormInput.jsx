import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import ThemeContext from "./ThemeContext";

export default function LoginFormInput(props) {

    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    const fieldLabel = props.fieldLabel;
    const inputName = props.inputName;
    const typeName = props.type;
    const {register, errors} = useForm();

    return(
        <div>
            <label
                htmlFor={inputName}
                style={formElementSpacing}>
                {fieldLabel}
            </label>
            <input
                ref={register({required: true, minLength: 2})}
                name="emailField"
                type={typeName}/>
            <br/>
            {errors.inputName && <p>This is required</p>}
        </div>
    )
}