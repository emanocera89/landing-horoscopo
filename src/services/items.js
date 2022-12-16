import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const apiName = 'zodiac_signs';
const apiToken = process.env.REACT_APP_API_TOKEN;
const axiosConfig = {
    headers: {
        'Authorization': `${apiToken}`,
        'Content-Type': 'application/json;charset=UTF-8'
    }
};

export const getItems = () => {
    return axios.get(`${baseUrl}${apiName}`, axiosConfig)
        .then((response) => {
            const { data } = response;
            return data
        })
}

export const getItem = (query) => {
    return axios.get(`${baseUrl}?${query}`, axiosConfig)
        .then((response) => {
            const { data } = response;
            return data
        })
}