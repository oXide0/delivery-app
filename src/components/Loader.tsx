import { CircularProgress } from '@mui/material';

const Loader = () => {
    return <CircularProgress sx={{ position: 'absolute', top: '48%', left: '48%' }} />;
};

export default Loader;
