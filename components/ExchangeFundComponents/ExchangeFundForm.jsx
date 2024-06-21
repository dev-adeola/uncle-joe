"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TextField,
  Divider,
  Autocomplete,
  Input,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { applicableTags } from "@/utils/data";
import { Refresh, Send, SwapHoriz } from "@mui/icons-material";

const BorderlessTextField = styled(TextField)({
  "& input:valid + fieldset": {
    border: "none",
  },
  "& input:invalid + fieldset": {
    border: "none",
  },
  "& input:valid:focus + fieldset": {
    border: "none",
  },
});

const BorderlessSelect = styled(Select)({
  border: "none",
  "&:valid + fieldset": {
    border: "none",
  },
  "&:invalid + fieldset": {
    border: "none",
  },
  "&:valid:focus + fieldset": {
    border: "none",
  },
});

function ExchangeFundForm() {
  const [eWallet, setEWallet] = useState("");
  const [currency, setCurrency] = useState("USD");

  const handleChangeWalletPlatform = (event) => {
    setEWallet(event.target.value);
  };
  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      fullWidth
      className="space-y-8 bg-[#F7F7F7] px-4 py-4 text-[#333333] md:px-6 lg:px-8"
    >
      <Stack
        direction={"row"}
        spacing={1}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <div className="w-full space-y-4">
          <p className="text-lg font-medium">Amount to sell</p>
          <FormControl fullWidth>
            <Stack
              direction={"row"}
              gap={1}
              className="rounded border border-gray-300"
            >
              <BorderlessTextField
                placeholder="Amount to sell"
                id="amount-to-sell"
                variant="outlined"
                className="h-full px-1"
                fullWidth
                type="number"
              />
              <Divider orientation="vertical" flexItem />
              <BorderlessSelect
                className="h-full"
                variant="outlined"
                border="none"
                labelId="amount-select"
                id="amount-select"
                value={currency}
                onChange={handleChangeCurrency}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"GBP"}>GBP</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"NGN"}>NGN</MenuItem>
              </BorderlessSelect>
            </Stack>
          </FormControl>
        </div>
        <div className="space-y-6">
          <p className="text-lg font-medium"></p>
          <SwapHoriz className="h-14 w-14 p-1 font-bold" />
        </div>
        <div className="w-full space-y-4">
          <p className="text-lg font-medium">Amount</p>
          <FormControl fullWidth>
            <Stack
              direction={"row"}
              gap={1}
              className="rounded border border-gray-300"
            >
              <BorderlessTextField
                placeholder="Amount"
                id="amount-to-sell"
                variant="outlined"
                className="h-full px-1"
                fullWidth
                type="number"
              />
              <Divider orientation="vertical" flexItem />
              <BorderlessSelect
                className="h-full"
                variant="outlined"
                border="none"
                labelId="amount-select"
                id="amount-select"
                value={currency}
                onChange={handleChangeCurrency}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"GBP"}>GBP</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"NGN"}>NGN</MenuItem>
              </BorderlessSelect>
            </Stack>
          </FormControl>
        </div>
      </Stack>

      <Box>
        <div className="flex flex-col space-y-4">
          <p className="text-lg font-medium">Select bank account</p>
          <FormControl fullWidth>
            <Select
              placeholder="Select bank account"
              fullWidth
              labelId="select-bank"
              id="select-bank"
              // onChange={handleChangeWalletPlatform}
            >
              <MenuItem value={"payoneer"}>Payoneer</MenuItem>
              <MenuItem value={"paypal"}>Paypal</MenuItem>
              <MenuItem value={"skrull"}>Skrull</MenuItem>
              <MenuItem value={"wise"}>Wise</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Box>

      <Button
        className="mt-4 bg-primary text-xl font-semibold capitalize"
        endIcon={<Send />}
        size="large"
        variant="contained"
        fullWidth
      >
        Sell now
      </Button>
    </Box>
  );
}

export default ExchangeFundForm;
