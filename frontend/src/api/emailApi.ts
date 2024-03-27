import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.PUBLIC_NODE_URL,
});

export const sendCode = async (email: string, name: string) => {
    await instance.post('/email/send-code', {
        email,
        name,
    });
};

export const verifyCode = async (email: string, code: string) => {
    await instance.post('/email/verify-code', {
        email,
        code,
    });
};
