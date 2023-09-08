import { useGetOrdersQuery } from '../services/orderApi';
import GoodsCard from '../components/GoodsCard';
import Typography from '@mui/material/Typography';
import BarLoader from '../components/BarLoader';
import Box from '@mui/material/Box';

const OrdersPage = () => {
	const { data: orders, error, isSuccess } = useGetOrdersQuery();

	if (!isSuccess) {
		return <BarLoader />;
	}
	if (error || !orders.length) {
		return (
			<Box className='wrapper'>
				<Typography variant='h3' fontWeight='bold' textAlign='center' paddingTop='40px'>
					Orders not found!
				</Typography>
			</Box>
		);
	}

	return (
		<div className='wrapper'>
			{orders.map((item, index) => {
				return (
					<div key={item.id} style={{ paddingTop: '40px' }}>
						<Typography variant='h5'>Order {index + 1}</Typography>
						<div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', paddingTop: '10px' }}>
							{item.food.map((f) => (
								<GoodsCard key={f.id} goods={f} type='history' />
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default OrdersPage;
