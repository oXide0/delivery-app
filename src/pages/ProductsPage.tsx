import { Container } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';

const ProductsPage = () => {
    return (
        <Container sx={{ display: 'flex' }}>
            <Products />
            <OrderCart />
        </Container>
    );
};

export default ProductsPage;
