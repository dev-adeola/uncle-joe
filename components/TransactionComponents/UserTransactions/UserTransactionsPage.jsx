"use client";
import React, { useState } from "react";
import UserTransactionTabs from "./UserTransactionTabs";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { CustomTabPanel, a11yProps } from "@/components/CustomPanel";
import MyOfferBuyerTableOffer from "@/components/MyOffersComponents/OfferTableBuyer";
import UserTransactionTables from "./UserTransactionTables";
import {
  useFetchTransactionsQuery,
  useFilterRateOfferQuery,
} from "@/services/apiSlice";

function UserTransactionsPage() {
  const { data, isError, error, isSuccess, isFetching, isLoading } =
    useFetchTransactionsQuery();

  console.log({ data, error });
  const {
    data: rateData,
    isError: IsErrorRateData,
    error: ErrorRateData,
    isSuccess: IsSuccessRateData,
    isFetching: IsFetchingRateData,
    isLoading: IsLoadingRateData,
  } = useFilterRateOfferQuery();
  const [value, setValue] = useState(0);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {/* <UserTransactionTabs /> */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Active Transaction" {...a11yProps(0)} />
            <Tab label="Past Transaction" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {" "}
          {/* Wallet buying and selling */}
          {/* Available Offers */}
          <Box className="w-full pt-4 overflow-x-auto">
            {/* <Typography className="mb-4 text-2xl font-semibold capitalize text-white">
              available offers
            </Typography>{" "} */}
            <UserTransactionTables
              dataTransac={data}
              IsSuccess={isSuccess}
              IsFetching={isFetching}
              IsLoading={isLoading}
              // getEWalletName={getEWalletName}
              rateData={rateData}
              IsSuccessRateData={IsSuccessRateData}
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {" "}
          {/* Wallet buying and selling */}
          {/* Available Offers */}
          <Box className="w-full pt-4 overflow-x-auto">
            <Typography className="mb-4 text-2xl font-semibold capitalize text-white">
              available offers
            </Typography>

            <UserTransactionTables
              dataTransac={data}
              IsSuccess={isSuccess}
              IsFetching={isFetching}
              IsLoading={isLoading}
              // getEWalletName={getEWalletName}
              rateData={rateData}
              IsSuccessRateData={IsSuccessRateData}
            />
          </Box>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default UserTransactionsPage;
