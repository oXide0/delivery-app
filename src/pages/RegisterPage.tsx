import BgFood from '../assets/bg-food.png';
import { Typography, Container, Grid, Box, Divider, Stack, Button } from '@mui/material';
import Input from '../components/Input';
import { Formik } from 'formik';

const RegsiterPage = () => {
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
                        <Divider sx={{ my: 5, bgcolor: '#000' }} />
                        <SignupForm />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

const SignupForm = () => {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
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
