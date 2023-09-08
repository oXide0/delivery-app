import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../hooks/redux-hooks';
import { setActiveTab } from '../features/tabSlice';

interface SlideContentProps {
	imgUrl: string;
	title: string;
	buttonText: string;
}

const SlideContent = memo(({ imgUrl, title, buttonText }: SlideContentProps) => {
	const dispatch = useAppDispatch();

	const handleTabChange = () => {
		dispatch(setActiveTab(1));
	};

	return (
		<Box bgcolor='black' position='relative' borderRadius='10px'>
			<img
				src={imgUrl}
				alt='hamburgers'
				loading='lazy'
				style={{
					width: '100%',
					height: '600px',
					objectFit: 'cover',
					borderRadius: '10px',
					opacity: '0.7',
				}}
			/>
			<Box
				position='absolute'
				display='flex'
				flexDirection='column'
				alignItems='flex-start'
				gap='20px'
				bottom={100}
				left={20}
			>
				<p style={{ color: '#fff', fontSize: '45px', fontWeight: 'bold' }}>{title}</p>
				<Link to='/shop' onClick={handleTabChange}>
					<Button size='large' variant='contained'>
						{buttonText}
					</Button>
				</Link>
			</Box>
		</Box>
	);
});

export default SlideContent;
