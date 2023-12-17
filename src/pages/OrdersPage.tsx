import { Stack, Typography } from '@mui/material';
import FoodItemImg from '../assets/food-item.jfif';
import ProductCard from '../components/ProductCard';
import PageLayout from '../layout/Pagelayout';

const OrdersPage = () => {
    return (
        <PageLayout>
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
        </PageLayout>
    );
};

export default OrdersPage;
