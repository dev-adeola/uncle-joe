import { Avatar } from "@mui/material";
import React from "react";

function BuyerInfo({ user }) {
  return (
    <div className="mx-auto flex w-full min-w-[320px] flex-col space-y-2 rounded border-2 border-secondary bg-bgColor ">
      {/* Avatar */}
      <div className="flex w-full space-x-4 px-6 py-4 xl:px-8">
        <Avatar
          alt="Remy Sharp"
          className="w-9 h-9 md:h-[52px] md:w-[52px]"
          src="/assets/avatar.png"
        />

        <div className="flex flex-col">
          <p className="space-x-2 text-sm md:text-xl font-medium font-karla  text-secondary">
            {user}
          </p>
          <p className="text-[10px] md:text-sm font-rubik font-normal text-secondary">
            Response <strong> in 3 minutes</strong>
          </p>
        </div>
      </div>

      {/* Success story */}
      <div className="flex w-full items-start justify-between space-x-4 bg-secondary px-6 py-3 xl:px-8">
        <div className="flex w-full flex-col space-y-1">
          <p className=" text-xs md:text-sm font-extrabold font-rubik text-white">
            136
          </p>
          <p className="text-[10px] md:text-xs font-karla font-normal text-[#a6a6a6]">
            Orders
          </p>
        </div>
        <div className="flex w-full flex-col space-y-1">
          <p className=" text-xs md:text-sm font-extrabold font-rubik text-white">
            100%
          </p>
          <p className="text-[10px] md:text-xs font-karla font-normal text-[#a6a6a6]">
            Completion rate
          </p>
        </div>
        <div className="flex w-full flex-col space-y-1">
          <p className=" text-xs md:text-sm font-extrabold font-rubik text-white">
            90%
          </p>
          <p className="text-[10px] md:text-xs font-karla font-normal text-[#a6a6a6]">
            Positive
          </p>
        </div>
      </div>

      {/* Verifications */}
      <div className=" w-full space-y-4 px-6 py-4 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M1.53516 5.32353L4.65617 8.12375L10.8982 1.56201"
                  stroke="#3E9F4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs md:text-sm font-karla font-normal text-[#a6a6a6]">
              ID verified
            </p>
          </div>
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M1.53516 5.32353L4.65617 8.12375L10.8982 1.56201"
                  stroke="#3E9F4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs md:text-sm font-karla font-normal text-[#a6a6a6]">
              Address verified
            </p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M1.53516 5.32353L4.65617 8.12375L10.8982 1.56201"
                  stroke="#3E9F4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs md:text-sm font-karla font-normal text-[#a6a6a6]">
              Email verified
            </p>
          </div>
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
              >
                <path
                  d="M1.53516 5.32353L4.65617 8.12375L10.8982 1.56201"
                  stroke="#3E9F4D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="text-xs md:text-sm font-karla font-normal text-[#a6a6a6]">
              Phone verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerInfo;
