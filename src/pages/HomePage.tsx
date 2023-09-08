import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import SlideContent from '../components/SlideContent';

import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = () => {
	return (
		<Box display='flex' height='calc(100vh - 72px)' alignItems='center'>
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				slidesPerView={1}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				loop
				centeredSlides
				pagination={{ clickable: true }}
				className='wrapper'
			>
				<SwiperSlide>
					<SlideContent
						imgUrl='https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg'
						title='Our new Burgers!'
						buttonText='Check new burgers'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						imgUrl='https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'
						title='All kinds of pizzas are here!'
						buttonText='Check pizzas'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						imgUrl='https://www.thespruceeats.com/thmb/iHmC1x1UNWoq4GP4i_81-xajw5g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/popular-screwdriver-variations-759820-hero-01-6f67f02622a54bbb8aeabd7eb65bb3a0.jpg'
						title='Lemonade with a delicious light strawberry flavored swirl.'
						buttonText='Check drinks'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContent
						imgUrl='https://insanelygoodrecipes.com/wp-content/uploads/2021/05/Cherry-Cheesecake-with-Berry-Sauce.png'
						title='Have you tried this incredibly delicious dessert?'
						buttonText='Check desserts'
					/>
				</SwiperSlide>
			</Swiper>
		</Box>
	);
};

export default Carousel;
