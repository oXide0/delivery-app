import CloseIcon from '@mui/icons-material/Close';
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { Product } from '../types';

interface OrderProductCardProps extends Omit<Product, 'category' | 'id'> {
    quantity: number;
    onRemoveFromCart: () => void;
    onUpdateProductQuantity: (quantity: number) => void;
}

const OrderProductCard = (props: OrderProductCardProps) => {
    return (
        <Card
            sx={{ display: 'flex', p: 1, background: (theme) => theme.palette.background.default }}
        >
            <CardMedia
                component='img'
                sx={{ width: 140, height: 140, borderRadius: '10px' }}
                image={props.imgUrl}
                alt='Live from space album cover'
            />
            <CardContent>
                <Typography variant='h6'>{props.title}</Typography>
                <Typography variant='h6' component='div'>
                    €{props.price}
                </Typography>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <TextField
                        type='number'
                        sx={{ maxWidth: 100 }}
                        value={props.quantity}
                        onChange={(e) => props.onUpdateProductQuantity(parseInt(e.target.value))}
                    />
                    <IconButton size='large' onClick={props.onRemoveFromCart}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default OrderProductCard;
