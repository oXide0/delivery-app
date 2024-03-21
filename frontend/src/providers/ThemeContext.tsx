import { Dispatch, SetStateAction, createContext, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
    mode: ThemeMode;
    setMode: Dispatch<SetStateAction<ThemeMode>>;
}

const initialContextValue: ThemeContextValue = {
    mode: 'light',
    setMode: () => {},
};

export const ThemeModeContext = createContext<ThemeContextValue>(initialContextValue);

const ThemeModeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('light');

    return (
        <ThemeModeContext.Provider value={{ mode, setMode }}>{children}</ThemeModeContext.Provider>
    );
};

export default ThemeModeContextProvider;
