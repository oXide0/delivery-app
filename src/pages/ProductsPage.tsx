import { Box, Container } from '@mui/material';
import Products from '../components/Products';
import OrderCart from '../components/OrderCart';

const ProductsPage = () => {
    return (
        <Container>
            <Box display='flex'>
                <Products />
                <OrderCart />
            </Box>
        </Container>
    );
};

export default ProductsPage;
