import BarLoader from '../components/BarLoader/BarLoader';
import NotFoundText from '../components/NotFoundText/NotFoundText';
import Map from '../components/Map/Map';
import { StyledContainer } from '../utils/styled-components';
import OrderForm from '../components/OrderForm/OrderForm';
import { useGetCartQuery, useRemoveGoodsMutation } from '../services/cartApi';
import BasketGoodsCard from '../components/BasketGoodsCard/BasketGoodsCard';
import { setDisbaled } from '../features/shopSlice';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useAddOrderMutation } from '../services/orderApi';
import { IUserData } from '../types/types';
import { StyledBlock } from '../utils/styled-components';
import Typography from '@mui/joy/Typography';
import { getTotalPrice } from '../utils/totalPrice';
import { useState } from 'react';

const CartPage = () => {
	const [coupon, setCoupon] = useState('');
	const dispatch = useAppDispatch();
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
		dispatch(setDisbaled(false));
		navigate('/success');
	};

	if (!isSuccess) return <BarLoader />;
	if (error) return <NotFoundText>Something went wrong</NotFoundText>;

	return (
		<StyledContainer>
			<div>
				<Map />
				<OrderForm setCoupon={setCoupon} onSubmit={onSubmit} />
			</div>
			<div>
				{data.length === 0 && <NotFoundText>Your cart is empty</NotFoundText>}
				<StyledBlock>
					{data.map((item) => {
						return <BasketGoodsCard key={item.id} goods={item} />;
					})}
				</StyledBlock>
				{data.length > 0 && (
					<Typography level='h2' sx={{ padding: '40px 20px 20px 20px`' }}>
						Total Price: {getTotalPrice(data, coupon)}€
					</Typography>
				)}
			</div>
		</StyledContainer>
	);
};

export default CartPage;
