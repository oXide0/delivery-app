import { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const BarLoader = memo(() => {
	return <CircularProgress sx={{ position: 'absolute', top: '40%', left: '48%' }} />;
});

export default BarLoader;
