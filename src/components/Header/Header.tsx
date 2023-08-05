import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import Tooltip from '@mui/joy/Tooltip';
import MenuItem from '@mui/joy/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HistoryIcon from '@mui/icons-material/History';
import SellIcon from '@mui/icons-material/Sell';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { logOut } from '../../features/authSlice';
import { useState, useRef } from 'react';
import { StyledContainer, StyledHeader, StyledLogo, StyledNav } from './styles';
import CustomLink from '../CustomLink/CustomLink';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
	const { isAuth, username } = useAuth();
	const dispatch = useAppDispatch();
	const buttonRef = useRef(null);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogOut = () => {
		dispatch(logOut());
		setOpen(false);
	};

	return (
		<StyledContainer>
			<StyledHeader>
				<StyledLogo to='/'>Delivery App</StyledLogo>
				<StyledNav>
					<CustomLink path='/' icon={<HomeIcon fontSize='large' />}>
						Home
					</CustomLink>
					<CustomLink path='/shop' icon={<ShoppingCartIcon fontSize='large' sx={{ color: '#454545' }} />}>
						Shop
					</CustomLink>
					<CustomLink path='/history' icon={<HistoryIcon fontSize='large' sx={{ color: '#454545' }} />}>
						History
					</CustomLink>
					<CustomLink path='/coupons' icon={<SellIcon fontSize='large' sx={{ color: '#454545' }} />}>
						Coupons
					</CustomLink>
				</StyledNav>
				<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
					<Tooltip title='Shopping Cart' variant='solid'>
						<NavLink to='/cart' style={{ color: '#454545' }}>
							<ShoppingBasketIcon fontSize='large' />
						</NavLink>
					</Tooltip>

					{isAuth ? (
						<div>
							<Button
								ref={buttonRef}
								variant='outlined'
								color='neutral'
								onClick={() => setOpen(!open)}
								sx={{ fontSize: '17px', display: 'flex', gap: '10px' }}
							>
								<AccountCircleIcon />
								{username}
							</Button>
							<Menu anchorEl={buttonRef.current} open={open} onClose={handleClose}>
								<MenuItem onClick={handleLogOut}>Sign out</MenuItem>
							</Menu>
						</div>
					) : (
						<div style={{ display: 'flex', gap: '10px' }}>
							<NavLink to='/sign-in'>
								<Button color='neutral' sx={{ fontSize: '17px' }}>
									Sign In
								</Button>
							</NavLink>
							<NavLink to='/sign-up'>
								<Button sx={{ fontSize: '17px' }}>Register</Button>
							</NavLink>
						</div>
					)}
				</div>
			</StyledHeader>
		</StyledContainer>
	);
};

export default Header;
