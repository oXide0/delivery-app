import { memo } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CouponCardProps {
	code: string;
}

const CouponCard = memo(({ code }: CouponCardProps) => {
	return (
		<Card sx={{ width: 345 }}>
			<CardMedia
				sx={{ height: 140 }}
				image='https://lh3.googleusercontent.com/J8e1Ce0PoB492oPNo78gxM8D5DNXEGZBvP22Igv3PQQzNjWY1G4tUlpG3AGXMdC04te2Vt2Noyw7LDQxp9yCDtkN5w=w640-h400-e365-rj-sc0x00ffffff'
				title='coupon'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					Coupon {code.slice(code.length - 1, code.length)}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Typography variant='inherit' fontSize='md'>
					Coupon code:
				</Typography>
				<Button
					variant='contained'
					onClick={() => {
						navigator.clipboard.writeText(code);
					}}
				>
					Copy
				</Button>
			</CardActions>
		</Card>
	);
});

export default CouponCard;
