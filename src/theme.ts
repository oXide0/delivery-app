import { createTheme as createMuiTheme, darken } from '@mui/material';

const config = {
    orange: '#EA3F30',
    sand: '#F3F3F3',
    gray: '#3F3F3F',
    lightGray: '#7A7A7A',
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
                paper: mode === 'light' ? config.sand : config.lightGray,
                default: mode === 'light' ? '#fff' : config.gray,
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
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    },
                },
            },
        },
    });

    return muiTheme;
}
