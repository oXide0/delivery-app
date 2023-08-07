import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useAddToCartMutation, useGetCartQuery, useUpdateGoodsMutation } from '../../services/cartApi';
import { setDisbaled } from '../../features/shopSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { IProduct } from '../../types/types';
import { StyledCardContent } from './styles';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type TypeCardType = 'history' | '';

interface IGoodsCardProps {
	goods: IProduct;
	type?: TypeCardType;
}

const GoodsCard = ({ goods, type = '' }: IGoodsCardProps) => {
	const navigate = useNavigate();
	const { isAuth } = useAuth();
	const [addToCart] = useAddToCartMutation();
	const [updateGoods] = useUpdateGoodsMutation();
	const dispatch = useAppDispatch();
	const { data } = useGetCartQuery();

	const handleClick = async () => {
		if (!isAuth) return navigate('/sign-up');
		dispatch(setDisbaled(true));
		if (data) {
			const isGoodsInCart = data.find((item: IProduct) => item.id === goods.id);
			if (isGoodsInCart && isGoodsInCart.quantity) {
				await updateGoods({ ...goods, quantity: isGoodsInCart.quantity + 1 });
			} else {
				await addToCart({ ...goods, quantity: 1 });
			}
		}
	};

	return (
		<Card variant='outlined' sx={{ width: 300 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography level='h1' fontSize='md' sx={{ mb: 0.5 }}>
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
			<StyledCardContent orientation='horizontal'>
				<div>
					<Typography level='title-sm'>Total price:</Typography>
					<Typography fontSize='lg' fontWeight='lg'>
						{goods.price}€
					</Typography>
				</div>
				{type === 'history' ? (
					''
				) : (
					<Button variant='solid' size='md' color='neutral' onClick={handleClick}>
						Add to Cart
					</Button>
				)}
			</StyledCardContent>
		</Card>
	);
};

export default GoodsCard;
