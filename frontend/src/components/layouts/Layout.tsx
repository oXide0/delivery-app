import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';

const Layout = () => {
    const navigate = useNavigate();

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
