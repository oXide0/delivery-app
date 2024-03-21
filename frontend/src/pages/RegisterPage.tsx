import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import BgFood from '../assets/bg-food.png';
import Input from '../components/Input';
import { useCreateUserMutation } from '../services/userApi';
import { registerValidationSchema } from '../helpers/schemes';
import PinField from 'react-pin-field';
import { useState } from 'react';

interface SignUpFormValues {
    name: string;
    email: string;
    password: string;
}

interface PinFormValues {
    code: string;
}

const RegisterPage = () => {
    const navigate = useNavigate();
    const [createUser] = useCreateUserMutation();
    const [userValues, setUserValues] = useState<SignUpFormValues | null>(null);
    const [errorMes, setErrorMes] = useState<string>('');
    const [accessCode, setAccessCode] = useState<string>('');

    const handleSubmit = async (values: SignUpFormValues) => {
        const userExists = false;
        if (userExists) {
            setErrorMes('User already exists');
            return;
        }
        const response = await fetch('http://localhost:5000/access-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email }),
        });
        const data = await response.json();
        setAccessCode(data.code);
        setUserValues(values);
    };

    const handlePinSubmit = async (values: PinFormValues) => {
        if (!userValues) return;
        if (values.code !== accessCode) {
            setErrorMes('Invalid access code');
            return;
        }
        try {
            // await createUser(userValues).unwrap();
            navigate('/');
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
                            {userValues ? 'Enter the code' : 'Sign up'}
                        </Typography>
                        <Stack my={5}>
                            {errorMes && (
                                <Typography color='red' fontWeight={600} textAlign='center'>
                                    {errorMes}
                                </Typography>
                            )}
                            {userValues && (
                                <Typography variant='h6' textAlign='center'>
                                    We have sent a code to your email
                                </Typography>
                            )}
                            <Divider sx={{ bgcolor: '#000' }} />
                        </Stack>
                        {userValues ? (
                            <PinCodeForm onSubmit={handlePinSubmit} />
                        ) : (
                            <SignUpForm onSubmit={handleSubmit} />
                        )}
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
            {({ values, handleChange, handleSubmit, errors, touched }) => (
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
                    <Button type='submit' sx={{ mt: 5, p: 1 }}>
                        Sign up
                    </Button>
                </Box>
            )}
        </Formik>
    );
};

const PinCodeForm = ({ onSubmit }: { onSubmit: (value: PinFormValues) => void }) => {
    return (
        <Formik initialValues={{ code: '' }} onSubmit={(values) => onSubmit(values)}>
            {({ handleSubmit, setValues }) => (
                <Box component='form' onSubmit={handleSubmit}>
                    <Stack display='flex' flexDirection='row' gap={3}>
                        <PinField
                            onChange={(value) => setValues({ code: value })}
                            name='code'
                            style={{
                                width: '100%',
                                outline: 'none',
                                border: `2px solid #756b5f`,
                                borderRadius: '8px',
                                background: 'none',
                                padding: '10px',
                                color: ' #575050',
                                textAlign: 'center',
                                fontSize: '28px',
                            }}
                            length={6}
                            validate={/^[0-9]{0,6}$/}
                        />
                    </Stack>
                    <Button type='submit' sx={{ mt: 5, p: 1 }}>
                        Verify
                    </Button>
                </Box>
            )}
        </Formik>
    );
};

export default RegisterPage;
