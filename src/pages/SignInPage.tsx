import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useGetUsersQuery } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setAuth, setCredentials } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { formStyles } from '../utils/formStyles';
import { useForm } from 'react-hook-form';
import { TypeCredentials } from '../types/types';

const SignInPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: users } = useGetUsersQuery();
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<TypeCredentials>({ mode: 'onChange' });

	const handleError = (username: string, password: string) => {
		const user = users?.find((user) => user.name === username);
		const pwd = users?.find((user) => user.password === password);

		if (!user) {
			setErrorMessage('User does not exist');
			return false;
		}
		if (!pwd) {
			setErrorMessage('Password is incorrect');
			return false;
		}
		return true;
	};

	const onSubmit = (data: TypeCredentials) => {
		if (handleError(data.username, data.password)) {
			navigate('/');
			dispatch(setAuth(true));
			dispatch(setCredentials({ username: data.username, password: data.password }));
			setErrorMessage('');
		}
	};

	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', paddingTop: '40px', fontSize: '40px', fontWeight: '600' }}>
				Sign in to the app
			</h1>
			<form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
				<p style={{ color: 'red' }}>{errorMessage}</p>
				<label style={{ color: 'red' }}>{errors.username && errors.username.message}</label>
				<Input placeholder='Name' {...register('username', { required: '*Name is required' })} />
				<label style={{ color: 'red' }}>{errors.password && errors.password.message}</label>
				<Input
					placeholder='Password'
					type='password'
					{...register('password', { required: '*Passsword is requiered' })}
				/>
				<Button type='submit' color='neutral' disabled={!isValid}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default SignInPage;
