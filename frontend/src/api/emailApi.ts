import $api from './api';

export const sendCode = async (email: string, username: string) => {
    await $api.post('/email/send-code', {
        email,
        username,
    });
};

export const verifyCode = async (email: string, code: string) => {
    await $api.post('/email/verify-code', {
        email,
        code,
    });
};
