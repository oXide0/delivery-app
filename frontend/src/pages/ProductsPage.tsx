import { Box } from '@mui/material';
import Loader from '../components/Loader';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../components/layouts/PageLayout';
import {
    useAddToCartMutation,
    useGetCartQuery,
    useRemoveProductFromCartMutation,
    useUpdateProductQuantityMutation,
} from '../services/cartApi';
import { useGetProductsQuery } from '../services/productApi';
import { handleError } from '../helpers/utils';

const ProductsPage = () => {
    const {
        data: products,
        isLoading: isProductsLoading,
        error: productsError,
    } = useGetProductsQuery();
    const { data: cart, isLoading: isCartLoading, error: cartError } = useGetCartQuery();

    const [addToCart] = useAddToCartMutation();
    const [removeFromCart] = useRemoveProductFromCartMutation();
    const [updateProductQuantity] = useUpdateProductQuantityMutation();

    const addProductToCart = (productId: number) => addToCart(productId);
    const updateProduct = (cartItemId: number, quantity: number) =>
        updateProductQuantity({ cartItemId, quantity });

    if (productsError) return handleError(productsError);
    if (cartError) return handleError(cartError);
    if (isProductsLoading || isCartLoading || !products || !cart) return <Loader />;
    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products products={products} addProductToCart={addProductToCart} />
                <OrderCart
                    products={cart}
                    removeProduct={removeFromCart}
                    updateProductQuantity={updateProduct}
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
