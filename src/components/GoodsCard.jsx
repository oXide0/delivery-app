import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useAddToCartMutation, useGetCartQuery, useUpdateGoodsMutation } from '../services/cartApi';
import { setDisbaled } from '../features/shop/shopSlice';
import { useDispatch } from 'react-redux';

function GoodsCard({ goods, type = '' }) {
	const [addToCart] = useAddToCartMutation();
	const [updateGoods] = useUpdateGoodsMutation();
	const dispatch = useDispatch();
	const { data } = useGetCartQuery();

	const handleClick = async () => {
		dispatch(setDisbaled(true));
		const isGoodsInCart = data.find((item) => item.id === goods.id);
		if (isGoodsInCart) {
			updateGoods({ ...goods, quantity: isGoodsInCart.quantity + 1 });
		} else {
			await addToCart({ ...goods, quantity: 1 });
		}
	};

	return (
		<Card variant='outlined' sx={{ width: 320 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography level='h2' fontSize='md' sx={{ mb: 0.5 }}>
					{goods.title}
				</Typography>
				{type === 'history' ? (
					<Typography level='h2' fontSize='md' sx={{ mb: 0.5 }}>
						Quantity: {goods.quantity}
					</Typography>
				) : (
					''
				)}
			</div>
			<AspectRatio minHeight='120px' maxHeight='200px'>
				<img src={goods.img} srcSet={`${goods.img}&dpr=2 2x`} loading='lazy' alt={goods.title} />
			</AspectRatio>
			<CardContent orientation='horizontal'>
				<div>
					<Typography level='body3'>Total price:</Typography>
					<Typography fontSize='lg' fontWeight='lg'>
						{goods.price}€
					</Typography>
				</div>
				{type === 'history' ? (
					''
				) : (
					<Button
						variant='solid'
						size='sm'
						color='neutral'
						sx={{ ml: 'auto', fontWeight: 600 }}
						onClick={handleClick}
					>
						Add to Cart
					</Button>
				)}
			</CardContent>
		</Card>
	);
}

export default GoodsCard;
