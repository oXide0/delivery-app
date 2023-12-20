import { Box, Button, Divider, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartProduct } from '../types';
import { getTotalPrice } from '../utils';
import OrderProductCard from './OrderProductCard';

interface OrderCartProps {
    products: CartProduct[];
    removeProduct: (cartItemId: number) => void;
    updateProductQuantity: (cartItemId: number, quantity: number) => void;
}

const OrderCart = ({ products, removeProduct, updateProductQuantity }: OrderCartProps) => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box
            bgcolor={theme.palette.background.paper}
            height='100vh'
            minWidth={400}
            pt={5}
            px={2}
            pb={2}
            display='flex'
            flexDirection='column'
        >
            <Typography variant='h5' fontWeight={700}>
                My Order
            </Typography>
            {products.length ? (
                <Stack pt={3} flex='1 1 auto'>
                    {products.map((item) => (
                        <OrderProductCard
                            key={item.product.id}
                            img={item.product.img}
                            price={item.product.price}
                            title={item.product.title}
                            quantity={item.quantity}
                            onRemoveFromCart={() => removeProduct(item.cartItemId)}
                            onUpdateProductQuantity={(quantity) =>
                                updateProductQuantity(item.cartItemId, quantity)
                            }
                        />
                    ))}
                </Stack>
            ) : (
                <Typography
                    flex='1 1 auto'
                    variant='h6'
                    fontWeight={700}
                    pt={10}
                    textAlign='center'
                >
                    No items in your cart
                </Typography>
            )}
            <Divider sx={{ borderWidth: 2, mt: 5, color: '#000' }} />
            <Stack direction='row' justifyContent='space-between' pt={1}>
                <Typography variant='h6' fontWeight={700}>
                    Total
                </Typography>
                <Typography variant='h6' fontWeight={700}>
                    €{getTotalPrice(products)}
                </Typography>
            </Stack>
            <Stack pt={2}>
                <Button variant='contained' onClick={() => navigate('/cart')}>
                    Check Out
                </Button>
            </Stack>
        </Box>
    );
};

export default OrderCart;
