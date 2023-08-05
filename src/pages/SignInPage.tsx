import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../services/authApi';
import { setCredentials } from '../features/authSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { TypeCredentials } from '../types/types';
import Form from '../components/Form/Form';
import Typography from '@mui/joy/Typography';

const SignInPage = () => {
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
		<div className='wrapper form__wrapper'>
			<Typography level='h1' textAlign='center'>
				Sign in to the app
			</Typography>
			<Form onSubmit={onSubmit} handleError={handleError} />
		</div>
	);
};

export default SignInPage;
