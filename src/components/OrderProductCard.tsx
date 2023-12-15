import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    TextField,
    IconButton,
    Stack,
} from '@mui/material';
import BurgerImg from '../assets/burger.jfif';
import CloseIcon from '@mui/icons-material/Close';

const OrderProductCard = () => {
    return (
        <Card sx={{ display: 'flex', p: 1, width: '400px', bgcolor: 'white' }}>
            <CardMedia
                component='img'
                sx={{ width: 140, height: 140, borderRadius: '10px' }}
                image={BurgerImg}
                alt='Live from space album cover'
            />
            <CardContent>
                <Typography variant='h6'>Burger Mozza XL</Typography>
                <Typography variant='h6' component='div'>
                    €39
                </Typography>
                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <TextField type='number' sx={{ maxWidth: 100 }} />
                    <IconButton size='large'>
                        <CloseIcon sx={{ color: '#000' }} />
                    </IconButton>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default OrderProductCard;
