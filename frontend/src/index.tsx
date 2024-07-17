import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeModeContextProvider from './providers/ThemeContext';
import UiProvider from './providers/UiProvider';

const root = createRoot(document.getElementById('root')!);

root.render(
    <StrictMode>
        <ThemeModeContextProvider>
            <UiProvider>
                <App />
            </UiProvider>
        </ThemeModeContextProvider>
    </StrictMode>
);
