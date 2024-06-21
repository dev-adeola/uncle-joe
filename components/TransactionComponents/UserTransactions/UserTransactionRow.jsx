import { Avatar } from "@mui/material";
import Link from "next/link";
import React from "react";

function UserTransactionRow({ data }) {
  return (
    <>
      {/* Phone */}
      <div className="flex flex-col space-y-4 bg-secondary px-5 py-4 lg:hidden ">
        {/*  */}
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img
                src={data?.paymentMethod.logo}
                alt={data?.paymentMethod?.name}
                className="h-[22px] w-[22px] rounded-full"
              />
              <p className="font-karla text-sm font-bold capitalize text-lightGray">
                {data?.paymentMethod?.name}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Avatar
                src={data?.counterParty.avatar}
                alt={data?.counterParty.name}
                className="h-[20px] w-[20px] rounded-full"
              />
              <p className="font-karla text-sm font-bold capitalize text-subText">
                {data?.counterParty.name}
              </p>
            </div>
          </div>
          <div>
            <p className="text-right font-karla text-[16px] font-bold capitalize text-[#816F38]">
              {data?.status}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-1">
              <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                rate :
              </p>
              <p className="font-karla text-[10px] font-normal text-lightGray ">
                {data?.amount.rate.currency} {data?.amount.rate.value}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                Amount to Send :
              </p>
              <p className="font-karla text-[10px] font-normal text-lightGray ">
                {data?.amount.amountToSend.currency}{" "}
                {data?.amount.amountToSend.value}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                Amount to Receive : 
              </p>
              <p className="font-karla text-[10px] font-normal text-lightGray ">
                {data?.amount.amountToReceive.currency}{" "}
                {data?.amount.amountToReceive.value}
              </p>
            </div>
          </div>
          <Link href={"/transaction/id"} passHref>
            <div className="flex h-[25px] w-[90px] cursor-pointer items-center justify-center rounded-[3px] bg-primary transition duration-300 hover:opacity-90 active:opacity-90">
              <p className="text-center font-karla text-[16px] font-bold text-white">
                View
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-center bg-secondary px-6 py-4 lg:grid lg:grid-cols-12 xl:grid-cols-12">
        <div className="lg:col-span-2 xl:col-span-2">
          <div className="flex items-center space-x-2">
            <Avatar
              src={data?.paymentMethod.logo}
              alt={data?.paymentMethod?.name}
              className="h-[32px] w-[32px] rounded-full"
            />
            <p className="font-karla text-[16px] font-bold capitalize text-lightGray">
              {data?.paymentMethod?.name}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-2">
          <div className="flex items-center space-x-2">
            <Avatar
              src={data?.counterParty.avatar}
              alt={data?.counterParty?.name}
              className="h-[30px] w-[30px] rounded-full"
            />
            <p className="font-karla text-[16px] font-medium capitalize text-subText">
              {data?.counterParty?.name}
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 xl:col-span-4">
          <div className="flex items-center justify-center space-x-2">
            <div className=" flex flex-col items-end justify-center space-y-1 ">
              <div className="h-6 ">
                <p className="h-full  py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                  rate
                </p>
              </div>
              <div className="h-6">
                <p className="h-full py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                  amount to send
                </p>
              </div>
              <div className="h-6">
                <p className="h-full py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                  amount to receive
                </p>
              </div>
            </div>
            <div className=" flex flex-col items-start justify-center space-y-1 ">
              <div className="h-6 ">
                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                  {data?.amount.rate.currency} {data?.amount.rate.value}
                </p>
              </div>
              <div className="h-6">
                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                  {data?.amount.amountToSend.currency}{" "}
                  {data?.amount.amountToSend.value}
                </p>
              </div>
              <div className="h-6">
                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                  {data?.amount.amountToReceive.currency}{" "}
                  {data?.amount.amountToReceive.value}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 xl:col-span-2 ">
          <p className="w-full text-left font-karla text-[16px] font-bold text-lightGray ">
            {data?.status}
          </p>
        </div>

        <div className="lg:col-span-2 xl:col-span-2">
          <div className="flex justify-end">
            <div className="flex h-[30px] w-[100px] cursor-pointer items-center justify-center rounded-[3px] bg-primary transition duration-300 hover:opacity-90 active:opacity-90">
              <p className="text-center font-karla text-lg font-bold text-white">
                Action
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserTransactionRow;
