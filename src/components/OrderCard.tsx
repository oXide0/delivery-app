import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { parseDate } from '../utils';

interface OrderCardProps {
    date: string;
    totalPrice: number;
}

const OrderCard = ({ date, totalPrice }: OrderCardProps) => {
    const parsedDate = parseDate(date);

    return (
        <Card sx={{ minWidth: 345, borderRadius: 4 }}>
            <CardContent
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Typography variant='h5' component='div'>
                    {parsedDate.toLocaleDateString()}
                </Typography>
                <Typography variant='h5'>€{totalPrice}</Typography>
            </CardContent>
        </Card>
    );
};

export default OrderCard;
