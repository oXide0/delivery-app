import {
    Box,
    Button,
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
import { motion as m } from 'framer-motion';
import Input from '../components/Input';

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

export default function BasicTable() {
    return (
        <Box
            sx={{ width: '100%', p: 5 }}
            component={m.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Typography variant='h3' fontWeight={700}>
                Cart
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 5, maxHeight: '420px' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Cart items</TableCell>
                            <TableCell align='right'>Price</TableCell>
                            <TableCell align='right'>Quantity</TableCell>
                            <TableCell align='right'>Subtotal</TableCell>
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
                                <TableCell align='right'>€{row.calories}</TableCell>
                                <TableCell align='right'>
                                    <TextField
                                        type='number'
                                        sx={{ maxWidth: 65 }}
                                        autoComplete='off'
                                    />
                                </TableCell>
                                <TableCell align='right'>€{row.carbs}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack direction='row' justifyContent='flex-end' gap={3} pt={5}>
                <Input label='Coupon' name='coupon' type='text' />
                <Button variant='contained' sx={{ px: 5 }}>
                    Submit
                </Button>
            </Stack>
        </Box>
    );
}
