"use client";
import React, { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { BuyerInfo, OfferTerms } from "..";
import Link from "next/link";
import TermsAndConditionsOffer from "../MarketPlaceComponents/modal/TermsAndConditionsOffer";
import {
  useFetchTermsAndConditionsOffersQuery,
  useFetchUserDetailsQuery,
  useFilterRateOfferQuery,
} from "@/services/apiSlice";
import { toast } from "react-toastify";
import { calculateAmountToRecieve } from "@/utils";

function CalculatePage({ offerId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState({});
  const { data, isError, error, isSuccess, isFetching, isLoading } =
    useFetchTermsAndConditionsOffersQuery(offerId);
  const {
    data: rateData,
    isError: IsErrorRateData,
    error: ErrorRateData,
    isSuccess: IsSuccessRateData,
    isFetching: IsFetchingRateData,
    isLoading: IsLoadingRateData,
  } = useFilterRateOfferQuery();
  console.log({ data, rateData, formValues });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const userDetailsQuery = useFetchUserDetailsQuery(
    isSuccess && data?.response?.data?.uuid
  );

  const {
    data: userData,
    isError: IsErrorUserData,
    error: ErrorUserData,
    isSuccess: IsSuccessUserData,
    isFetching: IsFetchingUserData,
    isLoading: IsLoadingUserData,
  } = userDetailsQuery;
  console.log({ userData });
  // const calculateAmountToRecieve = () => {
  //   return IsSuccessRateData
  //     ? Number(rateData?.data?.rate_normal) * Number(formValues?.amount)
  //     : 0;
  // };
  const calculateAmountToRe = calculateAmountToRecieve(
    IsSuccessRateData && rateData?.data?.rate_normal,
    formValues?.amount
  );
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEmptyObject(formValues) || formValues?.amount == "") {
      console.log("it also snedfej");
      toast.error("Please specify the amount ");
    } else {
      console.log("it enter open");
      handleOpen();
    }
  };
  return (
    <Box className="flex flex-col gap-10">
      {/* Calculate Page */}
      <Box className="flex items-start justify-between">
        <Box className="flex-col">
          <Box className="flex items-center space-x-4 font-rubik">
            <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
              Sell
            </Typography>
            <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
              {isSuccess && data?.response?.data?.ewallet?.ewallet_name}
            </Typography>
          </Box>
          <Typography className="font-karla text-[16px] font-medium text-darkGray">
            Transfer only, verified tag, prove of payment required
          </Typography>
        </Box>{" "}
      </Box>
      {/*  */}
      <div className="flex flex-col items-start space-y-2">
        <div className="flex items-center space-x-2">
          <div className="scale-50 md:hidden">
            <Link href={"/marketplace"} passHref>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="40"
                viewBox="0 0 48 40"
                fill="none"
              >
                <path
                  d="M2.0957 20H46.0957M19.2068 38L2.0957 20L19.2068 38ZM2.0957 20L19.2068 2L2.0957 20Z"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <h3 className=" md:text-[25px] font-bold font-rubik text-secondary ">
            Offer calculator
          </h3>
        </div>
        <Box className="w-full rounded-[10px] gap-4 flex flex-col md:flex-row items-start px-4 py-4 md:px-8 bg-secondary">
          {/*  */}
          <div className="w-full">
            <p className="text-subText font-karla font-normal md:text-lg">
              1 dollar equals
            </p>
            <h3 className="text-secondary font-rubik md:text-[35px] font-bold">
              &#8358; {IsSuccessRateData && rateData?.data?.rate_normal}
            </h3>
          </div>
          {/*  */}
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="w-full space-y-4">
                {/*  */}
                <div className="w-full  flex flex-col space-y-2 items-start">
                  <p className="font-karla text-lightGray font-bold text-sm md:text-lg text-left">
                    Amount to sell
                  </p>
                  <Stack
                    direction={"row"}
                    divider={<Divider color="#737373" orientation="vertical" />}
                    className="w-full flex overflow-hidden items-center h-[54px] rounded-[15px] border-2 border-iconBorder"
                  >
                    <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                      <p className="text-white font-bold font-rubik text-xl">
                        $
                      </p>
                    </div>
                    <div className="flex items-center justify-start flex-1 ">
                      {/*  */}
                      <input
                        type="number"
                        min={10}
                        value={formValues["amount"]}
                        name={"amount"}
                        onChange={handleChange}
                        required
                        placeholder={"100.0"}
                        className="p-4 h-full bg-transparent flex-1 placeholder:text-[#b1b1b1] text-[#B1B1B1] font-normal text-lg font-rubik outline-none border-none"
                      />
                    </div>
                  </Stack>
                </div>
                {/*  */}
                <div className="w-full  flex flex-col space-y-2 items-start">
                  <p className="font-karla text-lightGray font-bold text-sm md:text-lg text-left">
                    Amount to receive
                  </p>
                  <Stack
                    direction={"row"}
                    divider={<Divider color="#737373" orientation="vertical" />}
                    className="w-full flex overflow-hidden items-center h-[54px] rounded-[15px] border-2 border-iconBorder"
                  >
                    <div className=" w-14 h-16 flex justify-center items-center bg-[#181C1F]">
                      <p className="text-white font-bold font-rubik text-xl">
                        #
                      </p>
                    </div>
                    <div className="flex items-center justify-start flex-1 ">
                      {/*  */}
                      <input
                        type="number"
                        min={10}
                        value={calculateAmountToRe}
                        name={"amount_to_recieve"}
                        onChange={handleChange}
                        placeholder={"85000.0"}
                        className="p-4 bg-transparent flex-1 placeholder:text-[#b1b1b1] text-[#B1B1B1] font-normal text-lg font-rubik outline-none border-none"
                      />
                    </div>
                  </Stack>
                </div>
                {/*  */}

                <button
                  type="submit"
                  // onClick={handleOpen}
                  disabled={isEmptyObject(formValues)}
                  className={`w-full rounded-[15px] cursor-pointer ${
                    isEmptyObject(formValues)
                      ? "bg-grayColor"
                      : "bg-primary hover:bg-primary/95 active:bg-primary/95"
                  } transition px-4 py-3 duration-300`}
                >
                  <p className="text-lightGray text-center font-rubik text-[20px] font-medium capitalize">
                    sell now
                  </p>
                </button>
              </div>
            </form>
            <TermsAndConditionsOffer
              data={data}
              isSuccess={isSuccess}
              isFetching={isFetching}
              isLoading={isLoading}
              formDetails={{
                amount: formValues?.amount,
                user: userData?.user?.data?.username,
                amountToRecive: calculateAmountToRe,
                rateData: rateData?.data?.rate_normal,
              }}
              open={open}
              handleClose={handleClose}
            />
          </div>
        </Box>
      </div>

      {/*  */}
      <Box className="w-full gap-4 flex flex-col md:flex-row md:items-start">
        <div className="flex items-start space-y-2 flex-col">
          <h3 className=" md:text-[25px] font-bold font-rubik text-secondary ">
            About this buyer
          </h3>
          <BuyerInfo user={userData?.user?.data?.username} />
        </div>
        <div className="flex items-start space-y-2 flex-col">
          <h3 className=" md:text-[25px] font-bold font-rubik text-secondary ">
            Offer terms and conditions
          </h3>
          <OfferTerms />
        </div>
      </Box>

      {/*  */}
    </Box>
  );
}

export default CalculatePage;
