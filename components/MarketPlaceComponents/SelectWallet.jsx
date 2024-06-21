import React, { useState } from "react";
import { Avatar, Box, Divider, Menu, MenuItem, Stack } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { availableEWallets } from "@/utils/data";

import Select, { components } from "react-select";

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "black", // Change background color
    color: "white",
    borderColor: "black",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    color: "white",
    paddingLeft: "10px",
    fontSize: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#6b7280" : "black", // Change background color when selected
    color: "white",
    display: "flex",
    alignItems: "center",
    paddingLeft: "30px",
    fontSize: "20px",
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999,
  }),
};
const formatOptionLabel = ({ image_url, ewallet_name }, { context }) => {
  // const film = films.find((film) => film.brand === value);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={
          "https://offerbased.ratefy.co/storage/images/ewallets/" + image_url
        }
        alt={ewallet_name}
        style={{ marginRight: "8px", width: "40px", height: "40px" }}
      />

      {ewallet_name}
    </div>
  );
};
const MySelect = ({
  availableEWallets,

  selectedPayment,
  handleCountryChange,
  isFetching,
}) => {
  return (
    <Select
      styles={customStyles}
      // components={{ Option: customOption, SingleValue: customSingleValue }}
      isLoading={isFetching && true}
      isClearable={true}
      isSearchable={true}
      // value={selectedPayment}
      onChange={handleCountryChange}
      placeholder="Select payment options"
      name="payment"
      required
      formatOptionLabel={formatOptionLabel}
      options={availableEWallets} // assuming data contains options array
    />
  );
};

export default function SelectWallet({
  eWallet,
  handleSelectionEWallet,
  setSeletectedPaymentOptions,
  isFetching,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState({});

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelection = (id, logo, label) => {
    handleSelectionEWallet(id, logo, label);
    handleClose();
  };
  const handlePaymentChange = (selectedOption) => {
    console.log({ selectedOption });
    setSelectedPayment(selectedOption?.ewallet_name);
    setSeletectedPaymentOptions(selectedOption);
    handleSelectionEWallet(
      selectedOption?.id,
      selectedOption?.image_url,
      selectedOption?.ewallet_name
    );
  };
  console.log({ eWallet });
  return (
    <div className="flex w-full flex-shrink-0 flex-col space-y-2">
      <div>
        <h4 className="font-karla text-[16px] font-bold leading-[20px] text-lightGray xl:text-[30px] xl:leading-[43.5px]">
          What is your payment option?
        </h4>
      </div>
      <div className="h-[45px] w-full max-w-[342px] cursor-pointer   ">
        <MySelect
          availableEWallets={eWallet}
          // selectedPayment={selectedPayment}
          handleCountryChange={handlePaymentChange}
          isFetching={isFetching}
        />
      </div>
    </div>
  );
}
