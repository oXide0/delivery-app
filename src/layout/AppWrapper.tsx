import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';
import { selectThemeMode } from '../features/themeSlice';
import { useAppSelector } from '../redux-hooks';
import { createTheme } from '../theme';

interface AppWrapperProps {
    children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
    const mode = useAppSelector(selectThemeMode);
    const theme = createTheme({ mode });

    return (
        <Router>
            <AnimatePresence mode='wait'>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </AnimatePresence>
        </Router>
    );
};

export default AppWrapper;
