import { Stack, Typography } from '@mui/material';
import FoodItemImg from '../assets/food-item.jfif';
import ProductCard from '../components/ProductCard';
import ContentLayout from '../layout/ContentLayout';

const OrdersPage = () => {
    return (
        <ContentLayout>
            <Typography variant='h3' fontWeight={700}>
                Orders History
            </Typography>
            <Stack>
                <ProductCard
                    id={1}
                    img={FoodItemImg}
                    price={100}
                    title='Burger'
                    category_id={1}
                    type='order'
                />
            </Stack>
        </ContentLayout>
    );
};

export default OrdersPage;
