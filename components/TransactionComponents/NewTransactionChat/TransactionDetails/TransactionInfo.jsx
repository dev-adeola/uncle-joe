import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Divider, Stack } from "@mui/material";
import useDetail from "../TransactionChat/useDetail";

export default function TransactionInfo(info) {

  const { detail } = useDetail(info?.info?.data.response?.data.uuid);
  return (
    <Box className="h-fit w-full">
      <Box className=" flex w-full items-center justify-start space-x-4 bg-[#1C2124] px-4 py-2 md:space-x-6 xl:space-x-8 md:px-6 xl:px-8 md:py-4">
        <Avatar className="h-[31px] w-[31px]" />
        <div className="flex flex-col space-y-1 md:space-y-2">
          <p className="font-karla text-xs font-medium text-white md:text-[16px]">
            {detail?.data.user?.data.username}
          </p>
          <div className="flex space-x-4 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                136
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Orders
              </p>
            </div>
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                100%
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Completion
              </p>
            </div>
            <div className="flex flex-col md:space-y-1">
              <p className="lg:text-[#a6a6a6 font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-bold">
                90%
              </p>
              <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                Positive
              </p>
            </div>
          </div>
        </div>
      </Box>
      <Stack
        direction={"column"}
        divider={<Divider color="#2D2D2D" orientation="horizontal" flexItem />}
        className="flex flex-col items-end bg-[#181C1F] px-4 py-2 md:px-8 md:py-4"
      >
        <div className="w-full h-auto flex items-start">
          <p className="font-karla text-sm font-normal  text-white md:text-[16px]">
            Transaction Details
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Exchange rate
          </p>
          <p className="text-right font-karla text-[16px] font-semibold text-lightGray">
            #867
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            E-wallet options
          </p>
          <div className="flex items-center space-x-4">
            <img
              src="/assets/icons/payoneer.png"
              alt="payment method "
              className="h-[16px] w-[16px] rounded-full md:h-[18px] md:w-[18px]"
            />
            <p className="text-right font-karla text-sm font-semibold text-lightGray md:text-[16px]">
              {info?.info?.data.response?.data.ewallet.ewallet_name}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Payment option
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
          {info?.info?.data.response?.data.paymentoption.option}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Amount to send
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
            {'$'}{info?.amount}
          </p>
        </div>
        <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-3">
          <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
            Amount to receive
          </p>
          <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
            NGN {info?.toReceive}
          </p>
        </div>
      </Stack>
    </Box>
  );
}
