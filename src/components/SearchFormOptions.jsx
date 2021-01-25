import React from 'react';
import {useForm} from "react-hook-form";

export default function SearchFormOption(props) {

    const {register} = useForm();
    const inputName = props.inputName;
    const nameLabel = props.nameLabel;
    const setSearchValues = props.setSearchValues;
    const apiValues = props.apiValues;

    const onChange = (data) => {
        if(data.target.checked) {
            setSearchValues({...apiValues, term: inputName})
        }
        else if (!data.target.checked){
            setSearchValues({...apiValues, term: ""})
        }
    }

    return (
        <span style={radialStyling}>
            <input
                onChange={e => onChange(e)}
                checked={props.value}
                ref={register}
                type="checkbox"
                name={inputName}
                value="false"/>
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