import { memo } from 'react';
import Box from '@mui/material/Box';

interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = memo((props: TabPanelProps) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box sx={{ p: 3, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>{children}</Box>}
		</div>
	);
});

export default TabPanel;
