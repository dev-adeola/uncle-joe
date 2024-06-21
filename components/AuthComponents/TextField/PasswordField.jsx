"use client";

import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BsLock } from "react-icons/bs";

function PasswordField({
  fieldLabel = "Password",
  name = "password",
  value = "",
  handleInput,
  errors = null,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let isValid = errors ? Boolean(errors[name]) : false;

  return (
    <FormControl variant="outlined" className="w-full">
      <InputLabel
        htmlFor={`inputFieldield-${fieldLabel}`}
        className={`${isValid && "text-danger"}`}
      >
        {fieldLabel}
      </InputLabel>
      <OutlinedInput
        name={name}
        fullWidth
        id={`inputFieldield-${fieldLabel}`}
        type={showPassword ? "text" : "password"}
        startAdornment={
          <InputAdornment position="start">
            <BsLock />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={fieldLabel}
        value={value}
        onChange={handleInput}
        error={isValid}
      />
      {isValid && (
        <p className="text-xs lg:text-lg font-medium text-danger px-6 py-2">
          {errors[name]}
        </p>
      )}
    </FormControl>
  );
}

export default PasswordField;
