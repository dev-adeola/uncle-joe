"use client";

import React, { useState } from "react";
import { Unstable_Popup as Popup } from "@mui/base/Unstable_Popup";

function TransactionPopup({ label, open, id, anchor }) {
  return (
    <Popup className='z-[500000000000]' placement={'top'} id={id} open={open} anchor={anchor}>
      {label === "insufficient" ? <InsufficientFund /> : <ConfirmationNote />}
    </Popup>
  );
}

export default TransactionPopup;

export const InsufficientFund = () => {
  return (
    <div className="z-[1000000000000] flex h-fit w-fit flex-col items-center justify-center gap-3 rounded-sm bg-black p-8 text-white md:gap-4">
      <p className="text-center font-karla text-lg font-bold md:text-[25px]">
        Insufficient Fund!
      </p>
      <p className="max-w-[180px] text-center font-karla text-[25px] text-xs font-bold">
        Add money to your balance for Ratefy escrow to fund this trade
      </p>
    </div>
  );
};

export const ConfirmationNote = () => {
  return (
    <div className="z-[1000000000000] flex h-fit w-fit flex-col items-center justify-center gap-3 rounded-sm bg-black p-8 text-white  md:justify-start md:gap-4">
      <p className="text-center font-karla text-lg font-bold md:text-[25px]">
        Confirmation note
      </p>
      <p className="max-w-[180px] text-center font-karla text-[25px] text-xs font-bold">
        Canceling this order request will affect your order completion rate
        which might discourage people from initiating a transaction with you.
      </p>
      <div className="flex h-[26px] w-[105px] cursor-pointer items-center justify-center rounded-sm bg-danger transition duration-300 hover:opacity-90 active:opacity-90 lg:h-[38px] lg:w-[160px]">
        <p className="text-center  font-karla text-xs font-bold capitalize  text-white lg:text-[16px]">
          Reject trade
        </p>
      </div>
    </div>
  );
};
