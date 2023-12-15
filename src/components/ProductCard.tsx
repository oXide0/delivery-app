import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Product } from '../types';

interface ProductCardProps extends Product {
    type?: 'order' | 'product';
    id: number;
    title: string;
    img: string;
    price: number;
}

const ProductCard = ({ title, price, img, type }: ProductCardProps) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
            <CardMedia sx={{ height: 140 }} image={img} title={title} />
            <CardContent
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Typography variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='h6'>€{price}</Typography>
            </CardContent>
            {type === 'product' && (
                <CardActions>
                    <Button size='small' variant='contained'>
                        Add to cart
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductCard;
