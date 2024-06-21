'use client'

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function PasswordInputField({ label, setValue, disabled = false }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ minWidth: 320, color: '#fff' }}>
            <FormControl fullWidth size='medium' placeholder={label} variant='outlined'>
                <InputLabel htmlFor={label + 'password-id'}>{label}</InputLabel>
                <OutlinedInput
                    id={label + 'passowrd-outline'}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={label}
                />
            </FormControl>
        </Box>
    );
}
