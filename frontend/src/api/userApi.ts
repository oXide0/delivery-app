import { User } from '../types';
import $api from './api';

interface UserBody {
    username: string;
    password: string;
    email: string;
    roleName: string;
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
    const response = await $api.post('/users/login', body);
    return response.data;
};

export const updateUser = async (userId: number, body: UserBody): Promise<User> => {
    const response = await $api.put(`/users/${userId}`, body);
    return response.data;
};
