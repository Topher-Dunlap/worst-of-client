import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
import ThemeContext from "./ThemeContext";

export default function SearchForm() {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    const filterOptions = [
        {
            inputName: "restaurants",
            nameLabel: "Restaurants"
        },
        {
            inputName: "bars",
            nameLabel: "Bars",
        },
        {
            inputName: "coffee-shop",
            nameLabel: "Coffee Shop",
        },
    ]
    const mapFilterOptions = filterOptions.map((option, idx) =>
        <SearchFormOptions
            key={idx}
            inputName={option.inputName}
            nameLabel={option.nameLabel}
        />
    )

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div style={searchBar}>
                    <input ref={register({required: true, minLength: 2})} name="searchField" placeholder="Minneapolis"/>
                    <button style={formElementSpacing} type="submit">Search</button>
                    {errors.searchField && <p>This is required</p>}
                </div>
                <br/>
                {mapFilterOptions}
            </form>
        </div>
    )
}

const searchBar = {
    margin: "75px 10px 0px",
}
