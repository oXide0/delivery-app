import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import Snowfall from 'react-snowfall';
import { ThemeModeContext } from './ThemeContext';
import { createTheme } from '../theme';

interface UiProviderProps {
    children: React.ReactNode;
}

const UiProvider = ({ children }: UiProviderProps) => {
    const { mode } = useContext(ThemeModeContext);
    const theme = createTheme({ mode });

    return (
        <AnimatePresence mode='wait'>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {mode === 'dark' && <Snowfall />}
                {children}
            </MuiThemeProvider>
        </AnimatePresence>
    );
};

export default UiProvider;
