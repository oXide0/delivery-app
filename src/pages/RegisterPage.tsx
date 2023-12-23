import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import BgFood from '../assets/bg-food.png';
import Input from '../components/Input';
import { useCreateUserMutation } from '../services/userApi';
import { registerValidationSchema } from '../utils';

interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const [createUser, { error }] = useCreateUserMutation();

    const handleSubmit = async (values: SignUpFormValues) => {
        try {
            await createUser(values).unwrap();
            navigate('/login');
        } catch (err) {
            console.log(err);
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
                            Sign up
                        </Typography>
                        <Stack my={5}>
                            {error && (
                                <Typography color='red' fontWeight={600} textAlign='center'>
                                    User already exists
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: '#000' }} />
                        </Stack>
                        <SignUpForm onSubmit={handleSubmit} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const SignUpForm = ({ onSubmit }: { onSubmit: (values: SignUpFormValues) => void }) => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={registerValidationSchema}
        >
            {({ values, handleChange, handleSubmit, isValid, errors, touched }) => (
                <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column'>
                    <Stack spacing={2}>
                        <Input
                            name='name'
                            label='Your name'
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
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
                    <Button
                        type='submit'
                        sx={{ mt: 5, p: 1 }}
                        variant='contained'
                        disabled={!isValid}
                    >
                        Sign up
                    </Button>
                </Box>
            )}
        </Formik>
    );
};

export default RegisterPage;
