import BgFood from '../assets/bg-food.png';
import { Typography, Container, Grid, Box, Divider, Stack, Button } from '@mui/material';
import Input from '../components/Input';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { palette } from '../theme';

const LoginPage = () => {
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
                        <Divider sx={{ my: 5, bgcolor: '#000' }} />
                        <LoginForm />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const LoginForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ values, handleChange, handleSubmit }) => (
                <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column'>
                    <Stack spacing={2}>
                        <Input
                            name='email'
                            label='Email Adress'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        <Input
                            name='password'
                            label='Password'
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                        />
                    </Stack>
                    <Button type='submit' sx={{ mt: 5, p: 1 }} variant='contained'>
                        Login
                    </Button>

                    <Typography textAlign='center' pt={4}>
                        Don't have accout yet?{' '}
                        <Link
                            to='/register'
                            style={{ textDecoration: 'underline', color: palette.primary.main }}
                        >
                            Signup
                        </Link>
                    </Typography>
                </Box>
            )}
        </Formik>
    );
};

export default LoginPage;
