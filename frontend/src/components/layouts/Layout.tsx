import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAxiosInterceptor } from '../../api/api';
import NavBar from '../NavBar';

const Layout = () => {
    const navigate = useNavigate();
    useAxiosInterceptor();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);

    return (
        <Box width='100%' display='flex'>
            <NavBar />
            <Outlet />
        </Box>
    );
};

export default Layout;
