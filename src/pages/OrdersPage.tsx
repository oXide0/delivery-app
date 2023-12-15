import { Box, Stack, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import FoodItemImg from '../assets/food-item.jfif';

const OrdersPage = () => {
    return (
        <Box width='100%' sx={{ py: 9, px: 8 }}>
            <Typography variant='h4' fontWeight={700} textAlign='center'>
                Orders History
            </Typography>
            <Stack>
                <ProductCard id={1} img={FoodItemImg} price={100} title='Burger' category_id={1} />
            </Stack>
        </Box>
    );
};

export default OrdersPage;
