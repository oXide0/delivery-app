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

interface ResponseData {
    userId: string;
    accessToken: string;
}

export const registerUser = async (body: RegisterUserBody): Promise<ResponseData> => {
    const response = await $api.post('/auth/register', body);
    return response.data;
};

export const loginUser = async (body: LoginUserBody): Promise<ResponseData> => {
    const response = await $api.post('/auth/login', body);
    return response.data;
};

export const checkUserExists = async (email: string): Promise<boolean> => {
    const response = await $api.get(`/auth/exists?email=${email}`);
    return response.data;
};
