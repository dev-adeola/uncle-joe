import React, { useState } from "react";

import Select from "react-select";

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export const SelectedTag = ({ data }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <>
      <Select
        className="w-1/2"
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: "black",
            color: "white",
            borderColor: "black", // Change border color to black
          }),
          singleValue: (provided) => ({ ...provided, color: "white" }),
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
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={true}
        name="Country"
        options={data.map((item) => ({
          value: item.name,
          label: item.name,
        }))}
      />
    </>
  );
};
