import TabPanel from '@mui/joy/TabPanel';

function MenuPanel({ value, children }) {
	return <TabPanel value={value}>{children}</TabPanel>;
}

export default MenuPanel;
