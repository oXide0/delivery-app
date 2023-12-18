import BgFood from '../assets/bg-food.png';
import { Typography, Container, Grid, Box, Divider, Stack, Button } from '@mui/material';
import Input from '../components/Input';
import { Formik } from 'formik';
import { useCreateUserMutation } from '../services/userApi';

interface SignupFormValues {
    name: string;
    email: string;
    password: string;
}

const RegsiterPage = () => {
    const [createUser, { error }] = useCreateUserMutation();

    const handleSubmit = async (values: SignupFormValues) => {
        await createUser(values);
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
                            Signup
                        </Typography>
                        <Stack my={5}>
                            {error && (
                                <Typography color='red' fontWeight={600} textAlign='center'>
                                    User already exists
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: '#000' }} />
                        </Stack>
                        <SignupForm onSubmit={handleSubmit} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const SignupForm = ({ onSubmit }: { onSubmit: (values: SignupFormValues) => void }) => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => onSubmit(values)}
        >
            {({ values, handleChange, handleSubmit }) => (
                <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column'>
                    <Stack spacing={2}>
                        <Input
                            name='name'
                            label='Your name'
                            value={values.name}
                            onChange={handleChange}
                        />
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
                        Signup
                    </Button>
                </Box>
            )}
        </Formik>
    );
};

export default RegsiterPage;
