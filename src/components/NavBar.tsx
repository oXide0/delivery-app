import { DarkMode, History, Home, LightMode, Sell, ShoppingCart } from '@mui/icons-material';
import { Box, IconButton, Tab, Tabs, useTheme } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { selectThemeMode, setMode } from '../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../redux-hooks';

const NavBar = () => {
    const routeMatch = useRouteMatch(['/coupons', '/orders', '/products', '/cart']);
    const currentTab = routeMatch?.pattern?.path;
    const mode = useAppSelector(selectThemeMode);
    const dispatch = useAppDispatch();
    const toggleMode = () => dispatch(setMode(mode === 'light' ? 'dark' : 'light'));
    const theme = useTheme();

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
                {mode === 'light' ? <LightMode /> : <DarkMode />}
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
                    value='/products'
                    icon={<Home sx={{ width: '30px', height: '30px' }} />}
                    to='/products'
                    disableRipple
                    sx={{ mt: 1 }}
                />
                <Tab
                    component={Link}
                    value='/coupons'
                    icon={<Sell sx={{ width: '30px', height: '30px' }} />}
                    to='/coupons'
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
