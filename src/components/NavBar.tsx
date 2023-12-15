import { History, Home, Sell, ShoppingCart } from '@mui/icons-material';
import { Box, Tab, Tabs } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { palette } from '../theme';

const NavBar = () => {
    const routeMatch = useRouteMatch(['/coupons', '/orders', '/products', '/cart']);
    const currentTab = routeMatch?.pattern?.path;

    return (
        <Box
            height='100vh'
            bgcolor={palette.background.paper}
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Tabs value={currentTab} orientation='vertical'>
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
