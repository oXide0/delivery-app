import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from '../components/Form';
import { useLoginMutation } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../features/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useGetUsersQuery } from '../services/authApi';
import { TypeCredentials } from '../types';
import { nanoid } from '@reduxjs/toolkit';

const RegisterPage = () => {
	const { data: users } = useGetUsersQuery();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [login] = useLoginMutation();

	const handleError = (userData: TypeCredentials) => {
		const user = users?.find((user) => user.name === userData.username);
		if (user) {
			return 'User already exists';
		}
		return '';
	};

	const onSubmit = (data: TypeCredentials) => {
		login({ id: nanoid(), name: data.username, password: data.password });
		dispatch(setCredentials({ username: data.username, password: data.password }));
		navigate('/');
	};

	return (
		<Box display='flex' flexDirection='column' gap='40px' paddingTop='50px'>
			<Typography variant='h4' textAlign='center' fontWeight='bold'>
				Create a new account
			</Typography>
			<Form onSubmit={onSubmit} handleError={handleError} />
		</Box>
	);
};

export default RegisterPage;
