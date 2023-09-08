import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BasicSelectProps {
	value: string;
	setValue: (value: string) => void;
	changeAmount: (value: number) => void;
}

const BasicSelect = ({ changeAmount, value, setValue }: BasicSelectProps) => {
	const handleChange = (event: SelectChangeEvent) => {
		const selectedValue = Number(event.target.value);
		setValue(selectedValue.toString());
		changeAmount(selectedValue);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel>Quantity</InputLabel>
				<Select value={value || ''} label='Quantity' onChange={handleChange}>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
						<MenuItem key={item} value={item.toString()}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default BasicSelect;
