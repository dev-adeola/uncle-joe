"use client";

import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "@/components/MarketPlaceComponents/CustomBreadcrumbs";
import SelectPaymentOption from "@/components/MarketPlaceComponents/SelectPaymentOption";
import SelectTags from "@/components/MarketPlaceComponents/SelectTags";
import SelectWallet from "@/components/MarketPlaceComponents/SelectWallet";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
function OfferPaymentInfoMarketBuyer({
  id = null,
  isNewOffer = true,
  paymentOptionsData,
  isFetching,
  seletectedPaymentOptions,
  setSeletectedPaymentOptions,
  seletectedValueHowToPayOptions,
  setSeletectedValueHowToPayOptions,
  seletectedHowToPayOptions,
  setSeletectedHowToPayOptions,
  fundExchangeIndex,
  nextIndex,
  setNextIndex,
  fundExchangeInfo,
  setFundExchangeIndex,
  selectedTags,
  handleTagSelect,
}) {
  const [operation, setOperation] = useState("sell");

  const handleSection = () => {
    if (activeSection) {
      if (activeSection === id) return;
      dispatch(setOfferActiveSection(id));
    }
    return;
  };

  // handleEWalletSelection
  const handleEWalletSelection = (id, logo, label) => {
    setNextIndex(1);
  };

  // Handle Tag Selection
  const handleOnSelectTag = (id, label) => {
    if (isNewOffer) {
      dispatch(selectTag({ id, label }));
    } else {
      dispatch(setQueryTags({ id, label }));
    }
  };

  // Handle Payment Option Payment Method
  const handlePaymentMethodSelection = (id, label) => {
    setNextIndex(2);
  };

  // Set Query Mode  ===> 'buy' || 'sell'
  const handleOperation = () => {
    if (isNewOffer) {
      if (operation === "sell") {
        dispatch(setOfferType("buy"));
      } else {
        dispatch(setOfferType("sell"));
      }
    } else {
      if (operation === "sell") {
        dispatch(setQueryMode("buy"));
      } else {
        dispatch(setQueryMode("sell"));
      }
    }
  };

  // Set index for the query options section ===> 0 || 1 || 2
  const handleFundExchangeIndex = (val) => {
    setNextIndex(val);
  };

  console.log({ seletectedPaymentOptions, seletectedHowToPayOptions });
  //
  const SelectSection = (index) => {
    switch (index) {
      case 0:
        return (
          <SelectWallet
            eWallet={paymentOptionsData}
            isFetching={isFetching}
            handleSelectionEWallet={handleEWalletSelection}
            setSeletectedPaymentOptions={setSeletectedPaymentOptions}
          />
        );
      case 1:
        return (
          <SelectPaymentOption
            paymentOption={seletectedPaymentOptions?.paymentoption}
            handleSelection={handlePaymentMethodSelection}
            seletectedValueHowToPayOptions={seletectedValueHowToPayOptions}
            setSeletectedValueHowToPayOptions={
              setSeletectedValueHowToPayOptions
            }
            setSeletectedHowToPayOptions={setSeletectedHowToPayOptions}
          />
        );
      case 2:
        return (
          <SelectTags
            currentTags={seletectedHowToPayOptions?.value?.requirement}
            // handleOnSelect={handleOnSelectTag}
            selectedTags={selectedTags}
            handleTagSelect={handleTagSelect}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      <Box className={`w-full h-fit  space-y-4 transition-all duration-500`}>
        <div className="h-fit w-full max-w-[1052px] transition-all duration-500 space-y-4 rounded-[10px] bg-secondary p-4  md:p-6">
          <div className="flex items-center justify-between space-x-4">
            {/* bread */}
            <div className="flex items-center space-x-4">
              <div
                onClick={() => handleFundExchangeIndex(0)}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full transition-colors duration-150 ${
                  fundExchangeIndex === 0 ? "bg-primary" : "bg-[#737373]"
                }`}
              />
              <div
                onClick={() => handleFundExchangeIndex(1)}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full transition-colors duration-150 ${
                  fundExchangeIndex === 1 ? "bg-primary" : "bg-[#737373]"
                }`}
              />
              <div
                onClick={() => handleFundExchangeIndex(2)}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full transition-colors duration-150 ${
                  fundExchangeIndex === 2 ? "bg-primary" : "bg-[#737373]"
                }`}
              />
            </div>
            <CustomBreadcrumbs
              index={fundExchangeIndex}
              fundExchangeInfo={fundExchangeInfo}
              setFundExchangeIndex={setFundExchangeIndex}
              seletectedValueHowToPayOptions={seletectedValueHowToPayOptions}
            />
          </div>

          {/* <WalletSelector /> */}
          <div>{SelectSection(fundExchangeIndex)}</div>
        </div>

        {/* md:h-[212px] h-[140px] */}
      </Box>
    </>
  );
}

export default OfferPaymentInfoMarketBuyer;
