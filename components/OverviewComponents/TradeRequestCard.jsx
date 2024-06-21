import { openTransactionRequest } from "@/redux/slices/transactionSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TransactionRequestModal from "./TransactionRequestModal";
import { useFetchUserDetailsQuery } from "@/services/apiSlice";

function TradeRequestCard({ request, IsSuccessRateData, rateData }) {
  const dispatch = useDispatch();
  console.log({ request });
  const handleSeeDetails = (request) => {
    dispatch(openTransactionRequest({ ...request }));
  };
  const [open, setOpen] = useState(false);
  const [itemSId, setItemSId] = useState({
    item_for: "",
    item_id: "",
    owner: "",
    id: "",
    amount: "",
  });
  const handleOpen = (items) => {
    setItemSId({
      item_for: items?.item_for,
      item_id: items?.item_id,
      owner: items?.owner,
      id: items?.id,
      amount: items?.amount,
    });
    setOpen(true);
  };
  console.log({ itemSId });
  const handleClose = () => setOpen(false);
  // min-w-[320px] md:min-w-[440px]  md:w-[440px]

  const userDetailsQuery = useFetchUserDetailsQuery(request?.owner);

  const {
    data: userData,
    isError: IsErrorUserData,
    error: ErrorUserData,
    isSuccess: IsSuccessUserData,
    isFetching: IsFetchingUserData,
    isLoading: IsLoadingUserData,
  } = userDetailsQuery;
  return (
    <div className="flex h-[72px] w-full flex-col items-start justify-between rounded-[10px] bg-gray px-4 py-2  md:px-4">
      <div className="">
        <p className=" font-karla text-sm font-normal text-[#797979]">
          From {IsSuccessUserData && userData?.user?.data?.username}
        </p>
      </div>
      <div className="flex w-full items-center justify-between ">
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* <img
            alt={request.paymentMethod.name}
            src={request.paymentMethod.logo}
            className="h-[16px] w-[16px] rounded-full xl:h-[22px] xl:w-[22px]"
          /> */}
          <div className="font-karla text-[16px] font-bold text-lightGray">
            {request?.wallet_name}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex h-[15px] w-[13px] items-center  justify-center rounded-[3px] bg-whine xl:w-[18px] ">
            <p className="font-rubik text-xs font-normal text-white">0</p>
          </div>
          <div className="flex h-[15px] w-[13px] items-center  justify-center rounded-[3px] bg-whine xl:w-[18px] ">
            <p className="font-rubik text-xs font-normal text-white">5</p>
          </div>
          <p className="text-xl font-normal">:</p>
          <div className="flex h-[15px] w-[13px] items-center  justify-center rounded-[3px] bg-whine xl:w-[18px] ">
            <p className="font-rubik text-xs font-normal text-white">0</p>
          </div>
          <div className="flex h-[15px] w-[13px] items-center  justify-center rounded-[3px] bg-whine xl:w-[18px] ">
            <p className="font-rubik text-xs font-normal text-white">0</p>
          </div>
        </div>
        <button
          onClick={() => handleOpen(request)}
          className="flex h-[25px] w-[90px] cursor-pointer items-center justify-center rounded-[3px] bg-primary font-bold capitalize text-white transition duration-300 hover:bg-primaryActive active:bg-primaryActive xl:w-[110px]"
        >
          <p className="font-karla text-sm">see details</p>
        </button>
      </div>
      <TransactionRequestModal
        // data={request}
        // isSuccess={isSuccess}
        // isFetching={isFetching}
        // isLoading={isLoading}
        data={{
          user: IsSuccessUserData && userData?.user?.data?.username,

          rateData: IsSuccessRateData && rateData?.data?.rate_normal,
          request,
          itemSId,
        }}
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}

export default TradeRequestCard;
