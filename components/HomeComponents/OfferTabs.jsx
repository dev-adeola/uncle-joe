"use client";

import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { BuyOffer, PostOffer, SellOffer } from "..";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function OfferTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="ratefy e-wallet marketplace"
            className="flex w-full justify-between space-x-2 lg:w-3/5"
          >
            <Tab
              label="Sell"
              value="1"
              className={" bg-secondary px-12 text-white"}
            />
            <Tab
              label="Buy"
              value="2"
              className="bg-secondary px-12 text-white"
            />
            <Tab
              label="Post Offer"
              value="3"
              className="bg-secondary px-12 text-white"
            />
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1" className="p-0">
            <SellOffer />
          </TabPanel>
          <TabPanel value="2" className="p-0">
            <BuyOffer />
          </TabPanel>
          <TabPanel value="3" className="p-0">
            <PostOffer />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
