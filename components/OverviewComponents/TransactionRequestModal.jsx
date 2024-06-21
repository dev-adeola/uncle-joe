"use client";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Avatar, Divider, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeTransactionRequest } from "@/redux/slices/transactionSlice";
import { useCallback, useEffect, useState } from "react";
import TransactionPopup from "./TransactionPopup";
import Naira from "../CalculateComponents/Naira";
import {
  useAcceptBuyerAndSellerOfferMutation,
  useBuyerAndSellerOfferItemMutation,
  useRejectBuyerAndSellerOfferMutation,
} from "@/services/apiSlice";
import AcceptOfferDialog from "./dialogue/AcceptOfferConfirmation";
import { toast } from "react-toastify";
import RejectOfferDialog from "./dialogue/RejectOfferConfirmation";
import { calculateAmountToRecieve } from "@/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function TransactionRequestModal({ open, handleClose, data }) {
  const [anchor, setAnchor] = useState(null);
  const [label, setLabel] = useState("insufficient");

  // const handleOpenPopup = (event, val) => {
  //   setLabel(val);
  //   setAnchor(anchor ? null : event.currentTarget);
  // };
  // const open = Boolean(anchor);
  // const id = open ? "transaction-request-popup" : undefined;

  // const dispatch = useDispatch();
  // const transactionRequest = useSelector((state) => {
  //   return state.transaction.transactionModel;
  // });

  // const hadleCloseModal = () => dispatch(closeTransactionRequest());

  const [openDialog, setOpenDialog] = useState(false);
  const [openRejectDialog, setOpenRejectDialog] = useState(false);
  const [
    buyerAndSellerOfferItem,
    { data: dataItem, isError, isLoading: IsloadingItem, isSuccess, error },
  ] = useBuyerAndSellerOfferItemMutation();
  const [
    acceptBuyerAndSellerOffer,
    {
      data: dataAccetOffer,
      isError: IsErrorAccetOffer,
      isLoading: IsloadingAccetOffer,
      isSuccess: IsSuccessAccetOffer,
      error: ErrorAccetOffer,
    },
  ] = useAcceptBuyerAndSellerOfferMutation();
  const [
    rejectBuyerAndSellerOffer,
    {
      data: dataRejectOffer,
      isError: IsErrorRejectOffer,
      isLoading: IsloadingRejectOffer,
      isSuccess: IsSuccessRejectOffer,
      error: ErrorRejectOffer,
    },
  ] = useRejectBuyerAndSellerOfferMutation();

  console.log({ dataItem, error });
  const { item_for, item_id, owner, id, amount } = data?.itemSId;
  //api/seller-accept-request
  const handSendRequest = useCallback(async () => {
    try {
      if (item_for === "sell") {
        await buyerAndSellerOfferItem({
          data: { id: item_id },
          endpoints: "api/seller-offer-item",
        }).unwrap();
      } else if (item_for === "buy") {
        await buyerAndSellerOfferItem({ data: { id: item_id } }).unwrap();
      }
    } catch (error) {
      console.log({ error });
      // toast.error(error?.error || "An error occurred");
    }
  }, [item_for, item_id]);

  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);
  const handleRejectCloseDialog = () => {
    setOpenRejectDialog(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenActivateDialog = () => {
    console.log("it enterer");
    setOpenDialog(true);
    handleClose();
    // handleCloseDialog();
  };
  const handleOpenRejectDialog = () => {
    console.log("it enterer");
    setOpenRejectDialog(true);
    handleClose();
    // handleCloseDialog();
  };
  const handleAcceptOffer = async (e) => {
    try {
      if (item_for === "sell") {
        const params = {
          id,
          owner: owner,
        };
        const response = await acceptBuyerAndSellerOffer({
          data: params,
          endpoints: "api/seller-accept-request",
        });
        console.log({ response });
        if (response?.data?.status == 200) {
          toast.success("Your request completed successfully");
          handleCloseDialog();
        } else {
          toast.error(
            "Sorry unbale to complete your request please try again later"
          );
          console.log("error not completed");
        }
      } else if (item_for === "buy") {
        const params = {
          id,
          owner: owner,
          amount,
        };
        console.log({ params });
        const response = await acceptBuyerAndSellerOffer({
          data: params,
        });
        console.log({ response });
        if (response?.data?.status == 200) {
          toast.success("Your request completed successfully");
          handleCloseDialog();
        } else {
          toast.error(
            "Sorry unbale to complete your request please try again later"
          );
          console.log("error not completed");
        }
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred" || error);
      }
      toast.error(error?.message || "An error occurred" || error);
    }
  };
  const handleRejectOffer = async (e) => {
    try {
      const params = {
        id,
        owner: owner,
      };
      console.log({ params });
      const response = await rejectBuyerAndSellerOffer(params);
      console.log({ response });
      if (response?.data?.status == 200) {
        toast.success("The offer rejected successfully");
        handleRejectCloseDialog();
      } else {
        toast.error(
          "Sorry unbale to complete your request please try again later"
        );
        console.log("error not completed");
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred" || error);
      }
      toast.error(error?.message || "An error occurred" || error);
    }
  };

  const calculateAmountToRe = calculateAmountToRecieve(
    data?.rateData,
    data?.request?.amount
  );
  console.log({ calculateAmountToRe });

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <p className="mb-2 font-rubik text-sm font-normal text-white md:mb-4 md:text-lg">
              Trade request
            </p>
            <Box className="flex items-start gap-2 md:gap-4">
              <Box className="h-fit w-[245px] md:w-[360px]">
                <Box className=" flex w-full items-center justify-center space-x-4 bg-secondary px-4 py-2 md:space-x-8 md:px-8 md:py-4">
                  <Avatar className="h-[31px] w-[31px] md:h-[39px] md:w-[39px]" />
                  <div className="flex flex-col space-y-1 md:space-y-2">
                    <p className="font-karla text-xs font-medium text-white md:text-[16px]">
                      {data?.user}
                    </p>
                    <div className="flex space-x-4 md:space-x-8">
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
                          90&
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
                  divider={
                    <Divider
                      color="#2D2D2D"
                      orientation="horizontal"
                      flexItem
                    />
                  }
                  className="flex flex-col items-end bg-[#181C1F] px-4 py-2 md:px-8 md:py-4"
                >
                  <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-4">
                    <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
                      Exchange rate
                    </p>
                    <p className="text-right font-karla text-[16px] font-semibold text-lightGray">
                      <Naira value={data?.rateData} />
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-4">
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
                        {data?.request?.wallet_name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-4">
                    <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
                      Payment option
                    </p>
                    <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
                      {isSuccess &&
                        dataItem?.response?.data?.paymentoption?.option}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-4">
                    <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
                      Amount to send
                    </p>
                    <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
                      ${data?.request?.amount}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center space-y-1 py-2 md:space-y-2 md:py-4">
                    <p className="font-karla text-xs font-normal text-[#9F9F9F] md:text-sm">
                      Amount to receive
                    </p>
                    <p className="text-right font-karla text-sm font-medium text-lightGray md:text-[16px]">
                      {calculateAmountToRe}
                    </p>
                  </div>
                  <div className="flex w-full flex-col space-y-4 py-4">
                    <div className="flex w-full items-center justify-center">
                      <div className="flex items-center gap-1">
                        <div className="flex h-[12px] w-[15px] items-center justify-center rounded-[3px] bg-whine text-white md:h-[16px] md:w-[18px]">
                          <p className="font-rubik text-[10px] font-normal md:text-sm">
                            0
                          </p>
                        </div>
                        <div className="flex h-[12px] w-[15px] items-center justify-center rounded-[3px] bg-whine text-white md:h-[16px] md:w-[18px]">
                          <p className="font-rubik text-[10px] font-normal md:text-sm">
                            5
                          </p>
                        </div>
                        <p className="text-xl font-normal">:</p>
                        <div className="flex h-[12px] w-[15px] items-center justify-center rounded-[3px] bg-whine text-white md:h-[16px] md:w-[18px]">
                          <p className="font-rubik text-[10px] font-normal md:text-sm">
                            0
                          </p>
                        </div>
                        <div className="flex h-[12px] w-[15px] items-center justify-center rounded-[3px] bg-whine text-white md:h-[16px] md:w-[18px]">
                          <p className="font-rubik text-[10px] font-normal md:text-sm">
                            0
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* //disabled-trade-btn */}
                    <div className="flex w-full items-center justify-center gap-8">
                      <div
                        onClick={handleOpenRejectDialog}
                        className=" flex h-[22px] w-[76px] cursor-pointer items-center justify-center rounded-sm bg-danger transition duration-300 hover:opacity-90 active:opacity-90 lg:h-[30px] lg:w-[93px]"
                      >
                        <p className="text-center  font-karla text-xs font-bold capitalize  text-white lg:text-[16px]">
                          Reject{" "}
                        </p>
                      </div>

                      <div
                        onClick={handleOpenActivateDialog}
                        className=" flex h-[22px] w-[76px] cursor-pointer items-center justify-center rounded-sm bg-primary transition duration-300 hover:bg-primaryActive active:bg-primaryActive lg:h-[30px] lg:w-[93px]"
                      >
                        <p className="text-center  font-karla text-xs font-bold capitalize  text-white lg:text-[16px]">
                          Accept{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Stack>
              </Box>

              <Box
                onClick={handleClose}
                className="cursor-pointer"
                // className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center rounded-lg bg-primary p-2 text-black md:h-[27px] md:w-[27px]"
              >
                {/* <FaTimes size={20} /> */}

                <span className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <rect
                      x="0.275391"
                      y="0.250488"
                      width="22.1322"
                      height="22.1828"
                      rx="5"
                      fill="#00B172"
                    />
                    <path
                      d="M16.8557 8.74058L14.8824 6.92151L11.4308 10.1033L7.97918 6.92151L6.00586 8.74058L9.45747 11.9224L6.00586 15.1042L7.97918 16.9233L11.4308 13.7415L14.8824 16.9233L16.8557 15.1042L13.4041 11.9224L16.8557 8.74058Z"
                      fill="black"
                    />
                  </svg>
                </span>

                <span className="hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <rect
                      x="0.806641"
                      y="0.750244"
                      width="27.7474"
                      height="27.8108"
                      rx="5"
                      fill="#00B172"
                    />
                    <path
                      d="M21.5957 10.1407L19.1218 7.86011L14.7944 11.8492L10.4671 7.86011L7.99316 10.1407L12.3205 14.1298L7.99316 18.1188L10.4671 20.3994L14.7944 16.4103L19.1218 20.3994L21.5957 18.1188L17.2684 14.1298L21.5957 10.1407Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <AcceptOfferDialog
        handleAcceptOffer={handleAcceptOffer}
        handleClose={handleCloseDialog}
        open={openDialog}
      />
      <RejectOfferDialog
        handleRejectOffer={handleRejectOffer}
        handleClose={handleRejectCloseDialog}
        open={openRejectDialog}
      />
      {/* <TransactionPopup anchor={anchor} id={id} open={open} label={label} /> */}
    </div>
  );
}
