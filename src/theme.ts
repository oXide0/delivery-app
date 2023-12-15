import { createTheme as createMuiTheme } from '@mui/material';

export function createTheme({ mode }: { mode: 'light' | 'dark' }) {
    const defaultTheme = createMuiTheme();

    const muiTheme = createMuiTheme({
        palette: {
            primary: {
                main: '#EA3F30',
            },
            background: {
                paper: '#F3F3F3',
            },
        },
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
                        [defaultTheme.breakpoints.up('xs')]: {
                            paddingLeft: defaultTheme.spacing(2),
                            paddingRight: defaultTheme.spacing(2),
                        },
                        [defaultTheme.breakpoints.up('sm')]: {
                            paddingLeft: defaultTheme.spacing(2),
                            paddingRight: defaultTheme.spacing(2),
                        },
                        [defaultTheme.breakpoints.up('md')]: {
                            paddingLeft: defaultTheme.spacing(2),
                            paddingRight: defaultTheme.spacing(2),
                        },
                        [defaultTheme.breakpoints.up('lg')]: {
                            paddingLeft: defaultTheme.spacing(2),
                            paddingRight: defaultTheme.spacing(2),
                        },
                        [defaultTheme.breakpoints.up('xl')]: {
                            paddingLeft: defaultTheme.spacing(0),
                            paddingRight: defaultTheme.spacing(0),
                        },
                    },
                },
            },
        },
    });

    return muiTheme;
}

export const theme = createTheme({ mode: 'light' });
