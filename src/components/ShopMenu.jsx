import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import GoodsCard from './GoodsCard';
import { useGetShopsQuery } from '../services/shopApi';
import CircularProgress from '@mui/joy/CircularProgress';
import MenuPanel from './MenuPanel';
import NotFound from './NotFound';
import { selectDisabled, selectActiveShop, setActiveShop } from '../features/shop/shopSlice';
import { useSelector, useDispatch } from 'react-redux';
function ShopMenu() {
	const { data: shops, error, isLoading } = useGetShopsQuery();
	const isDisabled = useSelector(selectDisabled);
	const activeShop = useSelector(selectActiveShop);
	const dispatch = useDispatch();

	if (isLoading) {
		return <CircularProgress sx={{ position: 'absolute', left: '49%', top: '49%' }} />;
	}
	if (error) {
		return <NotFound title='stores' />;
	}
	const mcdonalds = shops[0];
	const kfc = shops[1];
	const burgerking = shops[2];
	return (
		<Tabs orientation='vertical' value={activeShop} onChange={(event, value) => dispatch(setActiveShop(value))}>
			<TabList sx={{ height: 'calc(100vh - 180px)' }}>
				{shops.map((shop, index) => (
					<Tab
						key={shop.id}
						className={isDisabled && index !== activeShop ? 'tab active' : 'tab'}
						disabled={isDisabled && index !== activeShop ? true : false}
					>
						{shop.name}
					</Tab>
				))}
			</TabList>
			<MenuPanel value={0}>
				<div className='row'>
					{mcdonalds.goods.map((item) => (
						<GoodsCard key={item.id} goods={item} />
					))}
				</div>
			</MenuPanel>
			<MenuPanel value={1}>
				<div className='row'>
					{kfc.goods.map((item) => (
						<GoodsCard key={item.id} goods={item} />
					))}
				</div>
			</MenuPanel>
			<MenuPanel value={2}>
				<div className='row'>
					{burgerking.goods.map((item) => (
						<GoodsCard key={item.id} goods={item} />
					))}
				</div>
			</MenuPanel>
		</Tabs>
	);
}

export default ShopMenu;
