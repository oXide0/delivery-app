export const getTabPath = (tab: number) => {
	switch (tab) {
		case 0:
			return '/';
		case 1:
			return '/shop';
		case 2:
			return '/history';
		case 3:
			return '/coupons';
		case 4:
			return '/cart';
		default:
			return '/';
	}
};

export const a11yProps = (index: number) => {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
};
