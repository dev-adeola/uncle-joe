import * as React from "react";
import Box from "@mui/material/Box";
import { FormControl, TextField } from "@mui/material";

export default function TextInputField({
  label,
  value,
  setValue,
  width,
  placeholder = null,
  type = "text",
  disabled = false,
  name,
  handleChange,
}) {
  //   const handleChange = (val) => {
  //     setValue(val);
  //   };

  return (
    <div className={`${width ? width : "w-1/2"} text-[#fff]`}>
      <FormControl
        fullWidth
        size="medium"
        placeholder={label}
        variant="outlined"
      >
        <TextField
          id={label + "text-id"}
          label={label}
          onChange={handleChange}
          value={value}
          variant="outlined"
          placeholder={placeholder ?? label}
          type={type}
          disabled={disabled}
          name={name}
          className="text-white bg-transparent placeholder:text-white border border-border"
        />
      </FormControl>
    </div>
  );
}
