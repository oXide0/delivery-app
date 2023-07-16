import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { TypeCode } from '../types/types';

interface CouponCardProps {
	code: TypeCode;
}

const CouponCard = ({ code }: CouponCardProps) => {
	return (
		<Card variant='outlined' sx={{ width: 320 }}>
			<div>
				<Typography level='h2' fontSize='md' sx={{ mb: 0.5 }}>
					Coupon {code.slice(code.length - 1, code.length)}
				</Typography>
			</div>
			<AspectRatio minHeight='120px' maxHeight='200px'>
				<img
					src='https://lh3.googleusercontent.com/J8e1Ce0PoB492oPNo78gxM8D5DNXEGZBvP22Igv3PQQzNjWY1G4tUlpG3AGXMdC04te2Vt2Noyw7LDQxp9yCDtkN5w=w640-h400-e365-rj-sc0x00ffffff'
					srcSet='https://lh3.googleusercontent.com/J8e1Ce0PoB492oPNo78gxM8D5DNXEGZBvP22Igv3PQQzNjWY1G4tUlpG3AGXMdC04te2Vt2Noyw7LDQxp9yCDtkN5w=w640-h400-e365-rj-sc0x00ffffff&dpr=2 2x'
					loading='lazy'
					alt=''
				/>
			</AspectRatio>
			<CardContent orientation='horizontal'>
				<Button
					variant='solid'
					size='md'
					color='neutral'
					sx={{ ml: 'auto', fontWeight: 600 }}
					onClick={() => {
						navigator.clipboard.writeText(code);
					}}
				>
					Copy
				</Button>
			</CardContent>
		</Card>
	);
};

export default CouponCard;
