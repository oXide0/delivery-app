import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const $api = axios.create({
    baseURL: process.env.PUBLIC_BASE_URL,
    withCredentials: true,
});

$api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const navigate = useNavigate();
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            navigate('/login');
        }
        return Promise.reject(error);
    }
);

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default $api;
