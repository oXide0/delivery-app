import { Stack, Typography, Box } from '@mui/material';
import FoodItemImg from '../assets/food-item.jfif';
import ProductCard from '../components/ProductCard';
import { motion as m } from 'framer-motion';

const OrdersPage = () => {
    return (
        <Box
            sx={{ width: '100%', p: 5 }}
            component={m.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Typography variant='h3' fontWeight={700}>
                Orders History
            </Typography>
            <Stack pt={6}>
                <ProductCard
                    id={1}
                    img={FoodItemImg}
                    price={100}
                    title='Burger'
                    category_id={1}
                    type='order'
                />
            </Stack>
        </Box>
    );
};

export default OrdersPage;
