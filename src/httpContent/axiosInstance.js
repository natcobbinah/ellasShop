import axios from 'axios'

const axiosinstance = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/',
});

const axiosinstance2 = axios.create({
    baseURL: 'http://localhost:5000',
})

export { axiosinstance,axiosinstance2 };