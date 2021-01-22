import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
// import ThemeContext from "./ThemeContext";


export default function SearchForm() {

    const {register, handleSubmit, errors} = useForm();
    // const context = useContext(ThemeContext);
    // const theme = context.theme;

    const onSubmit = (data) => {
        console.log(data)
    }

    const filterOptions = ["Restaurants", "Bars", "Coffee Shops"]
    const mapFilterOptions = filterOptions.map((option, idx) =>
        <SearchFormOptions
            key={idx}
            filterOption={option}
        />
    )

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div style={searchBar}>
                    <input ref={register({required: true, minLength: 2})} name="searchField" placeholder="Crusty Joes Tavern"/>
                    <button style={radialStyling} type="submit">Search</button>
                    {errors.searchField && <p>This is required</p>}
                </div>
                <br/>
                {mapFilterOptions}
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
