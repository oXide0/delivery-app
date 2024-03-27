import { User } from '../types';
import $api from './api';

interface UserBody {
    name: string;
    email: string;
    password: string;
}

interface LoginUserBody {
    username: string;
    password: string;
}

export const registerUser = async (body: UserBody): Promise<User> => {
    const response = await $api.post('/users/create', body);
    return response.data;
};

export const loginUser = async (body: LoginUserBody): Promise<User> => {
    const response = await $api.post('/users/authenticate', body);
    return response.data;
};
