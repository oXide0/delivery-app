import axios from 'axios';

const $api = axios.create({
    baseURL: process.env.PUBLIC_BASE_URL,
    withCredentials: true,
});

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response && error.response.status === 403) {
            localStorage.removeItem('userId');
        }
        return Promise.reject(error);
    }
);

export default $api;
