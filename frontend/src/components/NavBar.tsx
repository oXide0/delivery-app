import { DarkMode, History, Home, LightMode, ShoppingCart, Logout } from '@mui/icons-material';
import { Box, IconButton, Tab, Tabs, useTheme } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ThemeModeContext } from '../providers/ThemeContext';
import { useContext } from 'react';

const NavBar = () => {
    const routeMatch = useRouteMatch(['/orders', '/', '/cart']);
    const currentTab = routeMatch?.pattern?.path || false;
    const { mode, setMode } = useContext(ThemeModeContext);
    const navigate = useNavigate();
    const theme = useTheme();

    const toggleMode = () => setMode(mode === 'light' ? 'dark' : 'light');
    const onLogout = () => {
        localStorage.removeItem('userId');
        navigate('/login');
    };

    return (
        <Box
            height='100vh'
            bgcolor={theme.palette.background.paper}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <IconButton sx={{ position: 'absolute', top: 10 }} onClick={toggleMode}>
                {mode === 'light' ? <DarkMode /> : <LightMode />}
            </IconButton>
            <Tabs
                value={currentTab}
                orientation='vertical'
                sx={{
                    '.MuiTabs-indicator': {
                        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    },
                }}
            >
                <Tab
                    component={Link}
                    value='/orders'
                    icon={<History sx={{ width: '30px', height: '30px' }} />}
                    to='/orders'
                    disableRipple
                    sx={{ mt: 1 }}
                />
                <Tab
                    component={Link}
                    value='/'
                    icon={<Home sx={{ width: '30px', height: '30px' }} />}
                    to='/'
                    disableRipple
                    sx={{ mt: 1 }}
                />
                <Tab
                    component={Link}
                    value='/cart'
                    icon={<ShoppingCart sx={{ width: '30px', height: '30px' }} />}
                    to='/cart'
                    disableRipple
                    sx={{ mt: 1 }}
                />
            </Tabs>
            <IconButton sx={{ position: 'absolute', bottom: 10 }} onClick={onLogout}>
                <Logout />
            </IconButton>
        </Box>
    );
};

function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}

export default NavBar;
