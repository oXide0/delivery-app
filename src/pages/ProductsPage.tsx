import { Container } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import { motion as m } from 'framer-motion';

const ProductsPage = () => {
    return (
        <Container
            component={m.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Container sx={{ display: 'flex' }}>
                <Products />
                <OrderCart />
            </Container>
        </Container>
    );
};

export default ProductsPage;
