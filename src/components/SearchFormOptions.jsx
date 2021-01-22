import React from 'react';
import {useForm} from "react-hook-form";
// import ThemeContext from "./ThemeContext";

export default function SearchForm(props) {

    const {register} = useForm();
    const filterOption = props.filterOption;

    return (
        <span style={radialStyling}>
            <input ref={register} type="checkbox" name="search-type-restaurant" value="true"/>
            <label htmlFor="dream-type-double">
                <span style={textStyle}>{filterOption}</span>
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