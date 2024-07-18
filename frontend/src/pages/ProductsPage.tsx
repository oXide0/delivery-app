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
    const { data, isLoading, error } = useQuery(productsQuery);
    const {
        data: orderData,
        isLoading: isOrderLoading,
        error: orderError,
    } = useQuery(activeOrderQuery);

    if (isLoading || isOrderLoading || !data || !orderData) return <Loader />;

    if (error || orderError)
        return (
            <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
                Something went wrong
            </Typography>
        );

    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products
                    products={data}
                    onAddToOrder={(productId) =>
                        createOrderItemMutation({ orderId: orderData.id, productId: productId })
                    }
                />
                <OrderCart
                    items={orderData.orderItems}
                    removeItem={(id) => removeOrderItemMutation(id)}
                    updateItemQuantity={(id, quantity) =>
                        updateOrderItemMutation({ id: id, quantity: quantity })
                    }
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
