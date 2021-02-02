import config from '../config'

const AuthApiService = {
    postLogin(credentials) {
        console.log("inside AuthApi, credentials: ", credentials)
        return fetch(`${config.API_ENDPOINT}/account/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default AuthApiService