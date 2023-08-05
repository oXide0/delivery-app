import { useGetOrdersQuery } from '../services/orderApi';
import GoodsCard from '../components/GoodsCard/GoodsCard';
import NotFoundText from '../components/NotFoundText/NotFoundText';
import Typography from '@mui/joy/Typography';
import BarLoader from '../components/BarLoader/BarLoader';

const OrdersPage = () => {
	const { data: orders, error, isSuccess } = useGetOrdersQuery();

	if (!isSuccess) {
		return <BarLoader />;
	}
	if (error || orders.length === 0) {
		return <NotFoundText style={{ paddingTop: '40px' }}>Orders not found!</NotFoundText>;
	}

	return (
		<div className='wrapper'>
			{orders.map((item, index) => {
				return (
					<div key={item.id} style={{ paddingTop: '40px' }}>
						<Typography level='h4'>Order {index + 1}</Typography>
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
