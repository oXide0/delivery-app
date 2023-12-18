import { Box, Button, Container, Divider, Grid, Stack, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import BgFood from '../assets/bg-food.png';
import Input from '../components/Input';
import { useLoginUserMutation } from '../services/userApi';

interface LoginFormValues {
    email: string;
    password: string;
}

const LoginPage = () => {
    const [loginUser, { error }] = useLoginUserMutation();

    const handleSubmit = async (values: LoginFormValues) => {
        await loginUser(values);
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
                            {error && (
                                <Typography color='red' fontWeight={600} textAlign='center'>
                                    User does not exist
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
                            style={{
                                textDecoration: 'underline',
                                color: theme.palette.primary.main,
                            }}
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
