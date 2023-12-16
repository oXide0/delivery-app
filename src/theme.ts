import { createTheme as createMuiTheme, darken } from '@mui/material';

const config = {
    orange: '#EA3F30',
    sand: '#F3F3F3',
    gray: '#3F3F3F',
};

export function createTheme({ mode }: { mode: 'light' | 'dark' }) {
    const defaultTheme = createMuiTheme();

    const muiTheme = createMuiTheme({
        palette: {
            mode,
            primary: {
                main: config.orange,
            },
            background: {
                paper: mode === 'light' ? config.sand : config.gray,
            },
        },
        typography: {
            fontFamily: ['Montserrat', 'sans-serif'].join(','),
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        overflowY: 'hidden',
                        transition: '.2s',
                    },
                },
            },
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
                            backgroundColor: darken(config.orange, 0.1),
                        },
                    },
                },
            },
            MuiSvgIcon: {
                variants: [
                    {
                        props: { fontSize: 'medium' },
                        style: {
                            width: '30px',
                            height: '30px',
                        },
                    },
                ],
            },
        },
    });

    return muiTheme;
}
