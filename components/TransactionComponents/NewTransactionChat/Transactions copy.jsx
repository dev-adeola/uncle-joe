"use client";

import { Box } from "@mui/material";
import React, { useState } from "react";
import TransactionChat from "./TransactionChat";
import TransactionDetails from "./TransactionDetails";

function Transactions() {
  const [activeMobileTab, setActiveMobileTab] = useState(1);
  return (
    <Box className=" w-full mx-auto h-full max-h-full border-yellow border-2 flex flex-col bg-[#181C1F]">
      {/*  */}
      <Box className="flex-1 border-4 border-purple-500">
        {/* DESKTOP */}
        <Box className="hidden border-2 border-primary max-h-full md:flex items-start justify-center">
          <TransactionChat />
          <TransactionDetails />
        </Box>

        {/* MOBILE */}
        <Box className="md:hidden max-h-max h-full border-4 border-primary">
          <Box className="w-full h-[40px] flex items-center justify-between">
            <div
              onClick={() => setActiveMobileTab(0)}
              className={`w-full h-full px-3 py-2 flex items-center justify-center font-rubik text-xs uppercase text-center font-medium text-white ${
                activeMobileTab === 0 ? "bg-primary" : "bg-secondary"
              }`}
            >
              transaction status
            </div>
            <div
              onClick={() => setActiveMobileTab(1)}
              className={`w-full h-full px-3 py-2 flex items-center justify-center font-rubik text-xs uppercase text-center font-medium text-white ${
                activeMobileTab === 1 ? "bg-primary" : "bg-secondary"
              }`}
            >
              order details
            </div>
          </Box>
          {activeMobileTab === 0 ? <TransactionChat /> : <TransactionDetails />}
        </Box>
      </Box>
    </Box>
  );
}

export default Transactions;
