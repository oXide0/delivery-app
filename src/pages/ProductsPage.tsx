import { Container } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import { motion as m } from 'framer-motion';

const ProductsPage = () => {
    return (
        <Container
            component={m.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Container sx={{ display: 'flex' }}>
                <Products />
                <OrderCart />
            </Container>
        </Container>
    );
};

export default ProductsPage;
