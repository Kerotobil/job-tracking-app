import Axios from 'axios';

export const axiosClient = Axios.create({
    baseURL: 'http://localhost:5000/',
});