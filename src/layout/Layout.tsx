import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <Box width='100%' display='flex'>
            <NavBar />
            <Outlet />
        </Box>
    );
};

export default Layout;
