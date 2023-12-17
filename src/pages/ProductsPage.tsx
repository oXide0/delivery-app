import { Container } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../layout/Pagelayout';

const ProductsPage = () => {
    return (
        <PageLayout noPadding>
            <Container sx={{ display: 'flex' }}>
                <Products />
                <OrderCart />
            </Container>
        </PageLayout>
    );
};

export default ProductsPage;
