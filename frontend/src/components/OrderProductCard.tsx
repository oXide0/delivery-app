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

interface OrderProductCardProps {
    img: string;
    price: number;
    title: string;
    quantity: number;
    onRemoveFromCart: () => void;
    onUpdateProductQuantity: (quantity: number) => void;
}

const OrderProductCard = ({
    img,
    price,
    title,
    quantity,
    onRemoveFromCart,
    onUpdateProductQuantity,
}: OrderProductCardProps) => {
    return (
        <Card
            sx={{ display: 'flex', p: 1, background: (theme) => theme.palette.background.default }}
        >
            <CardMedia
                component='img'
                sx={{ width: 140, height: 140, borderRadius: '10px' }}
                image={img}
                alt='Live from space album cover'
            />
            <CardContent>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='h6' component='div'>
                    €{price}
                </Typography>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <TextField
                        type='number'
                        sx={{ maxWidth: 100 }}
                        value={quantity}
                        onChange={(e) => onUpdateProductQuantity(parseInt(e.target.value))}
                    />
                    <IconButton size='large' onClick={onRemoveFromCart}>
                        <CloseIcon />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default OrderProductCard;
