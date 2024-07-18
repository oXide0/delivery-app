import { Stack, Typography } from '@mui/material';
import { historyOrdersQuery } from '../api/orderApi';
import Loader from '../components/Loader';
import OrderCard from '../components/OrderCard';
import PageLayout from '../components/layouts/PageLayout';
import { useQuery } from '../hooks/useQuery';

const OrdersPage = () => {
    const { data, isLoading, error } = useQuery(historyOrdersQuery);

    if (error)
        return (
            <Typography variant='h3' maxWidth='100%' margin='0 auto' fontWeight={700} pt={10}>
                Something went wrong
            </Typography>
        );
    if (isLoading) return <Loader />;
    return (
        <PageLayout>
            <Typography variant='h3' fontWeight={700}>
                Orders History
            </Typography>
            <Stack direction='row' flexWrap='wrap' gap={2} pt={6}>
                {data?.map((order) => (
                    <OrderCard
                        key={order.id}
                        date={order.createdAt}
                        totalPrice={order.totalPrice}
                    />
                ))}
            </Stack>
        </PageLayout>
    );
};

export default OrdersPage;
