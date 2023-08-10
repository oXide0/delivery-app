import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './hoc/Layout';
import RequireAuth from './hoc/RequireAuth';
import BarLoader from './components/BarLoader/BarLoader';
import HomePage from './pages/HomePage';

const LazySignInPage = lazy(() => import('./pages/SignInPage'));
const LazySignUpPage = lazy(() => import('./pages/RegisterPage'));
// const LazyHomePage = lazy(() => import('./pages/HomePage'));
const LazyShopPage = lazy(() => import('./pages/ShopPage'));
const LazyCartPage = lazy(() => import('./pages/CartPage'));
const LazySuccessPage = lazy(() => import('./pages/SuccessPage'));
const LazyOrdersPage = lazy(() => import('./pages/OrdersPage'));
const LazyCouponsPage = lazy(() => import('./pages/CouponsPage'));

function App() {
	return (
		<Suspense fallback={<BarLoader />}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='shop' element={<LazyShopPage />} />
					<Route path='sign-up' element={<LazySignUpPage />} />
					<Route path='sign-in' element={<LazySignInPage />} />
					<Route element={<RequireAuth />}>
						<Route path='cart' element={<LazyCartPage />} />
						<Route path='success' element={<LazySuccessPage />} />
						<Route path='history' element={<LazyOrdersPage />} />
						<Route path='coupons' element={<LazyCouponsPage />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
