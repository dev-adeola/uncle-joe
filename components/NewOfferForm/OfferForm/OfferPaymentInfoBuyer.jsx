"use client";

import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "@/components/MarketPlaceComponents/CustomBreadcrumbs";
import SelectPaymentOption from "@/components/MarketPlaceComponents/SelectPaymentOption";
import SelectTags from "@/components/MarketPlaceComponents/SelectTags";
import SelectWallet from "@/components/MarketPlaceComponents/SelectWallet";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEWallet,
  selectPaymentOption,
  selectTag,
  setOfferActiveSection,
  setOfferIndex,
  setOfferPaymentIndex,
  setOfferType,
  setQueryEWallet,
  setQueryMode,
  setQueryPaymentOption,
  setQueryTags,
} from "@/redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function OfferPaymentInfoBuyer({
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

  const dispatch = useDispatch();

  const handleSection = () => {
    if (activeSection) {
      if (activeSection === id) return;
      dispatch(setOfferActiveSection(id));
    }
    return;
  };

  // handleEWalletSelection
  const handleEWalletBuyerSelection = (id, logo, label) => {
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
  const handlePaymentBuyerMethodSelection = (id, label) => {
    setNextIndex(2);
  };

  // Set index for the query options section ===> 0 || 1 || 2
  const handleFundBuyerExchangeIndex = (val) => {
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
            handleSelectionEWallet={handleEWalletBuyerSelection}
            setSeletectedPaymentOptions={setSeletectedPaymentOptions}
          />
        );
      case 1:
        handleFundBuyerExchangeIndex;
        return (
          <SelectPaymentOption
            paymentOption={seletectedPaymentOptions?.paymentoption}
            handleSelection={handlePaymentBuyerMethodSelection}
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
                onClick={() => handleFundBuyerExchangeIndex(0)}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full transition-colors duration-150 ${
                  fundExchangeIndex === 0 ? "bg-primary" : "bg-[#737373]"
                }`}
              />
              <div
                onClick={() => handleFundBuyerExchangeIndex(1)}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full transition-colors duration-150 ${
                  fundExchangeIndex === 1 ? "bg-primary" : "bg-[#737373]"
                }`}
              />
              <div
                onClick={() => handleFundBuyerExchangeIndex(2)}
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

export default OfferPaymentInfoBuyer;
