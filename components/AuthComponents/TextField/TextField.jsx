"use client";

import React from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { CiUser } from "react-icons/ci";

function TextField({
  label = "text",
  fieldLabel = "First Name",
  icon = <CiUser />,
  name = "firstname",
  value = "",
  handleInput,
  errors = null,
}) {
  let isInvalid = errors ? Boolean(errors[name]) : false;
  return (
    <FormControl variant="outlined" className="w-full">
      <InputLabel
        htmlFor={`inputField-${fieldLabel}`}
        className={`${isInvalid && "text-danger"}`}
      >
        {fieldLabel}
      </InputLabel>
      <OutlinedInput
        name={name}
        fullWidth
        id={`inputField-${fieldLabel}`}
        type={label}
        startAdornment={
          <InputAdornment position="start">{icon}</InputAdornment>
        }
        label={fieldLabel}
        value={value}
        onChange={handleInput}
        error={isInvalid}
      />
      {isInvalid && (
        <p className="text-xs lg:text-lg font-medium text-danger px-6 py-2">
          {errors[name]}
        </p>
      )}
    </FormControl>
  );
}

export default TextField;
