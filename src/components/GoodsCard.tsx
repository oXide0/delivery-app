import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAddToCartMutation, useGetCartQuery, useUpdateGoodsMutation } from '../services/cartApi';
import { IGood } from '../types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type TypeCardType = 'history' | '';

interface IGoodsCardProps {
	goods: IGood;
	type?: TypeCardType;
}

const GoodsCard = ({ goods, type = '' }: IGoodsCardProps) => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	const [addToCart] = useAddToCartMutation();
	const [updateGoods] = useUpdateGoodsMutation();
	const { data } = useGetCartQuery();

	const handleClick = async () => {
		if (!isAuth) return navigate('/register');
		if (data) {
			const isGoodsInCart = data.find((item: IGood) => item.id === goods.id);
			if (isGoodsInCart && isGoodsInCart.quantity) {
				await updateGoods({ ...goods, quantity: isGoodsInCart.quantity + 1 });
			} else {
				await addToCart({ ...goods, quantity: 1 });
			}
		}
	};

	return (
		<Card sx={{ width: 310 }}>
			<CardMedia sx={{ height: 140 }} image={goods.img} title={goods.title} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{goods.title}
				</Typography>
				<Typography variant='inherit' fontWeight='bold'>
					Total Price: {goods.price}€
				</Typography>
			</CardContent>
			<CardActions>
				{type !== 'history' && (
					<Button variant='outlined' size='small' onClick={handleClick}>
						Add to Cart
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default GoodsCard;
