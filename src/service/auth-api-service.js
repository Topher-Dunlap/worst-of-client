import config from '../config'
import TokenService from "./token-service";

// const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const AuthApiService = {

    postLogin(credentials) {
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

    // passwordReq(password) {
    //     if (password.length < 8) {
    //         return 'Password must be longer than 8 characters'
    //     }
    //     if (password.length > 72) {
    //         return 'Password must be less than 72 characters'
    //     }
    //     if (password.startsWith(' ') || password.endsWith(' ')) {
    //         return 'Password must not start or end with empty spaces'
    //     }
    //     if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
    //         return 'Password must contain 1 upper case, lower case, number and special character'
    //     }
    // }
}

export default AuthApiService