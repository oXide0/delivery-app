import { Box, Button, Container, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BgFood from '../assets/bg-food.png';
import Input from '../components/Input';
import { loginValidationSchema } from '../helpers/schemes';

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (values: LoginFormValues) => {
        try {
            // const user = await loginUser(values).unwrap();
            localStorage.setItem('userId', JSON.stringify(user.userId));
            navigate('/products');
        } catch (err) {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <Container>
            <Grid container height='100vh'>
                <Grid item xs={6}>
                    <img
                        src={BgFood}
                        alt='food'
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        height='100%'
                        p={6}
                    >
                        <Typography variant='h3' fontWeight={700}>
                            Login
                        </Typography>
                        <Stack my={5}>
                            {errorMessage && (
                                <Typography color='red' fontWeight={600} textAlign='center'>
                                    {errorMessage}
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: '#000' }} />
                        </Stack>

                        <LoginForm onSubmit={handleSubmit} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const LoginForm = ({ onSubmit }: { onSubmit: (values: LoginFormValues) => void }) => {
    const theme = useTheme();

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => onSubmit({ email: values.email, password: values.password })}
            validationSchema={loginValidationSchema}
        >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
                <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column'>
                    <Stack spacing={2}>
                        <Input
                            name='email'
                            label='Email Address'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <Input
                            name='password'
                            label='Password'
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                    </Stack>
                    <Button type='submit' sx={{ mt: 5, p: 1 }} variant='contained'>
                        Login
                    </Button>

                    <Typography textAlign='center' pt={4}>
                        Don't have account yet?
                        <Link
                            to='/register'
                            style={{
                                textDecoration: 'underline',
                                color: theme.palette.primary.main,
                            }}
                        >
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            )}
        </Formik>
    );
};

export default LoginPage;
