import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CouponPage from './pages/CouponPage';
import CartPage from './pages/CartPage';
import RequireAuth from './components/RequireAuth';
import OrdersPage from './pages/OrdersPage';
import SuccessPage from './pages/SuccessPage';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='shop' element={<ShopPage />} />
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
				<Route element={<RequireAuth />}>
					<Route path='coupons' element={<CouponPage />} />
					<Route path='cart' element={<CartPage />} />
					<Route path='history' element={<OrdersPage />} />
					<Route path='success' element={<SuccessPage />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
