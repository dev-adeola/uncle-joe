"use client";

import { Box, Divider, Stack } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import AvailableOfferRow from "./AvailableOfferRow";

import { toast } from "react-toastify";
import { AvailableOfferHeaderLoader, OfferRowSkeletonLoader } from "..";

function AvailableOffers({
  filteredDatas,
  data,
  isSuccess,
  isFetching,
  isLoading,
}) {
  // console.log('===> ', searchQueries)

  // Query

  return (
    <Box>
      {/* Transactions Head */}
      {isFetching ? (
        <AvailableOfferHeaderLoader />
      ) : (
        <div className="mb-1 h-[37px] w-full bg-black px-4 shadow-md lg:px-6">
          {/* Laptop upward */}
          <div className="hidden h-full py-1 lg:grid lg:grid-cols-12">
            <div className="h-full lg:col-span-3" />
            <div className="h-full lg:col-span-2">
              <p className="h-full text-center font-karla text-sm font-semibold capitalize text-secondary">
                payment methods
              </p>
            </div>
            <div className="h-full  lg:col-span-3">
              <p className="h-full text-center font-karla text-sm font-semibold capitalize text-secondary">
                Tags
              </p>
            </div>
            <div className="h-full  lg:col-span-2">
              <p className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary">
                Limits & Speed
              </p>
            </div>
            <div className="h-full  lg:col-span-2">
              <p className="h-full text-right font-karla text-sm font-semibold capitalize text-secondary">
                Exchange Rate /$
              </p>
            </div>
          </div>

          {/* Mobile & Tabs */}
          <div className="flex h-full items-center justify-between lg:hidden">
            <div className=" w-full">
              <p className="h-full text-left font-karla text-sm font-semibold capitalize text-secondary">
                details
              </p>
            </div>
            <div className=" w-full">
              <p className="text-right font-karla text-sm font-semibold capitalize text-secondary">
                Rate
              </p>
            </div>
          </div>
        </div>
      )}
      {/* Transactions Details */}
      <div className="overflow-y-auto">
        <Stack
          divider={
            <Divider orientation="horizontal" className="h-1" color="#181C1F" />
          }
          className="h-full w-full overflow-y-auto"
        >
          {isLoading || isFetching
            ? [1, 2, 3, 4, 5].map((key) => <OfferRowSkeletonLoader key={key} />)
            : filteredDatas?.length > 0
            ? filteredDatas?.map((data, key) => (
                <AvailableOfferRow offerData={data} key={key} />
              ))
            : isSuccess &&
              data?.map((data, key) => (
                <AvailableOfferRow offerData={data} key={key} />
              ))}
        </Stack>
      </div>
    </Box>
  );
}

export default AvailableOffers;
