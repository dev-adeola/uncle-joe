import { availableOffers as data } from "@/utils/data";
import { AccessTime } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";

function AvailableOfferRow({ offerData }) {
  console.log("offerData", offerData);
  const max_min_duration = offerData?.paymentoption.forEach((item) => {
    // console.log({ item });
    // Access the buyeroffer array and extract the option property from each element
    const buyerofferOptions = item?.buyeroffer?.map((offer) => ({
      max_amount: offer?.max_amount,
      min_amount: offer?.min_amount,
    }));
    console.log({ buyerofferOptions });
    return buyerofferOptions;
  });
  const interval = 6;

  const [maxMinDuration, setMaxMinDuration] = useState([]);

  // useEffect(() => {
  //   const extractedData = offerData?.paymentoption.map((item) => {
  //     const buyerofferOptions = item.buyeroffer.map((offer) => ({
  //       max_amount: offer?.max_amount,
  //       min_amount: offer?.min_amount,
  //     }));
  //     return buyerofferOptions;
  //   });
  //   setMaxMinDuration(extractedData);
  //   console.log({ extractedData });
  // }, []);

  useEffect(() => {
    const extractedData = offerData?.paymentoption.flatMap(
      (item) => item.buyeroffer
    );
    console.log({ extractedData });
    setMaxMinDuration(extractedData);
  }, [offerData]);
  console.log({ maxMinDuration });
  return (
    <>
      {/* Phone */}
      <div className="flex flex-col space-y-2 bg-secondary px-4 py-4 lg:hidden ">
        {/*  */}
        <div className="flex items-center justify-between space-x-4">
          {/* User info */}
          <div className="flex items-center space-x-2">
            <Avatar
              src={data[0]?.user.avatar}
              alt={data[0]?.user.name}
              className="h-[20px] w-[20px] rounded-full"
            />
            <div className="flex flex-col">
              <p className="font-karla text-sm font-medium text-subText md:text-[20px] md:text-white">
                {data[0]?.user.name}
              </p>
              <div className="flex space-x-4">
                <div className="flex flex-col">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    136
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Orders
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    100%
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Completion
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    90&
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Positive
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exchange Rate */}
          <div>
            <p className="text-right font-karla text-[25px] font-bold text-lightGray">
              {data[0]?.amount.rate.currency}
              {data[0]?.amount.rate.value}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2">
              <img
                src={data[0]?.paymentMethod.logo}
                alt={offerData?.ewallet_name}
                className="w-[22px] h-[22px] rounded-full"
              />
              <p className="text-sm font-karla font-bold text-lightGray">
                {offerData?.ewallet_name}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 text-[10px] font-normal font-karla">
                <p className="text-secondary">Avg:</p>
                <p className="text-white">{data[0]?.limitAndSpeed?.avg} </p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-normal font-karla">
                <p className="text-secondary">Min:</p>
                <p className="text-white">{data[0]?.limitAndSpeed?.min} </p>
              </div>
              <div className="flex items-center space-x-2 text-[10px] font-normal font-karla">
                <p className="text-secondary">Max:</p>
                <p className="text-white">{data[0]?.limitAndSpeed?.max} </p>
              </div>
            </div>
          </div>

          {/* Offer type */}
          <div className="flex h-[25px] w-[80px] cursor-pointer items-center justify-center rounded-[3px] bg-primary transition duration-300 hover:opacity-90 active:opacity-90">
            <p className="text-center font-karla text-sm font-bold text-white">
              Action
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-center bg-secondary px-6 py-4 lg:grid lg:grid-cols-12 xl:grid-cols-12">
        {/*  */}
        <div className="lg:col-span-3">
          <div className=" flex w-full items-center justify-center space-x-4 bg-secondary px-4 py-2  md:px-8 md:py-4">
            <Avatar
              src=""
              alt=""
              className="h-[20px] w-[20px] md:h-[52px] md:w-[52px]"
            />
            <div className="flex flex-col space-y-1 md:space-y-2">
              <p className="font-karla text-sm font-medium text-subText md:text-[20px] md:text-white">
                Femiivictorr
              </p>
              <div className="flex space-x-4">
                <div className="flex flex-col md:space-y-1">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    136
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Orders
                  </p>
                </div>
                <div className="flex flex-col md:space-y-1">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    100%
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Completion
                  </p>
                </div>
                <div className="flex flex-col md:space-y-1">
                  <p className="font-rubik text-[10px] font-medium text-white md:text-[12px] md:font-extrabold">
                    90&
                  </p>
                  <p className="font-karla text-[10px] font-normal text-[#A6A6A6] md:text-[12px]">
                    Positive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="lg:col-span-2">
          <div className="">
            <p className="font-karla text-sm text-center font-bold capitalize text-lightGray md:text-[25px] md:text-white">
              {offerData?.ewallet_name}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-center">
            <p className="border-secondary font-medium text-center">
              {offerData?.paymentoption?.map((tag, i) => (
                <span key={tag.id}>
                  {tag.option}
                  {","}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/*  */}
        <div className="lg:col-span-2">
          <div className="flex justify-center">
            {maxMinDuration?.length > 0 ? (
              <div className="justify-cent flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Avg:</p>
                  <p className="flex items-center space-x-2 text-white">
                    {data[0]?.limitAndSpeed?.avg}{" "}
                    <AccessTime color="primary" className="ml-2 w-6" size="6" />
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Min:</p>
                  <p className="text-white">{maxMinDuration[0]?.min_amount} </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Max:</p>
                  <p className="text-white text-center text-ellipsis">
                    {maxMinDuration?.map((buyer, index) => (
                      <span key={index}>
                        {buyer?.max_amount}
                        {","}
                      </span>
                    ))}{" "}
                  </p>
                </div>
              </div>
            ) : (
              <div className="justify-cent flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Avg:</p>
                  <p className="flex items-center space-x-2 text-white">
                    {data[0]?.limitAndSpeed?.avg}{" "}
                    <AccessTime color="primary" className="ml-2 w-6" size="6" />
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Min:</p>
                  <p className="text-white">{data[0]?.limitAndSpeed?.min} </p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="text-secondary">Max:</p>
                  <p className="text-white">{data[0]?.limitAndSpeed?.max} </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/*  */}
        <div className="lg:col-span-2">
          <div className="flex flex-col items-end space-y-2">
            <p className="text-2xl font-semibold text-white">
              {data[0]?.exchangeRate}
            </p>
            <div className="flex h-[34px] w-[116px] items-center justify-center cursor-pointer rounded-[3px] bg-primary p-2  transition duration-150 hover:bg-primary/90 active:bg-primary/90">
              <p className="font-karla text-lg font-bold capitalize text-white">
                {data[0]?.offerType}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvailableOfferRow;
