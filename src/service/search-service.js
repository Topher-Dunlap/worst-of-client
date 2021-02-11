///set loading spinner state
import axios from "axios";
import config from "../config";
import TokenService from "./token-service";

export const axiosCall = (props, termQuery, locationQuery, offsetQuery) => {
    axios.get(`${config.API_ENDPOINT}/searchForm/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${offsetQuery}`,{
        headers: {
            'authorization': `basic ${TokenService.getAuthToken()}`,
        },
    })
        .then((response) => {
            ///conditional statements to create new get with updated offset query string if no results return
            if (response.data > 0) {
                let newOffsetQuery;
                (response.data < 50) ? newOffsetQuery = 0 : newOffsetQuery = response.data - 1 ///conditional that sets offset query param
                axios.get(`${config.API_ENDPOINT}/searchForm/search?location=${locationQuery}&term=${termQuery}&limit=50&offset=${newOffsetQuery}`,{
                    headers: {
                        'authorization': `basic ${TokenService.getAuthToken()}`,
                    }
                })
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

