import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    Snackbar,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import Input from '../components/Input';
import Loader from '../components/Loader';
import PageLayout from '../layout/PageLayout';
import { useGetCartQuery, useRemoveProductFromCartMutation } from '../services/cartApi';
import { useCreateOrderMutation } from '../services/orderApi';
import { CartProduct } from '../types';
import { getTotalPrice, handleError, paymentValidationSchema } from '../utils';

const CartPage = () => {
    const [open, setOpen] = useState(false);
    const [createOrder] = useCreateOrderMutation();
    const [removeProduct] = useRemoveProductFromCartMutation();
    const { data, isLoading, error } = useGetCartQuery();

    const handleSubmit = async () => {
        if (!data) return;
        await createOrder(getTotalPrice(data));
        data.forEach((item) => removeProduct(item.cartItemId));
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    if (error) return handleError(error);
    if (isLoading || !data) return <Loader />;
    return (
        <PageLayout>
            <Typography variant='h3' fontWeight={700}>
                Cart
            </Typography>
            <Grid container pt={5} columnSpacing={4} height='90%'>
                <Grid item xs={12} sm={9}>
                    <ProductsTable products={data} />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaymentForm onSubmit={handleSubmit} products={data} />
                </Grid>
            </Grid>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message='Thank you for your order!'
                ContentProps={{ sx: { fontSize: '22px', fontWeight: 700 } }}
            />
        </PageLayout>
    );
};

export default CartPage;

const ProductsTable = ({ products }: { products: CartProduct[] }) => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '500px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Cart items</TableCell>
                        <TableCell align='center'>Price</TableCell>
                        <TableCell align='center'>Quantity</TableCell>
                        <TableCell align='center'>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((item) => (
                        <TableRow
                            key={item.cartItemId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                {item.product.title}
                            </TableCell>
                            <TableCell align='center'>€{item.product.price}</TableCell>
                            <TableCell align='center'>{item.quantity}</TableCell>
                            <TableCell align='center'>
                                €{item.quantity * item.product.price}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const PaymentForm = ({ onSubmit, products }: { onSubmit: () => void; products: CartProduct[] }) => {
    return (
        <Formik
            initialValues={{ cardNumber: '', date: '', cvc: '', name: '', coupon: '' }}
            onSubmit={(_, actions) => {
                actions.setTouched({
                    cardNumber: true,
                    date: true,
                    cvc: true,
                    name: true,
                    coupon: true,
                });

                onSubmit();
                actions.resetForm();
            }}
            validationSchema={paymentValidationSchema}
        >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
                <Box
                    component='form'
                    display='flex'
                    flexDirection='column'
                    height='100%'
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                >
                    <Typography variant='h4' fontWeight={700} textAlign='center' gutterBottom>
                        Payment Form
                    </Typography>
                    <Stack flex='1 1 auto' display='flex' gap={2} flexDirection='column'>
                        <Input
                            name='cardNumber'
                            label='Credit card number'
                            value={values.cardNumber}
                            onChange={handleChange}
                            error={touched.cardNumber && Boolean(errors.cardNumber)}
                            helperText={touched.cardNumber && errors.cardNumber}
                        />
                        <Stack direction='row' gap={2}>
                            <Input
                                name='date'
                                label='Expire Date'
                                value={values.date}
                                onChange={handleChange}
                                error={touched.date && Boolean(errors.date)}
                                helperText={touched.date && errors.date}
                            />
                            <Input
                                name='cvc'
                                label='CVC code'
                                value={values.cvc}
                                onChange={handleChange}
                                error={touched.cvc && Boolean(errors.cvc)}
                                helperText={touched.cvc && errors.cvc}
                            />
                        </Stack>
                        <Input
                            name='name'
                            label='Name on the card'
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                        <Input
                            label='Coupon'
                            name='coupon'
                            value={values.coupon}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Stack direction='column' gap={1}>
                        <Divider sx={{ borderWidth: 2, color: '#000' }} />
                        <Stack direction='row' justifyContent='space-between'>
                            <Typography variant='h6' fontWeight={700}>
                                Total
                            </Typography>
                            <Typography variant='h6' fontWeight={700}>
                                €{getTotalPrice(products)}
                            </Typography>
                        </Stack>
                        <Button type='submit' variant='contained' sx={{ mt: 1 }}>
                            Pay
                        </Button>
                    </Stack>
                </Box>
            )}
        </Formik>
    );
};
