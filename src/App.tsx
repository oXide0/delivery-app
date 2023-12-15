import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import RegsiterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';

const App = () => {
    return (
        <Routes>
            <Route path='register' element={<RegsiterPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='/' element={<Layout />}>
                <Route path='products' element={<ProductsPage />} />
                <Route path='orders' element={<OrdersPage />} />
            </Route>
        </Routes>
    );
};

export default App;
