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
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { applicableTags } from "@/utils/data";
import { Refresh } from "@mui/icons-material";

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

function BuyOffer() {
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
      className="text-secondary bg-white px-4 py-4 md:px-6 lg:px-8"
    >
      <Stack direction={"row"} spacing={4} alignItems="center">
        <div className="w-full space-y-4">
          <p className="text-md text-secondary">Select e-wallet</p>
          <FormControl fullWidth>
            <InputLabel id="e-wallet-platform">E-wallet</InputLabel>
            <Select
              fullWidth
              labelId="e-wallet-select"
              id="e-wallet-select"
              value={eWallet}
              label="E-wallet"
              onChange={handleChangeWalletPlatform}
            >
              <MenuItem value={"payoneer"}>Payoneer</MenuItem>
              <MenuItem value={"paypal"}>Paypal</MenuItem>
              <MenuItem value={"skrull"}>Skrull</MenuItem>
              <MenuItem value={"wise"}>Wise</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="w-full space-y-4">
          <p className="text-md text-secondary">Amount</p>
          <FormControl fullWidth>
            {/* <InputLabel id="amount" fullWidth>Amount in ({currency})</InputLabel> */}
            <Box className="py-auto h-fulll flex flex-row rounded-md border-2">
              <BorderlessTextField
                id="amount-input"
                variant="outlined"
                className="h-full px-2"
                fullWidth
              />
              <Divider orientation="vertical" flexItem />
              <BorderlessSelect
                className="h-full px-2"
                variant="outlined"
                border="none"
                labelId="amount-select"
                id="amount-select"
                value={currency}
                label="Amount"
                onChange={handleChangeCurrency}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"GBP"}>GBP</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
                <MenuItem value={"NGN"}>NGN</MenuItem>
              </BorderlessSelect>
            </Box>
          </FormControl>
        </div>
      </Stack>
      <Box mt={2}>
        <p className="text-md text-secondary">Applicable Labels</p>
        <Autocomplete
          fullWidth
          multiple
          limitTags={3}
          id="multiple-limit-tags"
          options={applicableTags}
          className="capitalize"
          renderInput={(params) => (
            <TextField {...params} placeholder="Select all application tags" />
          )}
        />
      </Box>
      <Button className="bg-primary mt-4 capitalize" endIcon={<Refresh />} size="large" variant="contained" fullWidth >
        Find Offers
      </Button>
    </Box>
  );
}

export default BuyOffer;
