import { Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';

export const handleError = (error: any) => {
    if (error === undefined) return;
    if ('status' in error && error.status === 403) return <Navigate to='/login' />;
    return (
        <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
            Something went wrong
        </Typography>
    );
};
