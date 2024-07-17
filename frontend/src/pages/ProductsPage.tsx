import { Box, Typography } from '@mui/material';
import { productsQuery } from '../api/productApi';
import Loader from '../components/Loader';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../components/layouts/PageLayout';
import { useQuery } from '../hooks/useQuery';
import { createOrderItemMutation, orderItemsQuery } from '../api/orderApi';

const ProductsPage = () => {
    const { data, isLoading, error } = useQuery(productsQuery);
    const {
        data: cartData,
        isLoading: isCartLoading,
        error: cartError,
    } = useQuery(() => orderItemsQuery('s'));

    // const addProductToCart = (productId: string) => createOrderItemMutation(productId);
    // const updateProduct = (orderItemId: string, quantity: number) =>
    //     updateProductQuantity({ orderItemId, quantity });

    if (isLoading || isCartLoading || !data || !cartData) return <Loader />;

    if (error || cartError)
        return (
            <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
                Something went wrong
            </Typography>
        );

    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products products={data} onAddToCart={addProductToCart} />
                <OrderCart
                    items={cartData}
                    removeProduct={removeProductFromCart}
                    updateProductQuantity={updateProduct}
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
