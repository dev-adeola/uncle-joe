"use client";

import {
  BuyerInfo,
  ExchangeFundForm,
  OfferAgreement,
} from "@/components";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function SellFundPage() {
  return (
    <Box className="flex flex-col gap-8">
      <Box>
        <Box className="mb-8 flex items-center justify-between">
          <Box className="flex-col space-y-4">
            <Box className="flex items-center space-x-4">
              <Typography className="text-3xl font-bold text-white lg:text-5xl ">
                Sell
              </Typography>
              <Typography className="text-gradient text-3xl font-bold text-white lg:text-5xl">
                Payoneer
              </Typography>
            </Box>
            <Typography className="text-lg font-medium text-darkGray">
              Transfer only, verified tag, prove of payment required
            </Typography>
          </Box>
          <Box className="flex-col space-y-4">
            <Typography className="text-xl font-medium text-darkGray">
              Exchange
            </Typography>

            <Typography className="text-xl font-bold text-white lg:text-5xl ">
              #890 / $
            </Typography>
          </Box>
        </Box>
        <ExchangeFundForm />
      </Box>
      {/* About Buyer & Offers TAC */}
      <Box className="flex flex-col items-start space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <Box width={"100%"}>
          <Typography className="mb-4 text-2xl font-semibold text-secondary">
            About this buyer
          </Typography>
          <BuyerInfo />
        </Box>
        <Box width={"100%"}>
          <Typography className="mb-4 text-2xl font-semibold text-secondary">
            Offers terms and conditions
          </Typography>
          <OfferAgreement />
        </Box>
      </Box>
      <Box className="">
        <Button
          variant="contained"
          size="large"
          color="primary"
          className="bg-primary py-6 text-lg font-semibold capitalize"
          fullWidth
        >
          Agree and Continue
        </Button>
      </Box>
    </Box>
  );
}

export default SellFundPage;
