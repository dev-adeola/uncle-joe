"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import TransactionChat from "./TransactionChat";
import TransactionDetails from "./TransactionDetails";

function Transactions() {
  const [activeMobileTab, setActiveMobileTab] = useState(1);
  return (
    <Box className="w-full h-full mx-auto bg-[#181C1F]">
      {/* DESKTOP */}
      <Box className=" h-full hidden md:flex items-stretch justify-center">
        <TransactionChat />
        <TransactionDetails />
      </Box>

      {/* MOBILE */}
      <Box className="md:hidden max-h-full flex flex-col h-full ">
        {/*  */}
        <Box className="w-full h-[40px] flex items-center justify-between">
          <div
            onClick={() => setActiveMobileTab(0)}
            className={`w-full h-full px-3 py-4 flex items-center justify-center font-rubik text-xs uppercase text-center font-medium text-white ${
              activeMobileTab === 0 ? "bg-primary" : "bg-secondary"
            }`}
          >
            transaction status
          </div>
          <div
            onClick={() => setActiveMobileTab(1)}
            className={`w-full h-full px-3 py-4 flex items-center justify-center font-rubik text-xs uppercase text-center font-medium text-white ${
              activeMobileTab === 1 ? "bg-primary" : "bg-secondary"
            }`}
          >
            order details
          </div>
        </Box>
        {/*  */}
        <Box className="flex-1 h-[calc(100%-40px)] max-h-[calc(100%-40px)] flex">
          {activeMobileTab === 0 ? <TransactionChat /> : <TransactionDetails />}
        </Box>
      </Box>
    </Box>
  );
}

export default Transactions;
