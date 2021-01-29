import React, {useContext, useState} from 'react';
import axios from 'axios';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
import ThemeContext from "./ThemeContext";
import config from "../config";

export default function SearchForm(props) {

    const {register, handleSubmit, errors} = useForm();
    const context = useContext(ThemeContext);
    const formElementSpacing = context.formElementSpacing;
    ///const apiToken = process.env.YELP_API_TOKEN;

    ///form input values populated by .map function
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
            inputName: "coffee",
            nameLabel: "Coffee",
        },
    ]

    ///useState for search form values
    const [apiValues, setSearchValues] = useState({
        term: '',
        location: '',
        offsetLimit: 800
    });

    // ///state for display message after search
    // const [noResults, setNoResults] = useState({
    //     noResultCounter: 0,
    //     location: 'Please try searching a larger city'
    // });


    const termQuery = encodeURIComponent(apiValues.term);
    const locationQuery = encodeURIComponent(apiValues.location);
    const offsetQuery = encodeURIComponent(apiValues.offsetLimit);


    ///onSubmit sending search for values via query string to back-end
    const onSubmit = () => {
        axios.get(`${config.API_ENDPOINT}/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${offsetQuery}`)
            .then((response) => {
                let apiResults = [];
                ///conditional statements to create new get with updated offset query string if no results return
                if(response.data > 0) {
                    let newOffsetQuery;
                    (response.data < 50) ? newOffsetQuery = 0 : newOffsetQuery = response.data - 1;
                    axios.get(`${config.API_ENDPOINT}/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${newOffsetQuery}`)
                        .then((response) => {
                            ///clean data before setting state with map to populate in results component
                            response.data.map(business =>
                                apiResults.push(business))
                            props.setApiResults(apiResults)
                            console.log(apiResults)
                        });
                }
                else {
                    ///clean data before setting state with map to populate in results component
                    response.data.map(business =>
                        apiResults.push(business))
                    props.setApiResults(apiResults)
                    console.log(apiResults)
                }
            })
            .catch(error => {
                console.error({error})
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
            <form onSubmit={handleSubmit(onSubmit)}>
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
