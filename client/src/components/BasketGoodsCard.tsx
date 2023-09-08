import { memo, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicSelect from './BasicSelect';
import { IProduct } from '../types';
import { useRemoveGoodsMutation, useUpdateGoodsMutation } from '../services/cartApi';

interface BasketGoodsCardProps {
	goods: IProduct;
}

const BasketGoodsCard = memo(({ goods }: BasketGoodsCardProps) => {
	const [quantity, setQuantity] = useState<string>('1');
	const [removeGoods] = useRemoveGoodsMutation();
	const [updateGoods] = useUpdateGoodsMutation();

	const handleDelete = () => {
		removeGoods(goods);
	};

	const onChangeAmount = (value: number) => {
		updateGoods({ ...goods, quantity: value });
	};

	useEffect(() => {
		setQuantity(goods.quantity.toString());
	}, []);

	return (
		<Card sx={{ backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
			<div style={{ display: 'flex', padding: '20px', alignItems: 'flex-start' }}>
				<CardMedia component='img' sx={{ width: 250 }} image={goods.img} alt={goods.title} />
				<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
					<CardContent
						sx={{
							flex: '1 0 auto',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Typography component='p' variant='h6' maxWidth='100px'>
							{goods.title}
						</Typography>
						<Typography variant='h6' component='div'>
							Each: <span style={{ fontWeight: ' bold' }}>{goods.price}€</span>
						</Typography>
						<BasicSelect value={quantity} setValue={setQuantity} changeAmount={onChangeAmount} />
						<Typography variant='h6' component='div'>
							Total: <span style={{ fontWeight: ' bold' }}>{goods.price * goods.quantity}€</span>
						</Typography>
					</CardContent>
				</Box>
			</div>
			<CardActions sx={{ width: '100%' }}>
				<Button variant='outlined' onClick={handleDelete} sx={{ width: '100%' }}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
});

export default BasketGoodsCard;
