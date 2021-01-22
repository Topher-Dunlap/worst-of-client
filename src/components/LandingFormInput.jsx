import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import ThemeContext from "./ThemeContext";

export default function SearchForm(props) {

    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    const fieldLabel = props.fieldLabel;
    const inputName = props.inputName;
    const typeName = props.typeName;
    const {register, errors} = useForm();

    return(
        <div>
            <label
                htmlFor={inputName}
                style={formElementSpacing}>
                {fieldLabel}
            </label>
            <input
                ref={register({required: true})}
                type={typeName}
                name={inputName}
                id={inputName}/>
            {errors.inputName && <p>This is required</p>}
        </div>
    )
}