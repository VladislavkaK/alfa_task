import axios from 'axios';

export const logoutUserService = () => {
    const LOGOUT_API_ENDPOINT = 'http://localhost:3006/logout';

    return axios.post(LOGOUT_API_ENDPOINT, {})
        .then(response => {
            return response;
        })
        .then(json => {
            return json;
        });
};