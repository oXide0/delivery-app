import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from '../features/authSlice';
import { useAppSelector } from '../redux-hooks';
import Layout from './Layout';

const RequireAuth = () => {
    const location = useLocation();
    const token = useAppSelector(selectToken);

    return token ? <Layout /> : <Navigate to='/login' state={{ from: location }} replace />;
};

export default RequireAuth;
