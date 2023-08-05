import { styled } from '@mui/material/styles';
import { SwiperSlide } from 'swiper/react';

const StyledSwiperSlide = styled(SwiperSlide)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40px;
`;

const StyledTitle = styled('h1')`
	font-size: 60px;
	font-weight: 700;
	color: #5a5a72;
`;

const StyledImg = styled('img')`
	width: 50%;
	height: 100%;
	object-fit: cover;
	border-radius: 30px;
`;

const StyledBlock = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 40px;
`;

export { StyledImg, StyledTitle, StyledSwiperSlide, StyledBlock };
