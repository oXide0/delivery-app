import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});

export const registerValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
});

export const paymentValidationSchema = yup.object().shape({
    cardNumber: yup.string().required('Card number is required'),
    date: yup.string().required('Date is required'),
    cvc: yup.string().required('CVC is required'),
    name: yup.string().required('Name is required'),
});

export const accessCodeValidationSchema = yup.object().shape({
    code: yup
        .string()
        .required('Access code is required')
        .min(6, 'Access code must be 6 characters'),
});
