import { memo, useState } from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { StyledForm } from './styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TypeCredentials } from '../../types/types';

interface FormProps {
	onSubmit: (data: TypeCredentials) => void;
	handleError: (userData: TypeCredentials) => string;
}

const Form = memo(({ onSubmit, handleError }: FormProps) => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<TypeCredentials>({ mode: 'onChange' });

	const onClickHandler: SubmitHandler<TypeCredentials> = (data) => {
		const error = handleError(data);
		if (!error) {
			setErrorMessage('');
			onSubmit(data);
			reset();
		} else {
			setErrorMessage(error);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(onClickHandler)}>
			<p style={{ color: 'red' }}>{errorMessage}</p>
			<FormControl>
				<FormLabel>Name</FormLabel>
				<Input
					error={errors.username && true}
					placeholder='Your name'
					{...register('username', {
						required: true,
						pattern: {
							value: /^[A-Za-z]+$/i,
							message: '*Please enter a valid name',
						},
					})}
				/>
				{errors.username ? (
					<FormHelperText sx={{ color: 'red' }}>{errors.username.message}</FormHelperText>
				) : (
					<FormHelperText>Your name must be unique</FormHelperText>
				)}
			</FormControl>
			<FormControl>
				<FormLabel>Password</FormLabel>
				<Input
					error={errors.password && true}
					placeholder='Your password'
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
				{errors.password ? (
					<FormHelperText sx={{ color: 'red' }}>{errors.password.message}</FormHelperText>
				) : (
					<FormHelperText>The password must contain at least 6 characters</FormHelperText>
				)}
			</FormControl>
			<Button type='submit' disabled={!isValid}>
				Submit
			</Button>
		</StyledForm>
	);
});

export default Form;
