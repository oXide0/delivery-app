import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
// import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/layouts/Layout';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<Layout />}>
                <Route index element={<ProductsPage />} />
                {/* <Route path='orders' element={<OrdersPage />} />
                <Route path='cart' element={<CartPage />} /> */}
            </Route>
        </>
    )
);
