import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../services/authApi';
import { setCredentials } from '../features/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { TypeCredentials } from '../types';

const LoginPage = () => {
	const { data: users } = useGetUsersQuery();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleError = (userData: TypeCredentials) => {
		const user = users?.find((user) => user.name === userData.username);
		const pwd = users?.find((user) => user.password === userData.password);

		if (!user) {
			return 'User does not exist';
		}
		if (!pwd) {
			return 'Password is incorrect';
		}
		return '';
	};

	const onSubmit = (data: TypeCredentials) => {
		dispatch(setCredentials({ username: data.username, password: data.password }));
		navigate('/');
	};

	return (
		<Box display='flex' flexDirection='column' gap='40px' paddingTop='50px'>
			<Typography variant='h4' textAlign='center' fontWeight='bold'>
				Log in to the app
			</Typography>
			<Form onSubmit={onSubmit} handleError={handleError} />
		</Box>
	);
};

export default LoginPage;
