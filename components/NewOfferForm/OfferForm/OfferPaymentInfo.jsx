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

function OfferPaymentInfo({
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
  // const [seletectedPaymentOptions, setSeletectedPaymentOptions] = useState("");
  // const [seletectedValueHowToPayOptions, setSeletectedValueHowToPayOptions] =
  //   useState("");
  // const [seletectedHowToPayOptions, setSeletectedHowToPayOptions] =
  //   useState("");
  // const [fundExchangeIndex, setFundExchangeIndex] = useState(0);
  // const [nextIndex, setNextIndex] = useState(0);
  // const [fundExchangeInfo, setFundExchangeInfo] = useState({
  //   eWallet: {},
  //   paymentOption: "",
  //   tags: [],
  // });

  // Redux Func
  const dispatch = useDispatch();

  const offerState = useSelector((state) => ({
    activeSection: isNewOffer
      ? state.createOffer.createOfferActiveSection
      : null,
    offerPaymentInfo: isNewOffer
      ? state.createOffer.offerPaymentInfo
      : state.searchOffer.searchOfferQueries,
  }));

  const { activeSection, offerPaymentInfo } = offerState;

  const handleSection = () => {
    if (activeSection) {
      if (activeSection === id) return;
      dispatch(setOfferActiveSection(id));
    }
    return;
  };

  // handleEWalletSelection
  const handleEWalletSelection = (id, logo, label) => {
    // if (isNewOffer) {
    //   // dispatch(selectEWallet({ id, logo, label }));
    //   // dispatch(setOfferPaymentIndex(1));
    // } else {
    //   dispatch(setQueryEWallet({ id, logo, label }));
    //   dispatch(setOfferIndex(1));
    // }
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
    // if (isNewOffer) {
    //   dispatch(selectPaymentOption({ id, label }));
    //   dispatch(setOfferPaymentIndex(2));
    // } else {
    //   dispatch(setQueryPaymentOption({ id, label }));
    //   dispatch(setOfferIndex(2));
    // }
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
    // if (isNewOffer) {
    //   dispatch(setOfferPaymentIndex(val));
    // } else {
    //   setFundExchangeIndex(val);
    //   dispatch(setOfferIndex(val));
    // }
    setNextIndex(val);
  };

  console.log({ seletectedPaymentOptions, seletectedHowToPayOptions });
  //
  const SelectSection = (index) => {
    switch (index) {
      case 0:
        return (
          <SelectWallet
            // eWallet={
            //   isNewOffer
            //     ? offerPaymentInfo?.eWallet
            //     : offerPaymentInfo?.queryEWallet
            // }
            eWallet={paymentOptionsData}
            isFetching={isFetching}
            handleSelectionEWallet={handleEWalletSelection}
            setSeletectedPaymentOptions={setSeletectedPaymentOptions}
          />
        );
      case 1:
        return (
          <SelectPaymentOption
            // paymentOption={
            //   isNewOffer
            //     ? offerPaymentInfo?.paymentOption
            //     : offerPaymentInfo?.queryPaymentOption
            // }
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
            // currentTags={
            //   isNewOffer
            //     ? offerPaymentInfo?.offerTags
            //     : offerPaymentInfo?.queryTags
            // }
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

  // useEffect(() => {
  //   setFundExchangeIndex(nextIndex);
  //   if (isNewOffer) {
  //     setFundExchangeInfo({
  //       eWallet: seletectedPaymentOptions,
  //       paymentOption: offerPaymentInfo?.paymentOption,
  //       tags: offerPaymentInfo?.offerTags,
  //     });
  //     setOperation(offerPaymentInfo?.offerType);
  //   } else {
  //     setOperation(offerPaymentInfo?.queryMode);
  //   }
  // }, [nextIndex]);

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

export default OfferPaymentInfo;