import TabPanel from '@mui/joy/TabPanel';
import { ReactNode } from 'react';

interface MenuPanelProps {
	value: number;
	children: ReactNode;
}

const MenuPanel = ({ value, children }: MenuPanelProps) => {
	return <TabPanel value={value}>{children}</TabPanel>;
};

export default MenuPanel;
