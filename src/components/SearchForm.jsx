import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
import ThemeContext from "./ThemeContext";
import config from "../config";

export default function SearchForm() {

    const {register, handleSubmit, errors} = useForm();
    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    const apiToken = process.env.YELP_API_TOKEN;

    // form input values populated by .map function
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

    ///useState for search form values
    const [apiValues, setSearchValues] = useState({
        term:'',
        location: '',
        offsetLimit: 100
    });
    const termQuery = encodeURIComponent(apiValues.term);
    const locationQuery = encodeURIComponent(apiValues.location);
    const offsetQuery = encodeURIComponent(apiValues.offsetLimit);

    ///useState for yelp API results
    const [apiResults, setApiResults] = useState({});

    //onSubmit sending search for values via query string to back-end
    const onSubmit = () => {
        fetch(`${config.API_ENDPOINT}/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${offsetQuery}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                // 'Authorization': `Bearer ${apiToken}`
            },
        })
            .then((data) => {
                /// If using axios no need to use this bottom promise sequence to access the data
                data.json().then((resData) => {
                    setApiResults({resData} )
                })
            })
            .catch(error => {
                console.error({ error })
            })
    }

    //Map function to create search form inputs
    const mapFilterOptions = filterOptions.map((option, idx) =>
        <SearchFormOptions
            key={idx}
            inputName={option.inputName}
            nameLabel={option.nameLabel}
            setSearchValues={setSearchValues}
            apiValues={apiValues}
        />
    )

    //update the location key in useState for search form values
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
