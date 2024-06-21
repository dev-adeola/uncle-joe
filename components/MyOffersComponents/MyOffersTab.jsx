"use client";

import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { MyOffer, MyOfferTab, PostOffer } from "..";
import MyOffersTable from "./MyOffersTable";

export default function MyOffersTab() {
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
              label="Offer to Sell"
              value="1"
              className={" bg-secondary px-12 text-white"}
            />
            <Tab
              label="Offer to Buy"
              value="2"
              className="bg-secondary px-12 text-white"
            />
            <Tab
              label="Create new Offer"
              value="3"
              className="bg-secondary px-12 text-white"
            />
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1" className="p-0">
            <MyOffersTable offerType={"sell"} />
          </TabPanel>
          <TabPanel value="2" className="p-0">
            <MyOffersTable offerType={"buy"} />
          </TabPanel>
          <TabPanel value="3" className="p-0">
            <PostOffer />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
}
