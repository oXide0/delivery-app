import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasketGoodsCard from '../components/BasketGoodsCard';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAddOrderMutation } from '../services/orderApi';
import { IUserData } from '../types';
import { useGetCartQuery, useRemoveGoodsMutation } from '../services/cartApi';
import BarLoader from '../components/BarLoader';
import OrderForm from '../components/OrderForm';

const CartPage = () => {
	const navigate = useNavigate();
	const [addOrder] = useAddOrderMutation();
	const [removeGoods] = useRemoveGoodsMutation();
	const { data, error, isSuccess } = useGetCartQuery();

	const onSubmit = (userData: IUserData) => {
		if (data) {
			addOrder({ id: nanoid(), food: data, user: userData });
			data.forEach((order) => {
				removeGoods(order);
			});
		}
		navigate('/success');
	};

	if (!isSuccess) return <BarLoader />;
	if (error)
		return (
			<Box className='wrapper'>
				<Typography variant='h3' fontWeight='bold' textAlign='center' paddingTop='40px'>
					Something went wrong
				</Typography>
			</Box>
		);

	return (
		<Box className='wrapper' paddingTop='20px'>
			<Typography variant='h3' fontWeight='bold' textAlign='center'>
				My cart
			</Typography>
			<Box display='flex' justifyContent='space-between' alignItems='flex-start'>
				<Box paddingTop='40px' width='66%' display='flex' flexDirection='column-reverse' gap='20px'>
					{!data.length ? (
						<Typography variant='h4' fontWeight='bold' textAlign='center' paddingTop='40px'>
							Orders not found!
						</Typography>
					) : (
						data.map((item) => <BasketGoodsCard key={item.id} goods={item} />)
					)}
				</Box>
				<Box paddingTop='40px' width='30%'>
					<OrderForm order={data} onSubmit={onSubmit} />
				</Box>
			</Box>
		</Box>
	);
};

export default CartPage;
