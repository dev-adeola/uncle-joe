import React, { useState } from "react";
import { Box, Divider, Menu, MenuItem, Stack } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { paymentOptions } from "@/utils/data";
import Select from "react-select";

export default function SelectPaymentOption({
  paymentOption,
  handleSelection,
  setSeletectedHowToPayOptions,
  seletectedValueHowToPayOptions,
  setSeletectedValueHowToPayOptions,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlePaymentChange = (selectedOption) => {
    console.log({ selectedOption });
    setSeletectedValueHowToPayOptions(selectedOption?.value);
    setSeletectedHowToPayOptions(selectedOption);
    handleSelection(selectedOption?.value?.id, selectedOption?.value?.option);

    // handleSelectionEWallet(
    //   selectedOption?.id,
    //   selectedOption?.image_url,
    //   selectedOption?.ewallet_name
    // );
  };
  return (
    <div className="flex flex-shrink-0 flex-col space-y-2">
      <div>
        <h4 className="font-karla text-[16px] font-bold leading-[20px] text-lightGray xl:text-[30px] xl:leading-[43.5px]">
          How do you want to pay?
        </h4>
      </div>

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
        defaultValue={seletectedValueHowToPayOptions["option"]}
        // isLoading={isLoading && true}
        isClearable={true}
        // isRtl={isRtl}
        isSearchable={true}
        // value={seletectedValueHowToPayOptions}

        onChange={handlePaymentChange}
        placeholder="Select how to pay"
        name="how_to_pay"
        required
        getOptionValue={(option) => `${option["value"]["option"]}`}
        options={paymentOption?.map((item) => ({
          value: item,
          label: item.option,
        }))}
      />
    </div>
  );
}
