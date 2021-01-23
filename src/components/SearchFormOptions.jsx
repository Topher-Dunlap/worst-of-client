import React from 'react';
import {useForm} from "react-hook-form";
// import ThemeContext from "./ThemeContext";

export default function SearchFormOption(props) {

    const {register} = useForm();
    const inputName = props.inputName;
    const nameLabel = props.nameLabel;

    return (
        <span style={radialStyling}>
            <input ref={register} type="checkbox" name={inputName} value="true"/>
            <label>
                <span style={textStyle}>{nameLabel}</span>
            </label>
        </span>
    )
}

const radialStyling = {
    margin: "0px 10px",
}

const textStyle = {
    fontSize: "15px"
}