import { memo, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TypeCredentials } from '../types';

interface FormProps {
	onSubmit: (data: TypeCredentials) => void;
	handleError: (userData: TypeCredentials) => string;
}

const Form = memo(({ onSubmit, handleError }: FormProps) => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<TypeCredentials>({ mode: 'onChange' });

	const onClickHandler: SubmitHandler<TypeCredentials> = (data) => {
		const error = handleError(data);
		if (!error) {
			setErrorMessage('');
			onSubmit(data);
		} else {
			setErrorMessage(error);
		}
	};

	return (
		<Box
			component='form'
			onSubmit={handleSubmit(onClickHandler)}
			display='flex'
			flexDirection='column'
			gap='20px'
			width='600px'
			margin='0 auto'
		>
			<Typography style={{ color: 'red' }}>{errorMessage}</Typography>
			<TextField
				label={errors.username ? errors.username.message : 'Your name'}
				error={errors.username && true}
				{...register('username', {
					required: true,
					pattern: {
						value: /^[A-Za-z]+$/i,
						message: '*Please enter a valid name',
					},
				})}
			/>
			<TextField
				error={errors.password && true}
				label={errors.password ? errors.password.message : 'Password'}
				{...register('password', {
					required: true,
					pattern: {
						value: /^\S*$/,
						message: '*Password cannot contain spaces',
					},
					minLength: {
						value: 6,
						message: '*Password must contain at least 6 characters',
					},
				})}
			/>
			<Button type='submit' variant='contained' disabled={!isValid}>
				Submit
			</Button>
		</Box>
	);
});

export default Form;
