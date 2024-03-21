import axios from 'axios';

const $api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true,
});

// $api.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     async (error) => {
//         const originalRequest = error.config;
//         if (error.response.status == 403 && error.config && !error.config._isRetry) {
//             originalRequest._isRetry = true;
//             try {
//                 const response = await axios.get<AuthResponse>(
//                     `${process.env.VITE_BASE_URL}/refresh`,
//                     {
//                         withCredentials: true,
//                     }
//                 );
//                 localStorage.setItem('token', response.data.accessToken);
//                 return $api.request(originalRequest);
//             } catch (e) {
//                 console.log('Error with refresh token');
//             }
//         }
//         throw error;
//     }
// );

export default $api;
