import { Box } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../layout/PageLayout';
import { useGetProductsQuery } from '../services/productApi';
import Loader from '../components/Loader';

const ProductsPage = () => {
    const { data, isLoading } = useGetProductsQuery();

    if (isLoading || !data) return <Loader />;

    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products prodcuts={data} />
                <OrderCart />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
