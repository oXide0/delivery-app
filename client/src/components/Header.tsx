import { SyntheticEvent, memo, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { selectActiveTab, setActiveTab } from '../features/tabSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getTabPath } from '../utils/tabs';
import { logOut } from '../features/authSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SimpleBadge from './SimpleBadge';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HistoryIcon from '@mui/icons-material/History';
import SellIcon from '@mui/icons-material/Sell';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = memo(() => {
	const { isAuth, username } = useAuth();
	const navigate = useNavigate();
	const activeTab = useAppSelector(selectActiveTab);
	const dispatch = useAppDispatch();
	const buttonRef = useRef(null);
	const [open, setOpen] = useState(false);

	const handleChange = (_: SyntheticEvent, newValue: number) => {
		dispatch(setActiveTab(newValue));
		navigate(getTabPath(newValue));
	};

	const handleLogOut = () => {
		dispatch(logOut());
		setOpen(false);
	};

	return (
		<Box display='flex' justifyContent='space-between' alignItems='center' className='wrapper'>
			<Link to='/' style={{ textDecoration: 'none' }} onClick={() => dispatch(setActiveTab(0))}>
				<Typography variant='h4' fontWeight='900' color='primary'>
					Delivery App
				</Typography>
			</Link>
			<Tabs value={activeTab} onChange={handleChange}>
				<Tab icon={<HomeIcon />} label='HOME' />
				<Tab icon={<ShoppingCartIcon />} label='SHOP' />
				<Tab icon={<HistoryIcon />} label='ORDER HISTORY' />
				<Tab icon={<SellIcon />} label='COUPONS' />
				<Tab icon={<SimpleBadge icon={<ShoppingBasketIcon />} value={2} />} label='Shopping Cart' />
			</Tabs>
			{isAuth ? (
				<Stack>
					<Button
						variant='outlined'
						ref={buttonRef}
						onClick={() => setOpen(!open)}
						sx={{ fontSize: '17px', display: 'flex', gap: '10px' }}
					>
						<AccountCircleIcon />
						{username}
					</Button>
					<Menu anchorEl={buttonRef.current} open={open} onClose={() => setOpen(false)}>
						<MenuItem onClick={handleLogOut} sx={{ width: '130px' }}>
							Sign out
						</MenuItem>
					</Menu>
				</Stack>
			) : (
				<Stack direction='row' spacing={2}>
					<Link to='/login'>
						<Button variant='text'>Log in</Button>
					</Link>
					<Link to='/register'>
						<Button variant='contained'>Sign up</Button>
					</Link>
				</Stack>
			)}
		</Box>
	);
});

export default Header;
