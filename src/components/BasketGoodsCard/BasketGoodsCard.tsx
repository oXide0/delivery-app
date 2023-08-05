import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import { useRemoveGoodsMutation, useUpdateGoodsMutation } from '../../services/cartApi';
import { IProduct } from '../../types/types';
import { StyledCard } from './styles';

interface BasketGoodsCardProps {
	goods: IProduct;
}

const BasketGoodsCard = ({ goods }: BasketGoodsCardProps) => {
	const [removeGoods] = useRemoveGoodsMutation();
	const [updateGoods] = useUpdateGoodsMutation();

	const handleDelete = () => {
		removeGoods(goods);
	};

	const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateGoods({ ...goods, quantity: parseInt(e.target.value) });
	};

	return (
		<StyledCard variant='outlined'>
			<div>
				<Typography level='title-lg'>{goods.title}</Typography>
			</div>
			<AspectRatio minHeight='120px' maxHeight='200px'>
				<img src={goods.img} srcSet={`${goods.img}&dpr=2 2x`} loading='lazy' alt={goods.title} />
			</AspectRatio>
			<CardContent orientation='horizontal' sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<Typography level='body-md'>Total price:</Typography>
					<Typography fontSize='lg' fontWeight='lg'>
						{goods.price}€
					</Typography>
				</div>
				<div style={{ display: 'flex', gap: '20px' }}>
					<Input
						type='number'
						sx={{ maxWidth: '100px', fontSize: '20px' }}
						value={goods.quantity}
						onChange={onChangeAmount}
						slotProps={{ input: { min: 1, max: 50 } }}
					/>
					<Button onClick={handleDelete}>Delete</Button>
				</div>
			</CardContent>
		</StyledCard>
	);
};

export default BasketGoodsCard;
