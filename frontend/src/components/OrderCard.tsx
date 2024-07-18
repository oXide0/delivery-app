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
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                }}
            >
                <Typography variant='h5' component='div'>
                    {formatDate(date)}
                </Typography>
                <span>---</span>
                <Typography variant='h5'>€{totalPrice}</Typography>
            </CardContent>
        </Card>
    );
};

export default OrderCard;

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};
