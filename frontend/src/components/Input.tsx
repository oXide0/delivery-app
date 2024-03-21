import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    TextField as MuiTextField,
    TextFieldProps as MuiTextFieldProps,
    OutlinedInput,
    OutlinedInputProps,
} from '@mui/material';
import { ReactNode, useState } from 'react';

interface InputProps extends Omit<MuiTextFieldProps, 'variant'> {
    readonly name: string;
    readonly type?: string;
    readonly label: string;
    readonly onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    name,
    type = 'text',
    label,
    onChange,
    helperText,
    error,
    ...props
}: InputProps) => {
    if (type === 'password')
        return (
            <PasswordField
                name={name}
                label={label}
                onChange={onChange}
                helperText={helperText}
                error={error}
            />
        );

    return (
        <TextField
            name={name}
            onChange={onChange}
            label={label}
            helperText={helperText}
            error={error}
            {...props}
        />
    );
};

const TextField = (props: MuiTextFieldProps) => {
    return <MuiTextField {...props} />;
};

interface PasswordFieldProps extends Omit<OutlinedInputProps, 'variant'> {
    label: string;
    helperText?: ReactNode;
}

const PasswordField = ({ label, name, helperText, error, ...props }: PasswordFieldProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <FormControl variant='outlined' error={error}>
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
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};

export default Input;
