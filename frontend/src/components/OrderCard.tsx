import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface OrderCardProps {
    date: Date;
    totalPrice: number;
}

const OrderCard = ({ date, totalPrice }: OrderCardProps) => {
    return (
        <Card sx={{ minWidth: 345, borderRadius: 4 }}>
            <CardContent
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Typography variant='h5' component='div'>
                    {date.toLocaleDateString()}
                </Typography>
                <Typography variant='h5'>€{totalPrice}</Typography>
            </CardContent>
        </Card>
    );
};

export default OrderCard;
