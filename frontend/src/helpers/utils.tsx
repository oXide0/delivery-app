import { Typography } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Navigate } from 'react-router-dom';
import { CartProduct } from '../types';

export function getTotalPrice(products: CartProduct[]) {
    return products.map((item) => item.product.price * item.quantity).reduce((a, b) => a + b, 0);
}

export function parseDate(dateString: string): Date {
    return new Date(dateString);
}

export const handleError = (error: FetchBaseQueryError | SerializedError | undefined) => {
    if (error === undefined) return;
    if ('status' in error && error.status === 403) return <Navigate to='/login' />;
    return (
        <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
            Something went wrong
        </Typography>
    );
};

export const getUserId = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        return parseInt(userId);
    }
    return null;
};
