import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../components/TabPanel';
import Box from '@mui/material/Box';
import GoodsCard from '../components/GoodsCard';
import { useGetShopsQuery } from '../services/shopApi';
import BarLoader from '../components/BarLoader';
import { useState } from 'react';
import { a11yProps } from '../utils/tabs';

const ShopPage = () => {
	const { data: shops, isSuccess } = useGetShopsQuery();
	const [value, setValue] = useState(0);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	if (!isSuccess) return <BarLoader />;

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: 'background.paper',
				display: 'flex',
				height: 'calc(100vh - 72px)',
			}}
			className='wrapper'
		>
			<Tabs
				orientation='vertical'
				value={value}
				onChange={handleChange}
				sx={{ borderRight: 1, borderColor: 'divider', width: '200px', height: '100%' }}
			>
				{shops.map((shop) => (
					<Tab key={shop.id} label={shop.name} {...a11yProps(0)} sx={{ fontWeight: '600' }} />
				))}
			</Tabs>
			<TabPanel value={value} index={0}>
				{shops[0].goods.map((item) => (
					<GoodsCard key={item.id} goods={item} />
				))}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{shops[1].goods.map((item) => (
					<GoodsCard key={item.id} goods={item} />
				))}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{shops[2].goods.map((item) => (
					<GoodsCard key={item.id} goods={item} />
				))}
			</TabPanel>
			<TabPanel value={value} index={3}>
				{shops[3].goods.map((item) => (
					<GoodsCard key={item.id} goods={item} />
				))}
			</TabPanel>
		</Box>
	);
};

export default ShopPage;
