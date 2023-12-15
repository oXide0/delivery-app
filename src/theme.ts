import { createTheme as createMuiTheme, darken } from '@mui/material';

export const palette = {
    primary: {
        main: '#EA3F30',
    },
    background: {
        paper: '#F3F3F3',
    },
};

function createTheme({ mode }: { mode: 'light' | 'dark' }) {
    const defaultTheme = createMuiTheme();

    const muiTheme = createMuiTheme({
        palette,
        typography: {
            fontFamily: ['Montserrat', 'sans-serif'].join(','),
        },
        components: {
            MuiContainer: {
                defaultProps: {
                    maxWidth: 'xl',
                },
                styleOverrides: {
                    root: {
                        [defaultTheme.breakpoints.up('xl')]: {
                            paddingLeft: defaultTheme.spacing(0),
                            paddingRight: defaultTheme.spacing(0),
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        ':hover': {
                            backgroundColor: darken(palette.primary.main, 0.1),
                        },
                    },
                },
            },
        },
    });

    return muiTheme;
}

export const theme = createTheme({ mode: 'light' });
