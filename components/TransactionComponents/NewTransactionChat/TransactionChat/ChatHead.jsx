"use client";

import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useGetUpdate from "./useGetUpdate";

const status = ["makePayment", "confirmAndPay", "completed", "cancelled"];

const transactionStatuses = [
  {
    info: "The order is created , Please go through the instruction",
    title: "Make Payment",
    class: "#816F38",
  },
  {
    info: "<Femiivictor> will complete this traction after confirming your payment ",
    title: "Awaiting confirmation",
    class: "#576186",
  },
  {
    info: "Your payment has been released and added to your account balance",
    title: "Completed",
    class: "#00B172",
  },
  {
    info: "This transaction has been canceled and Ratefy escrow has refunded the amount held.",
    title: "Canceled",
    class: "#505050",
  },
];

function ChatHead(headStatus) {
  const params = useParams();
  const { getUpdate, loading, decidePage } = useGetUpdate(params.acceptance_id + '-' + params.session_id);
  const [index, setIndex] = useState(1);
  useEffect(() => {
        
    if(headStatus.status.proof_of_payment === "void") {
        setIndex(0)
    }else {
        if(headStatus.status.proof_of_payment_status === "accept") {
            setIndex(2)
        }else {
            setIndex(1)
        }
       
    }
}, [index]);

  return (
    <>
      <Box className="w-full" bgcolor={transactionStatuses[index].class}>
        <Box className="w-full md:space-y-2 h-fit max-h-[130px] text-white p-4 md:px-8 ">
          <div className="hidden md:block ">
            <p className="uppercase text-sm font-medium font-rubik">
              transaction status
            </p>
          </div>
          <div className="flex w-full h-full items-center ">
            {/*  */}
            <div className="space-y-2 w-full flex-1">
              <p className="capitalize text-[20px] font-bold font-rubik">
                {transactionStatuses[index].title}
              </p>
              <p className="max-w-[220px] text-xs font-karla font-medium md:text-sm">
                {transactionStatuses[index].info}
              </p>
            </div>
            {/*  */}
            <div className="items-center flex space-x-2 text-black">
              <div className="w-[23px] h-[23px] rounded-[3px] bg-white text black justify-center items-center flex">
                <p>1</p>
              </div>
              <div className="w-[23px] h-[23px] rounded-[3px] bg-white text black justify-center items-center flex">
                <p>2</p>
              </div>
              <div className="h-[23px] rounded-[3px]">
                <p className="text-semibold">:</p>
              </div>
              <div className="w-[23px] h-[23px] rounded-[3px] bg-white text black justify-center items-center flex">
                <p>4</p>
              </div>
              <div className="w-[23px] h-[23px] rounded-[3px] bg-white text black justify-center items-center flex">
                <p>5</p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default ChatHead;
