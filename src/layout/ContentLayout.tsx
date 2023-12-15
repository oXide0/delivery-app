import { Box } from '@mui/material';

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
    return <Box sx={{ width: '100%', p: 5 }}>{children}</Box>;
};

export default ContentLayout;
