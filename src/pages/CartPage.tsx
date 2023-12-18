import {
    Box,
    Button,
    Divider,
    Grid,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import { Formik } from 'formik';
import Input from '../components/Input';
import PageLayout from '../layout/PageLayout';
import { useCreateOrderMutation } from '../services/orderApi';

interface OrderFormValues {
    userId: number;
    totalPrice: number;
    status: string;
    date: string;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const CartPage = () => {
    const [createOrder] = useCreateOrderMutation();

    const handleSubmit = async () => {
        await createOrder({
            status: 'new',
            totalPrice: 10,
            userId: 1,
            date: new Date().toISOString(),
        });
    };

    return (
        <PageLayout>
            <Typography variant='h3' fontWeight={700}>
                Cart
            </Typography>
            <Grid container pt={5} columnSpacing={4}>
                <Grid item xs={12} sm={9}>
                    <ProductsTable />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <PaymentForm />
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default CartPage;

const ProductsTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '500px' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Cart items</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Subtotal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope='row'>
                                {row.name}
                            </TableCell>
                            <TableCell>€{row.calories}</TableCell>
                            <TableCell>
                                <TextField type='number' sx={{ maxWidth: 65 }} autoComplete='off' />
                            </TableCell>
                            <TableCell>€{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const PaymentForm = () => {
    return (
        <Formik
            initialValues={{ cardNumber: '', date: '', cvc: '', name: '', coupon: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ values, handleChange, handleSubmit }) => (
                <>
                    <Box
                        component='form'
                        display='flex'
                        flexDirection='column'
                        height='100%'
                        onSubmit={handleSubmit}
                    >
                        <Typography variant='h4' fontWeight={700} textAlign='center' gutterBottom>
                            Payment Form
                        </Typography>
                        <Stack flex='1 1 auto' display='flex' gap={2} pt={3} flexDirection='column'>
                            <Input
                                name='cardNumber'
                                label='Credit card number'
                                value={values.cardNumber}
                                onChange={handleChange}
                            />
                            <Stack direction='row' gap={2}>
                                <Input
                                    name='date'
                                    label='Expire Date'
                                    value={values.date}
                                    onChange={handleChange}
                                />
                                <Input
                                    name='cvc'
                                    label='CVC code'
                                    value={values.cvc}
                                    onChange={handleChange}
                                />
                            </Stack>
                            <Input
                                name='name'
                                label='Name on the card'
                                value={values.name}
                                onChange={handleChange}
                            />
                            <Input
                                label='Coupon'
                                name='coupon'
                                value={values.coupon}
                                onChange={handleChange}
                            />
                            <Divider sx={{ borderWidth: 2, mt: 1, color: '#000' }} />
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography variant='h6' fontWeight={700}>
                                    Total
                                </Typography>
                                <Typography variant='h6' fontWeight={700}>
                                    Rp 100.000
                                </Typography>
                            </Stack>
                        </Stack>

                        <Button type='submit' variant='contained' sx={{ py: 1.5 }}>
                            Pay
                        </Button>
                    </Box>
                </>
            )}
        </Formik>
    );
};
