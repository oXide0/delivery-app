import { Box, BoxProps } from '@mui/material';

interface ContentLayoutProps extends BoxProps {
    children: React.ReactNode;
}

const ContentLayout = ({ children, ...props }: ContentLayoutProps) => {
    return (
        <Box sx={{ width: '100%', p: 5 }} {...props}>
            {children}
        </Box>
    );
};

export default ContentLayout;
