import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { addToCart, getCart, removeProductFromCart, updateProductQuantity } from '../api/cartApi';
import { getProducts } from '../api/productApi';
import Loader from '../components/Loader';
import OrderCart from '../components/OrderCart';
import Products from '../components/Products';
import PageLayout from '../components/layouts/PageLayout';
import { handleError } from '../helpers/handleError';
import { useQuery } from '../hooks/useQuery';
import { CartProduct, Product } from '../types';

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [cart, setCart] = useState<CartProduct[] | null>(null);
    const { fetch, isLoading, error } = useQuery(async () => {
        const products = await getProducts();
        const cart = await getCart();
        setProducts(products);
        setCart(cart);
    });

    useEffect(() => {
        fetch();
    }, [fetch]);

    const addProductToCart = (productId: number) => addToCart(productId);
    const updateProduct = (cartItemId: number, quantity: number) =>
        updateProductQuantity({ cartItemId, quantity });

    if (error) return handleError(error);
    if (isLoading || !products || !cart) return <Loader />;
    return (
        <PageLayout noPadding>
            <Box sx={{ display: 'flex' }}>
                <Products products={products} addProductToCart={addProductToCart} />
                <OrderCart
                    products={cart}
                    removeProduct={removeProductFromCart}
                    updateProductQuantity={updateProduct}
                />
            </Box>
        </PageLayout>
    );
};

export default ProductsPage;
