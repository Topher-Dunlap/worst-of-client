///set loading spinner state
import axios from "axios";
import config from "./config";

export const axiosCall = (props, termQuery, locationQuery, offsetQuery) => {
    axios.get(`${config.API_ENDPOINT}/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${offsetQuery}`)
        .then((response) => {
            ///conditional statements to create new get with updated offset query string if no results return
            if (response.data > 0) {
                let newOffsetQuery;
                (response.data < 50) ? newOffsetQuery = 0 : newOffsetQuery = response.data - 1 ///conditional that sets offset query param
                axios.get(`${config.API_ENDPOINT}/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${newOffsetQuery}`)
                    .then((response) => {
                        dataCleaning(props, response)
                    });
            } else {
                dataCleaning(props, response)
            }
        })
        .catch(error => {
            console.error({error})
        })
}

function dataCleaning(props, response) {
    ///clean data before setting state with map to populate in results component
    let apiResults = [];
    response.data.map(business =>
        apiResults.push(business))
    props.setApiResults(apiResults)
    props.setLoadingSpinner(false)
}

