import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BsSearch} from 'react-icons/bs';
import {useForm} from "react-hook-form";
import SearchFormOptions from "./SearchFormOptions";
import config from "../config";
import TokenService from "../service/token-service";

export default function SearchForm(props) {

    ///react-form-hook import variables
    const {register, handleSubmit, errors} = useForm();

    ///useState for search form values
    const [apiValues, setSearchValues] = useState({
        term: '',
        location: '',
        offsetLimit: 800
    });

    const termQuery = encodeURIComponent(apiValues.term);
    const locationQuery = encodeURIComponent(apiValues.location);
    const offsetQuery = encodeURIComponent(apiValues.offsetLimit);

    //update the location key in useState for search form values
    const searchOnChange = (data) => {
        setSearchValues({...apiValues, location: data.target.value})
    }

    ///useEffect/state for user location
    useEffect(() => {
            axios.get(`https://ipapi.co/city/`)
                .then((response) => {
                    setSearchValues({...apiValues, location: response.data})
                })
        }, [apiValues]
    );

    ///onSubmit sending search for values via query string to back-end
    const onSubmit = () => {
        ///set loading spinner state
        props.setLoadingSpinner(true)
        axios.get(`${config.API_ENDPOINT}/searchForm/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${offsetQuery}`,{
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            }
        })
            .then((response) => {
                let apiResults = [];
                ///conditional statements to create new get with updated offset query string if no results return
                if (response.data > 0) {
                    let newOffsetQuery;
                    (response.data < 50) ? newOffsetQuery = 0 : newOffsetQuery = response.data - 1 ///conditional that sets offset query param
                    axios.get(`${config.API_ENDPOINT}/searchForm/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${newOffsetQuery}`,{
                        headers: {
                            'authorization': `bearer ${TokenService.getAuthToken()}`,
                        }
                    })
                        .then((response) => {
                            ///clean data before setting state with map to populate in results component
                            response.data.map(business =>
                                apiResults.push(business))
                            props.setApiResults(apiResults)
                            props.setLoadingSpinner(false)
                        });
                } else {
                    ///clean data before setting state with map to populate in results component
                    response.data.map(business =>
                        apiResults.push(business))
                    props.setApiResults(apiResults)
                    props.setLoadingSpinner(false)
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

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={searchBar}>
                    <input
                        ref={register({required: true, minLength: 2})}
                        style={searchFieldStyle}
                        name="searchField"
                        value={apiValues.location}
                        onChange={searchOnChange}
                    />
                    <button
                        style={searchButton}
                        type="submit">
                        <BsSearch/>
                    </button>
                    {errors.searchField && <p style={{color: "red"}}>Please enter a location.</p>}
                </div>
                <br/>
                {mapFilterOptions}
            </form>
        </div>
    )
}

const searchFieldStyle = {
    height: "25px",
    width: "300px",
}

const searchButton = {
    height: "28px",
    width: "28px",
    padding: "7px",
    margin: "40px 10px",
    color: "white",
    borderRadius: "50%",
    backgroundColor: "#3A506B",
    borderStyle: "none",
    display: "inline-block",
    textAlign: "center",
}

const searchBar = {
    margin: "0 10px",
}

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
