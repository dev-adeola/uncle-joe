import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import ActiveTransactionRow from "./ActiveTransactionRow";
import { activeTransactions } from "@/utils/data";

function ActiveTransactions() {
  return (
    <Box>
      {/* Transactions Head */}
      <div className="mb-1 h-[27px] w-full bg-black px-4 shadow-md lg:px-6">
        {/* Laptop upward */}
        <div className="hidden h-full py-1 lg:grid lg:grid-cols-12 xl:grid-cols-12 ">
          <div className="h-full flex lg:col-span-2 xl:col-span-2">
            <p className="w-full flex items-center  h-full text-left font-karla text-sm font-semibold capitalize text-secondary">
              payment methods
            </p>
          </div>
          <div className="h-full flex lg:col-span-2 xl:col-span-2">
            <p className="w-full flex items-center  h-full text-left font-karla text-sm font-semibold capitalize text-secondary">
              counterparty
            </p>
          </div>
          <div className="h-full flex lg:col-span-4 xl:col-span-4">
            <p className="w-full flex items-center justify-center  h-full text-center font-karla text-sm font-semibold capitalize text-secondary">
              amount
            </p>
          </div>
          <div className="h-full flex lg:col-span-2 xl:col-span-2">
            <p className="w-full flex items-center   text-left font-karla text-sm font-semibold capitalize text-secondary">
              status
            </p>
          </div>
          <div className="h-full flex lg:col-span-2 xl:col-span-2"></div>
        </div>
        {/* Mobile & Tabs */}
        <div className="flex h-full w-full items-center justify-between lg:hidden">
          <div className=" w-full">
            <p className="w-full flex items-center  h-full text-left font-karla text-sm font-semibold capitalize text-secondary">
              details
            </p>
          </div>
          <div className=" w-full">
            <p className="w-full flex items-center justify-end text-right font-karla text-sm font-semibold capitalize text-secondary">
              status
            </p>
          </div>
        </div>
      </div>
      {/* Transactions Details */}

      <div className="overflow-y-auto">
        <Stack
          divider={
            <Divider orientation="horizontal" className="h-1" color="#181C1F" />
          }
          className="h-full w-full overflow-y-auto"
        >
          {activeTransactions.map((data, key) => (
            <ActiveTransactionRow data={data} key={key} />
          ))}
        </Stack>
      </div>
    </Box>
  );
}

export default ActiveTransactions;
