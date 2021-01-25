import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
import ThemeContext from "./ThemeContext";
import config from "../config";

export default function SearchForm() {

    const {register, handleSubmit, errors} = useForm();
    const onSubmit = () => {
        fetch(`${config.API_ENDPOINT}/search`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "apiSearchValues": JSON.stringify(apiValues)
            },
        })
            .then((data) => {
                    data.json().then((promiseData) => console.log(promiseData))
            })
            .catch(error => {
                console.error({ error })
            })
    }

    const [apiValues, setSearchValues] = useState({
        term:'',
        location: '',
        offsetLimit: 100
    });

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
            setSearchValues={setSearchValues}
            apiValues={apiValues}
        />
    )

    const searchOnChange = (data) => {
            setSearchValues({...apiValues, location: data.target.value})
        }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div style={searchBar}>
                    <input
                        ref={register({required: true, minLength: 2})}
                        name="searchField"
                        placeholder="Minneapolis"
                        onChange={searchOnChange}
                    />
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
