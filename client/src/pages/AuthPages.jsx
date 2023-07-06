import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useLoginMutation, useGetUsersQuery } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setAuth, setCredentials } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { validate } from '../utils/validation';

const formStyles = {
	height: 'calc(100vh - 200px)',
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	justifyContent: 'center',
	maxWidth: '400px',
	margin: '0 auto',
};

export function SignUpPage() {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();
	const { data: users } = useGetUsersQuery();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		const repeatName = users.find((user) => user.name === username);
		const errorMessage = validate(username, password, repeatName);

		if (errorMessage) {
			setError(errorMessage);
			return;
		}
		try {
			login({ name: username, password });
			navigate('/');
			dispatch(setAuth(true));
			dispatch(setCredentials({ username, password }));
		} catch (err) {
			alert(err);
		}
		setError('');
	};

	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', paddingTop: '40px', fontSize: '40px', fontWeight: '600' }}>
				Sign up to the app
			</h1>
			<form style={formStyles} onSubmit={handleSubmit}>
				<p style={{ color: 'red' }}>{error ? `*${error}` : ''}</p>
				<Input placeholder='Name' required color={error ? 'danger' : 'neutral'} name='username' />
				<Input
					placeholder='Password'
					type='password'
					required
					color={error ? 'danger' : 'neutral'}
					name='password'
				/>
				<Button type='submit' color='neutral' loading={isLoading}>
					Submit
				</Button>
			</form>
		</div>
	);
}

export function SignInPage() {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const { data: users } = useGetUsersQuery();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		const repeatName = users.find((user) => user.name === username);
		if (repeatName && repeatName.password === password) {
			try {
				navigate('/');
				dispatch(setAuth(true));
				dispatch(setCredentials({ username, password }));
			} catch (err) {
				alert(err);
			}
			setError('');
		} else if (!repeatName) {
			setError('Name not found');
		} else if (repeatName.password !== password) {
			setError('The password is incorrect');
		}
	};

	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', paddingTop: '40px', fontSize: '40px', fontWeight: '600' }}>
				Sign in to the app
			</h1>
			<form style={formStyles} onSubmit={handleSubmit}>
				<p style={{ color: 'red' }}>{error ? `*${error}` : ''}</p>
				<Input placeholder='Name' required color={error ? 'danger' : 'neutral'} name='username' />
				<Input
					placeholder='Password'
					type='password'
					required
					color={error ? 'danger' : 'neutral'}
					name='password'
				/>
				<Button type='submit' color='neutral'>
					Submit
				</Button>
			</form>
		</div>
	);
}
