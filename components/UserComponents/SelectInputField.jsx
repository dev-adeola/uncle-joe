import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";

export default function SelectInputField({
  value,
  name,
  data,
  placeholder,
  setSelectedValue,
  label,
  verify,
}) {
  // const handleChange = (val) => {
  //   setValue(val.target.value);
  // };
  const handleChange = (selectedOption) => {
    setSelectedValue(selectedOption);
  };

  return verify ? (
    <Box sx={{ minWidth: "50%" }}>
      <FormControl
        fullWidth
        size="medium"
        placeholder={label}
        variant="outlined"
      >
        <Select
          styles={{
            control: (provided) => ({
              ...provided,
              backgroundColor: "bg-secondary",
              color: "white",
              borderColor: "black", // Change border color to black
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "white",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? "gray" : "white", // Change background color
              color: "black",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999, // Adjust the z-index as needed
            }),
          }}
          defaultValue={data[0]}
          isClearable={true}
          // isRtl={isRtl}
          isSearchable={true}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          name={name}
          required
          options={data}
        />
      </FormControl>
    </Box>
  ) : (
    <Select
      className="w-1/2"
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: "bg-secondary",
          color: "white",
          borderColor: "black", // Change border color to black
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "white",
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isSelected ? "gray" : "white", // Change background color
          color: "black",
        }),
        menu: (provided) => ({
          ...provided,
          zIndex: 9999, // Adjust the z-index as needed
        }),
      }}
      defaultValue={data[0]}
      isClearable={true}
      // isRtl={isRtl}
      isSearchable={true}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      name={name}
      required
      options={data}
    />
  );
}
