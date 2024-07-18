import { Box, Typography } from '@mui/material';
import {
    activeOrderQuery,
    createOrderItemMutation,
    removeOrderItemMutation,
    updateOrderItemMutation,
} from '../api/orderApi';
import { productsQuery } from '../api/productApi';
import Loader from '../components/Loader';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../components/layouts/PageLayout';
import { useQuery } from '../hooks/useQuery';

const ProductsPage = () => {
    const products = useQuery(productsQuery);
    const order = useQuery(activeOrderQuery);

    if (products.isLoading || order.isLoading) return <Loader />;

    if (products.error || order.error)
        return (
            <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
                Something went wrong
            </Typography>
        );

    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products
                    products={products.data ?? []}
                    onAddToOrder={async (productId) => {
                        await createOrderItemMutation({ orderId: order.data!.id, productId });
                        order.refetch();
                    }}
                />
                <OrderCart
                    items={order.data?.orderItems ?? []}
                    removeItem={async (id) => {
                        await removeOrderItemMutation(id);
                        order.refetch();
                    }}
                    updateItemQuantity={async (id, quantity) => {
                        await updateOrderItemMutation({ id, quantity });
                        order.refetch();
                    }}
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
