import { User } from '../types';
import $api from './api';

interface RegisterUserBody {
    username: string;
    email: string;
    password: string;
}

interface LoginUserBody {
    email: string;
    password: string;
}

export const registerUser = async (body: RegisterUserBody): Promise<User> => {
    const response = await $api.post('/auth/register', body);
    return response.data;
};

export const loginUser = async (body: LoginUserBody): Promise<User> => {
    const response = await $api.post('/auth/login', body);
    return response.data;
};
