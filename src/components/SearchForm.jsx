import React, {useContext} from 'react';
import ThemeContext from "./ThemeContext";
import {useForm} from "react-hook-form";


export default function Search() {

    const context = useContext(ThemeContext);
    const {register, handleSubmit} = useForm();
    const theme = context.theme;

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div style={searchBar}>
                    <label style={radialStyling}>Search</label>
                    <input ref={register} name="search" placeholder="Crusty Joes Tavern" required/>
                </div>
                <br/>
                <span style={radialStyling}>
                    <input ref={register} type="radio" name="search-type-restaurant" value="true"/>
                    <label htmlFor="dream-type-double">
                        <span>Restaurant</span>
                    </label>
                </span>
                <span style={radialStyling}>
                    <input ref={register} style={radialStyling} type="radio" name="search-type-bars" value="true"/>
                    <label>
                        <span>Bars</span>
                    </label>
                </span>
                <span style={radialStyling}>
                    <input ref={register} type="radio" name="search-type-coffee" value="true"/>
                    <label>
                        <span>Coffee Shops</span>
                    </label>
                </span>
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>
    )
}

const radialStyling = {
    margin: "0px 10px",
}

const searchBar = {
    margin: "75px 10px 0px",
}