import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useLoginMutation, useGetUsersQuery } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setAuth, setCredentials } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { validate } from '../utils/validation';
import { formStyles } from '../utils/formStyles';

const SignUpPage = () => {
	const [userData, setUserData] = useState({ username: '', password: '' });
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const [login, { isLoading }] = useLoginMutation();
	const { data: users } = useGetUsersQuery();
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (users) {
			const username = userData.username;
			const password = userData.password;
			const repeatName = users.find((user) => user.name === username);
			const errorMessage = validate(username, password, repeatName as boolean | undefined);

			if (errorMessage) {
				setError(errorMessage);
				return;
			}
			try {
				login({ username, password });
				navigate('/');
				dispatch(setAuth(true));
				dispatch(setCredentials({ username, password }));
			} catch (err) {
				alert(err);
			}
			setError('');
		}
	};

	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', paddingTop: '40px', fontSize: '40px', fontWeight: '600' }}>
				Sign up to the app
			</h1>
			<form style={formStyles} onSubmit={handleSubmit}>
				<p style={{ color: 'red' }}>{error ? `*${error}` : ''}</p>
				<Input
					placeholder='Name'
					required
					color={error ? 'danger' : 'neutral'}
					name='username'
					value={userData.username}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserData({ ...userData, username: e.target.value })
					}
				/>
				<Input
					placeholder='Password'
					type='password'
					required
					color={error ? 'danger' : 'neutral'}
					name='password'
					value={userData.password}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setUserData({ ...userData, password: e.target.value })
					}
				/>
				<Button type='submit' color='neutral' loading={isLoading}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default SignUpPage;
