import { Box } from '@mui/material';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../layout/PageLayout';
import { useGetProductsQuery } from '../services/productApi';
import {
    useGetCartQuery,
    useAddToCartMutation,
    useRemoveProductFromCartMutation,
    useUpdateProductQuantityMutation,
} from '../services/cartApi';
import Loader from '../components/Loader';

const ProductsPage = () => {
    const { data, isLoading } = useGetProductsQuery();
    const { data: cartData, isLoading: cartLoading } = useGetCartQuery(1);

    const [addToCart] = useAddToCartMutation();
    const [removeFromCart] = useRemoveProductFromCartMutation();
    const [updateProductQuantity] = useUpdateProductQuantityMutation();

    const addProductToCart = (productId: number) => addToCart(productId);
    const updateProduct = (cartItemId: number, quantity: number) =>
        updateProductQuantity({ cartItemId, quantity });

    if (isLoading || !data || cartLoading || !cartData) return <Loader />;

    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products prodcuts={data} addProductToCart={addProductToCart} />
                <OrderCart
                    products={cartData}
                    removeProduct={removeFromCart}
                    updateProductQuantity={updateProduct}
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
