"use client";

import { NavigateNext } from "@mui/icons-material";
import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MyOffersTable from "./MyOffersTable";
import Link from "next/link";
import {
  useFetchBuyerOffersQuery,
  useFetchSellerOffersQuery,
  useFilterRateOfferQuery,
} from "@/services/apiSlice";
import MyOfferBuyerTableOffer from "./OfferTableBuyer";
import MyOfferSellerTableOffer from "./OfferTableSeller";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function MyOfferPage() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [value, setValue] = useState(0);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data, isError, error, isSuccess, isFetching, isLoading } =
    useFetchSellerOffersQuery();
  const {
    data: dataBuyer,
    isError: IsErrors,
    error: ErrorBuyerOffer,
    isSuccess: IssuccessBuyerOffer,
    isFetching: IsFetching,
    isLoading: IsloadingBuyerOffer,
  } = useFetchBuyerOffersQuery();
  console.log({ data, error, ErrorBuyerOffer, dataBuyer });
  const {
    data: rateData,
    isError: IsErrorRateData,
    error: ErrorRateData,
    isSuccess: IsSuccessRateData,
    isFetching: IsFetchingRateData,
    isLoading: IsLoadingRateData,
  } = useFilterRateOfferQuery();
  return (
    <Box className="flex flex-col md:gap-4 gap-2 lg:gap-8">
      {/*  */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex-col">
            <Box className="flex items-center space-x-4 font-rubik">
              <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
                My
              </Typography>
              <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
                Offers
              </Typography>
            </Box>
            <Typography className="font-karla text-[16px] font-medium text-darkGray">
              Buy or sell e-wallet funds with peers on Ratefy
            </Typography>
          </Box>{" "}
        </Box>
      </Box>
      {/*  */}
      <div className="flex items-center space-x-8">
        <Box
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleClick}
          className="flex h-[25px] md:h-[28px] w-[90px] max-w-[90px] md:w-[126px] md:max-w-[126px] cursor-pointer items-center justify-between rounded-[5px] border border-[#a9a9a9] p-2  md:px-4"
        >
          <p className="font-rubik text-xs font-medium text-lightGray">
            Filter
          </p>
          <p className="text-lightGray">
            <NavigateNext fontSize="medium" />
          </p>
        </Box>
        <Menu
          className="w-full"
          id="basic-menu"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Stack
            direction={"column"}
            divider={<Divider color="#272727" orientation="horizontal" />}
            className="h-fit w-[90px] max-w-[90px] md:w-[127px] md:max-w-[127px] cursor-pointer overflow-y-auto rounded-[5px] bg-black p-1 "
          >
            {["Buy Offers", "Sell Offers", "All Offers"].map((label) => (
              <MenuItem key={label}>
                <div className="">
                  <p className="font-rubik text-xs font-medium text-secondary ">
                    {label}
                  </p>
                </div>
              </MenuItem>
            ))}
          </Stack>
        </Menu>

        {/* Post Offer */}
        <Link href={"/create-offer"} passHref>
          <div className="flex h-[25px] w-[128px] md:h-[28px]  md:w-[141px] cursor-pointer items-center justify-center rounded-[10px] border md:border-2 border-[#464646] bg-secondary">
            <p className="font-rubik text-xs font-medium uppercase text-lightGray">
              create new offer
            </p>
          </div>
        </Link>
      </div>

      {/*  */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sell" {...a11yProps(0)} />
            <Tab label="Buy" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {" "}
          {/* Wallet buying and selling */}
          {/* Available Offers */}
          <Box className="w-full pt-4 overflow-x-auto">
            <Typography className="mb-4 text-2xl font-semibold capitalize text-white">
              available offers
            </Typography>{" "}
            <MyOfferSellerTableOffer
              dataSellerOffer={data}
              IsSuccessSellerOffer={isSuccess}
              IsFetchingSellerOffer={isFetching}
              IsLoadingSellerOffer={isLoading}
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

            <MyOfferBuyerTableOffer
              dataSellerOffer={dataBuyer}
              IsSuccessSellerOffer={IssuccessBuyerOffer}
              IsFetchingSellerOffer={IsFetching}
              IsLoadingSellerOffer={IsloadingBuyerOffer}
              // getEWalletName={getEWalletName}
              rateData={rateData}
              IsSuccessRateData={IsSuccessRateData}
            />
          </Box>
        </CustomTabPanel>
      </Box>
      {/* <Box>
        <MyOffersTable />
      </Box> */}
    </Box>
  );
}

export default MyOfferPage;
