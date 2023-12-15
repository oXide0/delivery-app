import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
    OutlinedInput,
    OutlinedInputProps,
} from '@mui/material';
import { useState } from 'react';

interface InputProps extends Omit<MuiTextFieldProps, 'variant'> {
    readonly name: string;
    readonly type: string;
    readonly label: string;
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, type, label, onChange, ...props }: InputProps) => {
    if (type === 'password') return <PasswordField name={name} label={label} onChange={onChange} />;

    return <TextField name={name} onChange={onChange} label={label} {...props} />;
};

const TextField = (props: MuiTextFieldProps) => {
    return <MuiTextField {...props} />;
};

interface PasswordFieldProps extends Omit<OutlinedInputProps, 'variant'> {
    label: string;
}

const PasswordField = ({ label, name, ...props }: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControl variant='outlined'>
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <OutlinedInput
                name={name}
                label={label}
                id={name}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position='end'>
                        <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                {...props}
            />
        </FormControl>
    );
};

export default Input;
