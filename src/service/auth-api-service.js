import config from '../config'
import TokenService from "./token-service";

const AuthApiService = {

    postLogin(credentials) {
        console.log("Post login req: ", `${config.API_ENDPOINT}/account/auth/login`)
        return fetch(`${config.API_ENDPOINT}/account/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postUser(user) {
        console.log("post Register req", `${config.API_ENDPOINT}/account/create`)
        return fetch(`${config.API_ENDPOINT}/account/create`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            }, body: JSON.stringify(user),
        }).then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e))
                    : res.json()
        )
    },

}

export default AuthApiService