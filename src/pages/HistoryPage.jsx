import { useGetOrdersQuery } from '../services/orderApi';
import GoodsCard from '../components/GoodsCard';
import CircularProgress from '@mui/joy/CircularProgress';
import NotFound from '../components/NotFound';
import Typography from '@mui/joy/Typography';

function HistoryPage() {
	const { data: orders, error, isLoading } = useGetOrdersQuery();

	if (isLoading) {
		return <CircularProgress sx={{ position: 'absolute', left: '49%', top: '49%' }} />;
	}
	if (error || orders.length === 0) {
		return <NotFound title='orders' />;
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
}

export default HistoryPage;
