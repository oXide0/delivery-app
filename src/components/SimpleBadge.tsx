import { memo } from 'react';
import Badge from '@mui/material/Badge';

interface SimpleBadgeProps {
	icon: JSX.Element;
	value: number;
}

const SimpleBadge = memo(({ icon, value }: SimpleBadgeProps) => {
	return (
		<Badge badgeContent={value} color='primary'>
			{icon}
		</Badge>
	);
});

export default SimpleBadge;
