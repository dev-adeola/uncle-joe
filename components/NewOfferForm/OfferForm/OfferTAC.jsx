"use client";

import { setOfferActiveSection, setOfferTaC } from "@/redux";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

function OfferTAC({
  id,
  handleNewTac,
  newTacTitle,
  setNewTacTitle,
  newTacDetail,
  setNewTacDetail,
  offerTermsAndConditions,
}) {
  return (
    <>
      <div className="h-fit w-full transition-all duration-500 max-w-[1052px] space-y-4 rounded-[10px] bg-secondary p-4  md:p-6">
        {/*  */}
        <p className="text-lg font-karla font-bold text-[#a6a6a6]">
          Offer terms and conditions
        </p>
        {/*  */}
        <div className="w-full flex items-start space-x-2 px-4">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M9 1.0625C7.44248 1.0625 5.91992 1.4987 4.62489 2.31594C3.32985 3.13319 2.32049 4.29477 1.72445 5.65379C1.12841 7.01282 0.972461 8.50825 1.27632 9.95098C1.58018 11.3937 2.3302 12.719 3.43154 13.7591C4.53288 14.7993 5.93607 15.5076 7.46367 15.7946C8.99127 16.0816 10.5747 15.9343 12.0136 15.3714C13.4526 14.8084 14.6825 13.8551 15.5478 12.6321C16.4131 11.409 16.875 9.971 16.875 8.5C16.875 6.52745 16.0453 4.63569 14.5685 3.24089C13.0916 1.84609 11.0886 1.0625 9 1.0625ZM9 14.875C7.66498 14.875 6.35994 14.5011 5.2499 13.8006C4.13987 13.1001 3.27471 12.1045 2.76382 10.9396C2.25293 9.77473 2.11925 8.49293 2.3797 7.2563C2.64015 6.01967 3.28303 4.88375 4.22703 3.99219C5.17104 3.10063 6.37377 2.49347 7.68314 2.24749C8.99252 2.00151 10.3497 2.12776 11.5831 2.61027C12.8165 3.09278 13.8707 3.90988 14.6124 4.95824C15.3541 6.0066 15.75 7.23914 15.75 8.5C15.75 10.1908 15.0388 11.8123 13.773 13.0078C12.5071 14.2034 10.7902 14.875 9 14.875Z"
                fill="#FCD535"
              />
              <path
                d="M8.4375 4.25H9.5625V10.0938H8.4375V4.25ZM9 11.6875C8.83312 11.6875 8.66999 11.7342 8.53124 11.8218C8.39248 11.9094 8.28434 12.0338 8.22048 12.1794C8.15662 12.325 8.13991 12.4853 8.17246 12.6398C8.20502 12.7944 8.28538 12.9364 8.40338 13.0479C8.52138 13.1593 8.67172 13.2352 8.83539 13.2659C8.99906 13.2967 9.16871 13.2809 9.32289 13.2206C9.47706 13.1603 9.60884 13.0581 9.70155 12.9271C9.79427 12.796 9.84375 12.642 9.84375 12.4844C9.84375 12.273 9.75486 12.0703 9.59662 11.9209C9.43839 11.7715 9.22378 11.6875 9 11.6875Z"
                fill="#FCD535"
              />
            </svg>
          </p>
          <p className="text-sm font-normal text-left font-karla text-[#FCD035]">
            Kindly set your terms and conditions for this offer. Please include
            all likely conditions that might occur and set your terms as
            detailed as possible. both parties are bounded by these terms and
            any resolution will be subjected to these terms and conditions.
          </p>
        </div>
        {/*  */}
        <div className="w-full space-y-4">
          {/* ALL TACs */}
          {offerTermsAndConditions?.map((data, key) => (
            <div
              key={data.title + key}
              className="flex flex-col space-y-1 w-full"
            >
              <div className="rounded-sm bg-[#1C2225] px-4 py-2 h-[35px] w-full flex items-center space-x-4 justify-start">
                <p className="font-karla font-bold text-[16px] text-white">
                  {data.id}.{" "}
                </p>
                <p className="font-karla font-bold text-sm text-[#A6A6A6]">
                  {data.title}
                </p>
              </div>
              {/*  */}
              <div className="rounded-sm bg-[#1C2225] p-4 md:py-6 h-full w-full flex items-start space-x-4 justify-start">
                <p className="font-karla font-bold text-sm text-[#A6A6A6] w-full h-full">
                  {data.condition}
                </p>
              </div>
            </div>
          ))}

          {/* NEW TAC */}
          <div className="flex flex-col space-y-1 w-full">
            <div className="rounded-sm bg-[#1C2225] px-4 py-2 h-[35px] w-full flex items-center space-x-4 justify-start">
              <p className="font-karla font-bold text-[16px] text-white">
                {offerTermsAndConditions?.length + 1}.
              </p>
              {/* <p className="font-karla font-bold text-sm text-[#A6A6A6]">
                    Offer Expiration
                  </p> */}
              <input
                value={newTacTitle}
                onChange={(e) => setNewTacTitle(e.currentTarget.value)}
                type="text"
                name="title"
                className="w-full h-full border-none outline-none bg-transparent font-karla font-bold text-sm text-[#A6A6A6] placeholder:text-[#a6a6a6]"
                placeholder="Give your terms and condition a title"
              />
            </div>
            {/*  */}
            <div className="rounded-sm bg-[#1C2225] p-4 h-full w-full flex items-start space-x-4 min-h-[74px] justify-start">
              {/* <p className="font-karla font-bold text-sm text-[#A6A6A6] w-full h-full">
                    Use the details below to send money to your Ratefy wallet
                    from any of your bank’s app or through internet banking{" "}
                  </p> */}

              <textarea
                value={newTacDetail}
                onChange={(e) => setNewTacDetail(e.currentTarget.value)}
                rows={4}
                type="text"
                name="condition"
                className="w-full h-full border-none outline-none bg-transparent font-karla font-bold text-sm text-[#A6A6A6] placeholder:text-[#a6a6a6]"
                placeholder="What is your terms and conditions?"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex justify-end">
          <div
            onClick={handleNewTac}
            className="flex space-x-2 items-center rounded px-2 py-2  hover:bg-[#1C2225] cursor-pointer  active:bg-[#1C2225]"
          >
            <p className="text-primary font-bold">
              <BiPlus size={20} />
            </p>
            <p className="font-karla text-[17px] text-primary font-bold">
              Add new
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferTAC;
