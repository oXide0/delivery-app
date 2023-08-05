import TabPanel from '@mui/joy/TabPanel';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import { setActiveShop, selectActiveShop, selectDisabled } from '../features/shopSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import GoodsCard from '../components/GoodsCard/GoodsCard';
import { useGetShopsQuery } from '../services/shopApi';
import { StyledTab, StyledTabRow } from '../utils/styled-components';
import BarLoader from '../components/BarLoader/BarLoader';

const ShopPage = () => {
	const { data: shops, isSuccess } = useGetShopsQuery();
	const activeShop = useAppSelector(selectActiveShop);
	const isDisabled = useAppSelector(selectDisabled);
	const dispatch = useAppDispatch();

	if (!isSuccess) return <BarLoader />;

	return (
		<div className='wrapper' style={{ paddingTop: '40px' }}>
			<Tabs
				orientation='vertical'
				value={activeShop}
				onChange={(_, value) => dispatch(setActiveShop(value as number))}
				sx={{ background: 'none' }}
			>
				<TabList sx={{ height: 'calc(100vh - 180px)' }}>
					{shops?.map((shop, index) => (
						<StyledTab key={shop.id} disabled={isDisabled && index !== activeShop ? true : false}>
							{shop.name}
						</StyledTab>
					))}
				</TabList>
				<TabPanel value={0}>
					<StyledTabRow>
						{shops[0].goods.map((item) => (
							<GoodsCard key={item.id} goods={item} />
						))}
					</StyledTabRow>
				</TabPanel>
				<TabPanel value={1}>
					<StyledTabRow>
						{shops[1].goods.map((item) => (
							<GoodsCard key={item.id} goods={item} />
						))}
					</StyledTabRow>
				</TabPanel>
				<TabPanel value={2}>
					<StyledTabRow>
						{shops[2].goods.map((item) => (
							<GoodsCard key={item.id} goods={item} />
						))}
					</StyledTabRow>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopPage;
