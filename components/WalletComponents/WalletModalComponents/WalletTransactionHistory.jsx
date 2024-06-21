import { Box } from "@mui/material";
import React from "react";
import WalletTransactionHistoryRow from "./WalletTransactionHistoryRow";

function WalletTransactionHistory() {
  return (
    <Box className="w-full border-[0.5px] ">
      {/* Head */}
      <div className="h-[24px] md:h-[30px] xl:h-[37px] grid grid-cols-12 gap-3 md:gap-4 xl:gap-6 px-4 border-b-[0.5px] xl:px-6 items-center justify-between bg-[#1C2225]">
        <p className =" text-left col-span-6 lg:col-span-4 capitalize font-karla text-lg font-bold text-white">
          {" "}
          activity
        </p>
        <p className=" text-right lg:text-left col-span-6 lg:col-span-3 capitalize  font-karla text-lg font-bold text-white">
          {" "}
          details
        </p>
        <p className=" text-right hidden lg:block col-span-6 lg:col-span-2 capitalize  font-karla text-lg font-bold text-white">
          {" "}
          status
        </p>
        <p className=" text-right hidden lg:block col-span-6 lg:col-span-3 capitalize  font-karla text-lg font-bold text-white">
          {" "}
          amount
        </p>
      </div>
      {/*  */}
      <div className="w-full space-y-[0.75px] bg-[#333]">
        {/*  */}
        <WalletTransactionHistoryRow />
        <WalletTransactionHistoryRow />
        <WalletTransactionHistoryRow />
      </div>
    </Box>
  );
}
export default WalletTransactionHistory;
