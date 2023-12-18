import { Stack, Typography } from '@mui/material';
import OrderCard from '../components/OrderCard';
import PageLayout from '../layout/PageLayout';
// import { useGetOrderQuery } from '../services/orderApi';

const OrdersPage = () => {
    // const { data, isLoading } = useGetOrderQuery(userId);

    return (
        <PageLayout>
            <Typography variant='h3' fontWeight={700}>
                Orders History
            </Typography>
            <Stack pt={6}>
                <OrderCard date='2022-21-1' totalPrice={1100} />
            </Stack>
        </PageLayout>
    );
};

export default OrdersPage;
