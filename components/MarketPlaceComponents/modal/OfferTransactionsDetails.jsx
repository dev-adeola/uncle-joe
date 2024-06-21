"use client";
import { useCreateUserKYCMutation } from "@/services/apiSlice";
import { Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import MarketPlaceTransactionInfo from "../TransactionInfo";
import Link from "next/link";

export default function OfferTransactionsDetails({
  data,

  formDetails,
  open,
  handleClose,
}) {
  return (
    <div>
      {/* <Button sx={{ color: "#00B172" }} onClick={handleOpen}>
        Submit Now
      </Button> */}

      {/* <div
        //   onClick={() => handleKycAction(kycValue.action)}
        onClick={handleOpen}
        style={{ backgroundColor: "#00B172" }}
        className={`w-fit rounded-md p-2 md:px-4 md:py-2 cursor-pointer`}
      >
        <p className="text-[8px] md:text-sm xl:text-xl text-center text-white uppercase font-semibold font-jost">
          sell now
        </p>
      </div> */}
      {/* <div
        onClick={handleOpen}
        className="w-full rounded-[15px] cursor-pointer bg-primary hover:bg-primary/95 active:bg-primary/95 transition px-4 py-3 duration-300"
      >
        <p className="text-lightGray text-center font-rubik text-[20px] font-medium capitalize">
          sell now
        </p>
      </div> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="overflow-y-auto"
      >
        <Fade in={open}>
          <div className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-full bg-zinc-800 z-100 max-w-lg border-1 overflow-y-auto h-auto lg:h-fit border-black shadow-md p-2 lg:p-4">
            <Box className="py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary">
              <div className="flex justify-between px-2 py-4 items-center">
                <h2 className="text-center text-base md:text-xl uppercase">
                  transaction request
                </h2>
                <button
                  onClick={handleClose}
                  className="text-white bg-green-500 px-2 py-2 rounded-xl"
                >
                  <CloseIcon />
                </button>
              </div>
              <form className="flex flex-col items-center">
                <MarketPlaceTransactionInfo
                  data={data}
                  formDetails={formDetails}
                />
                <div className="grid py-4 grid-cols-2 gap-4 ">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Cancel
                  </button>
                  <Link
                    href={"/dashboard/overview"}
                    className="px-4 py-2 bg-[#D3D3D3] text-white rounded-md"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
