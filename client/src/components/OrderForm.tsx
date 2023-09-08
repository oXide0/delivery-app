import { memo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IProduct, IUserData } from '../types';
import { getTotalPrice, getCouponDiscount } from '../utils/coupons';

interface OrderFormProps {
	order: IProduct[];
	onSubmit: (data: IUserData) => void;
}

const OrderForm = memo(({ order, onSubmit }: OrderFormProps) => {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUserData>({ mode: 'onChange' });

	const onClickHandler: SubmitHandler<IUserData> = (data) => {
		onSubmit(data);
		reset();
	};

	return (
		<Box display='flex' flexDirection='column' gap='10px' component='form' onSubmit={handleSubmit(onClickHandler)}>
			<TextField
				label={errors.name ? errors.name.message : 'Your Name'}
				{...register('name', {
					required: true,
					pattern: {
						value: /^[a-zA-Z]+$/i,
						message: '*Enter a valid name',
					},
				})}
				error={!!errors.name}
			/>
			<TextField
				label={errors.email ? errors.email.message : 'Your Email'}
				type='email'
				{...register('email', {
					required: true,
					pattern: {
						value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: '*Enter a valid email',
					},
				})}
				error={!!errors.email}
			/>
			<TextField
				label={errors.phone ? errors.phone.message : 'Your Phone'}
				{...register('phone', {
					required: true,
					pattern: { value: /^[0-9/+]+$/i, message: '*Enter a valid number' },
				})}
				error={!!errors.phone}
			/>
			<TextField label='Your Address' {...register('address', { required: true })} error={!!errors.address} />
			<TextField label='Your Coupon' type='password' {...register('coupon')} />
			<Typography variant='h6'>
				Coupon: -{getCouponDiscount(watch('coupon')) ? `${getCouponDiscount(watch('coupon'))}` : '0'}€
			</Typography>
			<Typography variant='h6'>Total Price: {getTotalPrice(order, watch('coupon'))}€</Typography>
			<Button type='submit' variant='contained' sx={{ marginTop: '10px' }}>
				Submit Order
			</Button>
		</Box>
	);
});

export default OrderForm;
