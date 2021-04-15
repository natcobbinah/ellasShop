import axios from 'axios'

const axiosinstance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
});

export { axiosinstance };