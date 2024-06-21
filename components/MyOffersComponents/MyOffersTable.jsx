import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import MyOffersTableRows from "./MyOffersTableRow";
import { myOffers } from "@/utils/data";

function MyOffersTable() {
  return (
    <Box>
      {/* Transactions Head */}
      <div className="mb-1 h-[27px] w-full bg-black px-4 shadow-md lg:px-6">
        {/* Laptop upward */}
        <div className="hidden h-full py-1 lg:grid lg:grid-cols-12 xl:grid-cols-12 ">
          <div className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary flex items-center justify-start lg:col-span-3 xl:col-span-3">
            {/* <p className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary"> */}
            E-wallet Methods
            {/* </p> */}
          </div>
          <div className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary flex items-center justify-start lg:col-span-3 xl:col-span-3">
            {/* <p className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary"> */}
            Labels
            {/* </p> */}
          </div>
          <div className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary flex items-center justify-center lg:col-span-2 xl:col-span-2 ">
            {/* <p className="h-full text-center font-karla text-sm font-semibold capitalize text-secondary"> */}
            status
            {/* </p> */}
          </div>
          <div className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary flex items-center justify-start lg:col-span-2 xl:col-span-2">
            {/* <p className="h-full text-center font-karla text-sm font-semibold capitalize text-secondary"> */}
            Limit & Speed
            {/* </p> */}
          </div>
          <div className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary flex items-center justify-end lg:col-span-2 xl:col-span-2">
            {/* <p className="h-full text-right font-karla text-sm font-semibold capitalize text-secondary"> */}
            Exchange Rate /$
            {/* </p> */}
          </div>
        </div>
        {/* Mobile & Tabs */}
        <div className="flex h-full items-center justify-between lg:hidden">
          <div className="w-full flex items-center justify-start text-left font-karla text-sm font-semibold capitalize text-secondary">
            {/* <p className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary"> */}
            details
            {/* </p> */}
          </div>
          <div className="w-full flex items-center justify-end text-left font-karla text-sm font-semibold capitalize text-secondary">
            {/* <p className="text-right font-karla text-sm font-semibold capitalize text-secondary"> */}
            Rate
            {/* </p> */}
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
          {myOffers.map((data, key) => (
            <MyOffersTableRows data={data} key={key} />
          ))}
        </Stack>
      </div>
    </Box>
  );
}

export default MyOffersTable;
