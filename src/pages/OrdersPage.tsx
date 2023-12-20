import { Stack, Typography } from '@mui/material';
import OrderCard from '../components/OrderCard';
import PageLayout from '../layout/PageLayout';
import { useGetOrdersQuery } from '../services/orderApi';
import Loader from '../components/Loader';

const OrdersPage = () => {
    const { data, isLoading } = useGetOrdersQuery(1);

    if (isLoading || !data) return <Loader />;

    return (
        <PageLayout>
            <Typography variant='h3' fontWeight={700}>
                Orders History
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={2} pt={6}>
                {data.map((order) => (
                    <OrderCard key={order.id} date={order.date} totalPrice={order.totalPrice} />
                ))}
            </Stack>
        </PageLayout>
    );
};

export default OrdersPage;
