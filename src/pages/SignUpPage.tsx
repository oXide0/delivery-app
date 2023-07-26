import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { useLoginMutation, useGetUsersQuery } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setAuth, setCredentials } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { formStyles } from '../utils/formStyles';
import { useForm } from 'react-hook-form';
import { TypeCredentials } from '../types/types';
import { nanoid } from '@reduxjs/toolkit';

const SignInPage = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: users } = useGetUsersQuery();
	const [login] = useLoginMutation();
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<TypeCredentials>({ mode: 'onChange' });

	const handleError = (username: string) => {
		const user = users?.find((user) => user.name === username);
		if (user) {
			setErrorMessage('User already exists');
			return false;
		}
		return true;
	};

	const onSubmit = (data: TypeCredentials) => {
		if (handleError(data.username)) {
			navigate('/');
			login({ id: nanoid(), name: data.username, password: data.password });
			dispatch(setAuth(true));
			dispatch(setCredentials({ username: data.username, password: data.password }));
			setErrorMessage('');
		}
	};

	return (
		<div className='wrapper'>
			<h1 style={{ textAlign: 'center', paddingTop: '40px', fontSize: '40px', fontWeight: '600' }}>
				Create new account
			</h1>
			<form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
				<p style={{ color: 'red' }}>{errorMessage}</p>
				<label style={{ color: 'red' }}>{errors.username && errors.username.message}</label>
				<Input placeholder='Name' {...register('username', { required: '*Name is required' })} />
				<label style={{ color: 'red' }}>{errors.password && errors.password.message}</label>
				<Input
					placeholder='Password'
					type='password'
					{...register('password', {
						required: '*Passsword is requiered',
						minLength: {
							value: 6,
							message: 'Password must be at least 6 characters long',
						},
					})}
				/>
				<Button type='submit' color='neutral' disabled={!isValid}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default SignInPage;
