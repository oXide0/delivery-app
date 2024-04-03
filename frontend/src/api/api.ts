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
        if (error.response && error.response.status === 403) {
            localStorage.removeItem('userId');
            navigate('/login');
        }
        return Promise.reject(error);
    }
);

export default $api;
