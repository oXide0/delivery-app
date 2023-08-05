import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { StyledImg, StyledTitle, StyledSwiperSlide, StyledBlock } from './styles';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
	return (
		<Swiper
			modules={[Autoplay, Pagination, A11y]}
			slidesPerView={1}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			loop
			pagination={{ clickable: true }}
			style={{ height: 'calc(100vh - 70px)' }}
		>
			<StyledSwiperSlide style={{ background: 'linear-gradient(0deg, #cce3f0 0%, #4caac6 100%)' }}>
				<StyledBlock>
					<StyledTitle>Our new Burger!</StyledTitle>
					<Link to='/shop'>
						<Button size='lg' color='neutral'>
							Order food
						</Button>
					</Link>
				</StyledBlock>
				<StyledImg src='/hamburger.jpg' alt='hamburger' />
			</StyledSwiperSlide>
			<StyledSwiperSlide style={{ background: 'linear-gradient(0deg, #fff 0%, #FED35D 100%)' }}>
				<StyledBlock>
					<StyledTitle>Try these incredibly tasty potatoes.</StyledTitle>
					<Link to='/shop'>
						<Button size='lg' color='neutral'>
							Order food
						</Button>
					</Link>
				</StyledBlock>
				<StyledImg src='/fries.jpg' alt='fries' />
			</StyledSwiperSlide>
			<StyledSwiperSlide style={{ background: 'linear-gradient(0deg, #fff 0%, #D39D77 100%)' }}>
				<StyledBlock>
					<StyledTitle>Did you taste this shawarma?</StyledTitle>
					<Link to='/shop'>
						<Button size='lg' color='neutral'>
							Order food
						</Button>
					</Link>
				</StyledBlock>
				<StyledImg src='/shaurma.jpg' alt='shaurma' />
			</StyledSwiperSlide>
		</Swiper>
	);
};

export default Carousel;
