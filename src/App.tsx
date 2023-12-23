import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import Layout from './layout/Layout';

const App = () => {
    return (
        <Routes>
            <Route path='register' element={<RegisterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<Layout />}>
                <Route path='products' element={<ProductsPage />} />
                <Route path='orders' element={<OrdersPage />} />
                <Route path='cart' element={<CartPage />} />
            </Route>
        </Routes>
    );
};

export default App;
