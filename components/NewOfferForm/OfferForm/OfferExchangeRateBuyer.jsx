"use client";

import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { CustomRateButton } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRateType,
  setFixedRate,
  setMaxAmount,
  setMinAmount,
  setOfferActiveSection,
  setRate,
} from "@/redux";
import { formatCurrency, ratefyRate } from "@/utils";

function OfferExchangeRateBuyer({
  currentMarketRate,
  id,
  handleDecrement,
  handleIncrement,
  rateInPercentage,
  handleInput,
  selectedOption,
  handleSelect,
}) {
  const createOfferData = useSelector((state) => ({
    activeSection: state.createOffer.createOfferActiveSection,
    exchangeRateInfo: state.createOffer.exchangeRateInfo,
  }));

  const dispatch = useDispatch();
  console.log({ rateInPercentage });

  const { activeSection, exchangeRateInfo } = createOfferData;

  const handleSection = () => {
    if (activeSection === id) return;
    else dispatch(setOfferActiveSection(id));
  };

  return (
    <>
      <div className="h-fit w-full transition-all duration-500 max-w-[1052px] space-y-4 rounded-[10px] bg-secondary p-4  md:p-6">
        {/* Radio Buttons */}
        <div className="flex items-center space-x-4 md:space-x-6"></div>
        <CustomRateButton
          handleChangeInput={handleSelect}
          selectedOption={selectedOption}
          options={[
            { value: "market", label: "Market" },
            { value: "fixed", label: "Fixed" },
          ]}
        />
        {/*  */}
        <div className="w-full flex gap-6 flex-col md:flex-row md:items-start md:justify-between">
          {/*  */}
          <div className="order-2 md:order-1 w-full max-w-[346px] flex flex-col space-y-2 items-start">
            <p className="font-karla text-lightGray font-bold text-sm text-left">
              {selectedOption === "market"
                ? "Set your market percentage rate (%)"
                : "Set your own rate per dollar (#/$)"}
            </p>
            {selectedOption === "market" ? (
              <Stack
                direction={"row"}
                divider={<Divider color="#737373" orientation="vertical" />}
                className="w-full flex overflow-hidden items-center h-[54px] rounded-[7px] border-2 border-iconBorder"
              >
                <div className="flex items-stretch h-full justify-between flex-1 ">
                  {/*  */}
                  <div
                    onClick={handleDecrement}
                    className=" flex-1 shrink-0 flex items-center justify-center"
                  >
                    <p className="p-2 rounded-full  cursor-pointer text-white font-normal text-[30px] font-rubik">
                      <BiMinus />
                    </p>
                  </div>
                  {/*  */}
                  <div className=" flex items-center justify-center flex-1 shrink max-w-[140px]">
                    <input
                      onChange={handleInput}
                      // value={exchangeRateInfo?.rateInPercentage}
                      value={rateInPercentage?.percentage}
                      type="number"
                      name="percentage"
                      placeholder={-3}
                      className="bg-transparent text-center placeholder:text-center h-full w-full placeholder:text-white text-white font-normal text-[30px] font-rubik outline-none border-none"
                    />
                  </div>
                  {/*  */}
                  <div
                    onClick={handleIncrement}
                    className=" flex-1 shrink-0 flex items-center justify-center"
                  >
                    <p className="p-2 rounded-full  cursor-pointer text-white font-normal text-[30px] font-rubik">
                      <BiPlus />
                    </p>
                  </div>
                </div>
                <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                  <p className="text-white font-bold font-rubik text-xl">%</p>
                </div>
              </Stack>
            ) : (
              <Stack
                direction={"row"}
                divider={<Divider color="#737373" orientation="vertical" />}
                className="w-full flex overflow-hidden items-center h-[54px] rounded-[7px] border-2 border-iconBorder"
              >
                <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                  <p className="text-white font-bold font-rubik text-xl">
                    # / $
                  </p>
                </div>
                <div className="flex items-center justify-start flex-1 ">
                  {/*  */}
                  <input
                    type="number"
                    placeholder={"Enter fixed rate"}
                    value={rateInPercentage?.fixed_rate}
                    name="fixed_rate"
                    onChange={handleInput}
                    className="p-4 h-full bg-transparent flex-1 placeholder:text-[#b1b1b1] text-[#B1B1B1] font-normal text-lg font-rubik outline-none border-none"
                  />
                </div>
              </Stack>
            )}
            {/*  */}
            <div className="w-full">
              {/*  */}
              <div className="w-full flex items-end space-x-2 justify-between">
                <div className="w-fit">
                  <p className=" text-sm leading-7 font-semibold text-left font-karla text-lightGray capitalize">
                    estimated exchange rate
                  </p>
                </div>
                <div className="w-full flex-1 border-b-2 border-dashed border-primary mb-2" />
                <div className="w-fit">
                  <p className="text-lg font-semibold text-right font-karla text-lightGray capitalize">
                    {currentMarketRate && formatCurrency(currentMarketRate)}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="w-full flex items-end space-x-2 justify-between">
                <div className="w-fit">
                  <p className=" text-sm leading-7 font-semibold text-left font-karla text-lightGray capitalize">
                    Rate you gave{" "}
                    {selectedOption === "market"
                      ? `(${rateInPercentage?.percentage + "%"})`
                      : `(${
                          rateInPercentage?.fixed_rate == ("" || null)
                            ? "0%"
                            : rateInPercentage?.fixed_rate + "%"
                        })`}
                  </p>
                </div>
                <div className="w-full flex-1 border-b-2 border-dashed border-primary mb-2" />
                <div className="w-fit">
                  <p className="text-lg font-semibold text-right font-karla text-lightGray capitalize">
                    {selectedOption === "market"
                      ? rateInPercentage?.percentage === 0
                        ? "#00.00"
                        : formatCurrency(
                            currentMarketRate *
                              (Number(rateInPercentage?.percentage) / 100)
                          )
                      : rateInPercentage?.fixed_rate === ("" || null)
                      ? 0
                      : "#" +
                        formatCurrency(Number(rateInPercentage?.fixed_rate)) +
                        "/$"}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="w-full flex items-end space-x-2 justify-between">
                <div className="w-fit">
                  <p className=" text-sm leading-7 font-semibold text-left font-karla text-lightGray capitalize">
                    Ratefy fee ({ratefyRate * 100}%)
                  </p>
                </div>
                <div className="w-full flex-1 border-b-2 border-dashed border-primary mb-2" />
                <div className="w-fit">
                  <p className="text-lg font-semibold text-right font-karla text-lightGray capitalize">
                    {selectedOption === "market"
                      ? currentMarketRate &&
                        formatCurrency(currentMarketRate * ratefyRate)
                      : rateInPercentage?.fixed_rate === ("" || null)
                      ? 0
                      : formatCurrency(
                          Number(rateInPercentage?.fixed_rate) * ratefyRate
                        )}
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="w-full mt-2 p-2 h-8 bg- flex items-center justify-between bg-[#2e2e2e]">
                <p className="font-semibold text-left text-sm font-karla text-lightGray">
                  Final rate
                </p>
                <p className="font-semibold text-right text-[25px] font-karla text-lightGray">
                  {selectedOption === "market"
                    ? formatCurrency(
                        currentMarketRate +
                          (currentMarketRate *
                            Number(rateInPercentage?.percentage)) /
                            100 -
                          currentMarketRate * ratefyRate
                      )
                    : formatCurrency(
                        Number(rateInPercentage?.fixed_rate) -
                          Number(rateInPercentage?.fixed_rate) *
                            (ratefyRate / 100)
                      )}
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="order-1 md:order-2 w-full max-w-[346px] space-y-4">
            <div className="w-full  flex flex-col space-y-2 items-start">
              <p className="font-karla text-lightGray font-bold text-sm text-left">
                Minimum amount
              </p>
              <Stack
                direction={"row"}
                divider={<Divider color="#737373" orientation="vertical" />}
                className="w-full flex overflow-hidden items-center h-[54px] rounded-[7px] border-2 border-iconBorder"
              >
                <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                  <p className="text-white font-bold font-rubik text-xl">$</p>
                </div>
                <div className="flex items-center justify-start flex-1 ">
                  {/*  */}
                  <input
                    type="number"
                    min={10}
                    placeholder={"100.0"}
                    value={rateInPercentage?.min_amount}
                    name="min_amount"
                    onChange={handleInput}
                    className="p-4 h-full bg-transparent flex-1 placeholder:text-[#b1b1b1] text-[#B1B1B1] font-normal text-lg font-rubik outline-none border-none"
                  />
                </div>
              </Stack>
            </div>
            <div className="w-full  flex flex-col space-y-2 items-start">
              <p className="font-karla text-lightGray font-bold text-sm text-left">
                Maximum amount
              </p>
              <Stack
                direction={"row"}
                divider={<Divider color="#737373" orientation="vertical" />}
                className="w-full flex overflow-hidden items-center h-[54px] rounded-[7px] border-2 border-iconBorder"
              >
                <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                  <p className="text-white font-bold font-rubik text-xl">$</p>
                </div>
                <div className="flex items-center justify-start flex-1 ">
                  {/*  */}
                  <input
                    type="number"
                    min={10}
                    placeholder={"10000000.0"}
                    value={rateInPercentage?.max_amount}
                    name="max_amount"
                    onChange={handleInput}
                    className="p-4 bg-transparent flex-1 placeholder:text-[#b1b1b1] text-[#B1B1B1] font-normal text-lg font-rubik outline-none border-none"
                  />
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferExchangeRateBuyer;
