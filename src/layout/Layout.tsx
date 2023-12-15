import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
    return (
        <Container sx={{ display: 'flex' }}>
            <NavBar />
            <Outlet />
        </Container>
    );
};

export default Layout;
