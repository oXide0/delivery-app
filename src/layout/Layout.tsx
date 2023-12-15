import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <Container sx={{ display: 'flex' }}>
            <NavBar />
            <Box width='100%'>
                <Outlet />
            </Box>
        </Container>
    );
};

export default Layout;
