import { Route, Routes } from 'react-router-dom';
import RequireAuth from './layout/RequireAuth';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';
import RegsiterPage from './pages/RegisterPage';

const App = () => {
    return (
        <Routes>
            <Route path='register' element={<RegsiterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='products' element={<ProductsPage />} />
            <Route path='/' element={<RequireAuth />}>
                <Route path='orders' element={<OrdersPage />} />
                <Route path='cart' element={<CartPage />} />
            </Route>
        </Routes>
    );
};

export default App;
