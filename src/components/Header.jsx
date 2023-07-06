import Button from '@mui/joy/Button';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, selectCredentials, logOut } from '../features/auth/authSlice';
import { useState, useRef, useEffect } from 'react';
import { setAuth, setCredentials } from '../features/auth/authSlice';

function Header() {
	const auth = useSelector(selectAuth);
	const credentials = useSelector(selectCredentials);
	const dispatch = useDispatch();
	const buttonRef = useRef(null);
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogOut = () => {
		dispatch(logOut());
		setOpen(false);
	};

	useEffect(() => {
		const isAuth = localStorage.getItem('isAuth');
		const username = localStorage.getItem('username');
		const password = localStorage.getItem('password');
		if (isAuth) {
			dispatch(setAuth(true));
			dispatch(setCredentials({ username, password }));
		}
	}, []);

	return (
		<div className='header__container'>
			<header className='header'>
				<NavLink to='/' className='header__logo'>
					Delivery App
				</NavLink>
				<nav className='header__nav'>
					<NavLink to='/' className='header__link'>
						Home
					</NavLink>
					<NavLink to='/shop' className='header__link'>
						Shop
					</NavLink>
					<NavLink to='/cart' className='header__link'>
						Shopping Cart
					</NavLink>
					<NavLink to='/history' className='header__link'>
						History
					</NavLink>
					<NavLink to='/coupons' className='header__link'>
						Coupons
					</NavLink>
					{auth ? (
						<div>
							<Button
								ref={buttonRef}
								variant='outlined'
								color='neutral'
								onClick={() => setOpen(!open)}
								sx={{ fontSize: '17px' }}
							>
								{credentials.username}
							</Button>
							<Menu anchorEl={buttonRef.current} open={open} onClose={handleClose}>
								<MenuItem onClick={handleLogOut}>Logout</MenuItem>
							</Menu>
						</div>
					) : (
						<>
							<NavLink to='/sign-up' className='header__link'>
								Sign Up
							</NavLink>
							<NavLink to='/sign-in'>
								<Button color='neutral' sx={{ fontSize: '17px', color: '#f1f1f1' }}>
									Sign In
								</Button>
							</NavLink>
						</>
					)}
				</nav>
			</header>
		</div>
	);
}

export default Header;
