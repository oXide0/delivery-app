import { Routes, Route } from 'react-router-dom';
import Layout from './hoc/Layout';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RequireAuth from './hoc/RequireAuth';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import SuccessPage from './pages/SuccessPage';
import OrdersPage from './pages/OrdersPage';
import CouponsPage from './pages/CouponsPage';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='shop' element={<ShopPage />} />
				<Route path='sign-up' element={<SignUpPage />} />
				<Route path='sign-in' element={<SignInPage />} />
				<Route element={<RequireAuth />}>
					<Route path='cart' element={<CartPage />} />
					<Route path='success' element={<SuccessPage />} />
					<Route path='history' element={<OrdersPage />} />
					<Route path='coupons' element={<CouponsPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
