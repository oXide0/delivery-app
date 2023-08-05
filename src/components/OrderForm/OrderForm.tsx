import { StyledForm } from './styles';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUserData } from '../../types/types';
import { useEffect } from 'react';

interface OrderFormProps {
	setCoupon: (coupon: string) => void;
	onSubmit: (data: IUserData) => void;
}

const OrderForm = ({ setCoupon, onSubmit }: OrderFormProps) => {
	const {
		register,
		watch,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IUserData>({ mode: 'onBlur' });

	useEffect(() => {
		const coupon = watch('coupon');
		if (coupon) {
			setCoupon(coupon);
		} else {
			setCoupon('');
		}
	}, [watch('coupon')]);

	const onClickHandler: SubmitHandler<IUserData> = (data) => {
		onSubmit(data);
		reset();
	};

	return (
		<StyledForm onSubmit={handleSubmit(onClickHandler)}>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input
					placeholder='Your name'
					{...register('name', {
						required: true,
						pattern: {
							value: /^[a-zA-Z]+$/i,
							message: '*Enter a valid name',
						},
					})}
				/>
				<FormHelperText sx={{ color: 'red' }}>{errors.name && errors.name.message}</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Email</FormLabel>
				<Input
					placeholder='Your Email'
					type='email'
					{...register('email', {
						required: true,
						pattern: {
							value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: '*Enter a valid email',
						},
					})}
				/>
				<FormHelperText sx={{ color: 'red' }}>{errors.email && errors.email.message}</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Phone</FormLabel>
				<Input
					placeholder='Your Phone'
					{...register('phone', {
						required: true,
						pattern: { value: /^[0-9]+$/i, message: '*Enter a valid number' },
					})}
				/>
				<FormHelperText sx={{ color: 'red' }}>{errors.phone && errors.phone.message}</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Address</FormLabel>
				<Input placeholder='Your Address' {...register('address', { required: true })} />
				<FormHelperText sx={{ color: 'red' }}>{errors.address && errors.address.message}</FormHelperText>
			</FormControl>
			<FormControl>
				<FormLabel>Coupon</FormLabel>
				<Input placeholder='Your Coupon' type='password' {...register('coupon')} />
			</FormControl>
			<Button type='submit' sx={{ marginTop: '10px' }}>
				Submit Order
			</Button>
		</StyledForm>
	);
};

export default OrderForm;
