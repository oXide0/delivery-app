import { Box, Stack, Typography, Divider, Button } from '@mui/material';
import OrderProductCard from './OrderProductCard';

const OrderCart = () => {
    return (
        <Box
            bgcolor='#F3F3F3'
            height='100vh'
            pt={5}
            px={2}
            pb={2}
            display='flex'
            flexDirection='column'
        >
            <Typography variant='h5' fontWeight={700}>
                My Order
            </Typography>
            <Stack pt={3} flex='1 1 auto'>
                <OrderProductCard />
            </Stack>
            <Divider sx={{ borderWidth: 2, mt: 5, color: '#000' }} />
            <Stack direction='row' justifyContent='space-between' pt={1}>
                <Typography variant='h6' fontWeight={700}>
                    Total
                </Typography>
                <Typography variant='h6' fontWeight={700}>
                    Rp 100.000
                </Typography>
            </Stack>
            <Stack pt={2}>
                <Button variant='contained'>Check Out</Button>
            </Stack>
        </Box>
    );
};

export default OrderCart;
