import axios from 'axios';

export const loginUserService = (request: any) => {
    const LOGIN_API_ENDPOINT = 'http://localhost:3006/login';

    const { user } = request;
    const parameters = user;

    return axios.post(LOGIN_API_ENDPOINT, parameters)
        .then(response => {
            return response;
        })
        .then(json => {
            return json;
        });
};