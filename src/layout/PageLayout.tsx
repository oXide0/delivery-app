import { Box, BoxProps } from '@mui/material';
import { motion as m } from 'framer-motion';

interface PageLayoutProps extends BoxProps {
    children: React.ReactNode;
    noPadding?: boolean;
}

const PageLayout = ({ children, noPadding = false, ...props }: PageLayoutProps) => {
    return (
        <Box
            sx={{ width: '100%', p: noPadding ? 0 : 5 }}
            component={m.div}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default PageLayout;
