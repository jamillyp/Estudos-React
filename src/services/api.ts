import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jp-money.herokuapp.com/api',
})