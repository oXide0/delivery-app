import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { SignUpPage, SignInPage } from './pages/AuthPages';
import HomePage from './pages/HomePage';
import RequireAuth from './components/RequireAuth';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import SuccessPage from './pages/SuccessPage';
import HistoryPage from './pages/HistoryPage';
import CouponsPage from './pages/CouponsPage';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='sign-up' element={<SignUpPage />} />
				<Route path='sign-in' element={<SignInPage />} />
				<Route element={<RequireAuth />}>
					<Route path='shop' element={<ShopPage />} />
					<Route path='cart' element={<CartPage />} />
					<Route path='success' element={<SuccessPage />} />
					<Route path='history' element={<HistoryPage />} />
					<Route path='coupons' element={<CouponsPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
