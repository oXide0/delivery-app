import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface ProductCardProps {
    type?: 'order' | 'product';
    title: string;
    img: string;
    price: number;
    onAddToCart: () => void;
}

const ProductCard = ({ title, price, img, type = 'product', onAddToCart }: ProductCardProps) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
            {type === 'product' && <CardMedia sx={{ height: 140 }} image={img} title={title} />}
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
                    <Button size='small' variant='contained' onClick={onAddToCart}>
                        Add to cart
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductCard;
