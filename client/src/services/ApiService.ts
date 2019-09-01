import axios from 'axios';

export const api = axios.create({
    baseURL: 'api',
    headers: {
        crossDomain: true,
    },
});

export default api;
