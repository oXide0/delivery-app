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
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </Box>
    );
};

export default PageLayout;
