import { useAppSelector } from './redux-hooks';
import { selectCredentials } from '../features/authSlice';

export const useAuth = () => {
	const credentials = useAppSelector(selectCredentials);
	return {
		isAuth: credentials.username && credentials.password,
		username: credentials.username,
		password: credentials.password,
	};
};
