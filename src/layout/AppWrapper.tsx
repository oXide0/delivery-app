import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../store/store';
import { theme } from '../theme';
import { AnimatePresence } from 'framer-motion';

interface AppWrapperProps {
    children: React.ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
    return (
        <Router>
            <Provider store={store}>
                <AnimatePresence>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </AnimatePresence>
            </Provider>
        </Router>
    );
};

export default AppWrapper;
