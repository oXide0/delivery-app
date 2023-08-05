import { useLoginMutation } from '../services/authApi';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../features/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { TypeCredentials } from '../types/types';
import { nanoid } from '@reduxjs/toolkit';
import Form from '../components/Form/Form';
import { useGetUsersQuery } from '../services/authApi';
import Typography from '@mui/joy/Typography';

const SignInPage = () => {
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
		<div className='wrapper form__wrapper'>
			<Typography level='h1' textAlign='center'>
				Create a new account
			</Typography>
			<Form onSubmit={onSubmit} handleError={handleError} />
		</div>
	);
};

export default SignInPage;
