import { useLocation, Outlet, Navigate } from 'react-router-dom';

const RequireAuth = () => {
	const auth = localStorage.getItem('isAuth');
	const location = useLocation();

	return auth ? <Outlet /> : <Navigate to='/sign-up' state={{ from: location }} replace />;
};

export default RequireAuth;
