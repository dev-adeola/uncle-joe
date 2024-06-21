"use client";

import { AccessTime, NavigateNext } from "@mui/icons-material";
import { Avatar, Divider, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import DeleteOfferDialog from "./DeleteOfferConfirmationModal";
import Link from "next/link";

function MyOffersTableRows({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Phone */}
      <div className="flex flex-col space-y-4 bg-secondary px-5 py-4 lg:hidden ">
        {/*  */}
        <div className="flex items-center justify-between space-x-4">
          {/*  */}
          <div className="flex items-start space-x-4">
            <p className="font-karla text-left text-xs font-medium capitalize text-[#BDBDBD]">
              {data?.offerType}
            </p>
            <div className="flex flex-col items-start justify-start space-y-2">
              <p className="font-karla text-left text-xs font-medium capitalize text-subText">
                {data?.label}
              </p>
              <p className="-secondary text-[10px] font-medium text-left">
                {data?.tags?.map((tag, i) => (
                  <span key={tag + i}>
                    {tag} {i + 1 !== data?.tags?.length && ",  "}
                  </span>
                ))}
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex justify-end ml-4">
            <CustomSwitch status={data?.status} />
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col space-y-2 justify-end">
          {/*  */}
          <div className="flex items-end justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={data?.avatar}
                alt={data?.paymentMethod}
                className="h-[22px] w-[22px] rounded-full"
              />
              <p className="font-karla text-sm font-bold capitalize text-lightGray">
                {data?.paymentMethod}
              </p>
            </div>
            <p className="text-right font-karla text-[25px] font-bold text-lightGray">
              {data?.exchangeRate}
            </p>
          </div>
          {/*  */}

          <div className="flex items-center justify-between">
            {/*  */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                  Avg:
                </p>
                <p className="font-karla text-[10px] font-normal text-lightGray ">
                  {data?.limitAndSpeed?.avg}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                  Min:
                </p>
                <p className="font-karla text-[10px] font-normal text-lightGray ">
                  {data?.limitAndSpeed?.min}
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <p className="h-full py-[2px] font-karla text-[10px] font-normal capitalize text-subText ">
                  Max:
                </p>
                <p className="font-karla text-[10px] font-normal text-lightGray ">
                  {data?.limitAndSpeed?.max}
                </p>
              </div>
            </div>

            {/*  */}
            <div>
              <div
                id="offer-basic-button"
                aria-controls="offer-basic-menu"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
                className="flex h-[25px] w-[90px] px-3 py-2 cursor-pointer items-center justify-between rounded-[3px] bg-[#505050] transition duration-300 hover:opacity-90 active:opacity-90"
              >
                <p className="text-center font-karla text-[16px] font-bold text-white">
                  Action
                </p>
                <p className="text-lightGray">
                  <NavigateNext fontSize="medium" />
                </p>
              </div>
              <Menu
                className="w-full"
                id="offer-basic-menu"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "arioffer-a-labelledby": "basic-button",
                }}
              >
                <Stack
                  direction={"column"}
                  divider={<Divider color="#272727" orientation="horizontal" />}
                  className="h-fit w-[90px] max-w-[90px]  cursor-pointer overflow-y-auto rounded-[5px] bg-black p-1 "
                >
                  <MenuItem>
                    <Link href={"/transactions"} passHref>
                      <div>
                        <p className="capitalize font-rubik text-sm font-medium text-secondary ">
                          view
                        </p>
                      </div>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href={"/create-offer"} passHref>
                      <div>
                        <p className="capitalize font-rubik text-sm font-medium text-secondary ">
                          edit
                        </p>
                      </div>
                    </Link>
                  </MenuItem>{" "}
                  <MenuItem>
                    <div onClick={handleOpenDialog}>
                      <p className="capitalize font-rubik text-sm font-medium text-secondary ">
                        delete
                      </p>
                    </div>
                  </MenuItem>
                </Stack>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden items-center bg-secondary px-6 py-4 lg:grid lg:grid-cols-12 xl:grid-cols-12">
        {/*  */}
        <div className=" lg:col-span-3 xl:col-span-3">
          <div className="flex flex-col items-start justify-start space-y-2">
            <p className="font-rubik text-sm font-medium capitalize text-subText">
              {data?.offerType}
            </p>
            <div className="flex items-center space-x-2">
              <Avatar
                src={data?.avatar}
                alt={data?.paymentMethod}
                className="h-[34px] w-[34px] rounded-full"
              />
              <p className="font-karla text-[25px] font-bold capitalize text-lightGray">
                {data?.paymentMethod}
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=" lg:col-span-3 xl:col-span-3">
          <div className="flex flex-col items-start justify-start space-y-2">
            <p className="font-rubik text-left text-sm font-medium capitalize text-subText">
              {data?.label}
            </p>
            <p className="-secondary text-xs font-medium text-left">
              {data?.tags?.map((tag, i) => (
                <span key={tag + i}>
                  {tag} {i + 1 !== data?.tags?.length && ",  "}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/*  */}
        <div className=" flex items-center justify-center lg:col-span-2 xl:col-span-2">
          <CustomSwitch status={data?.status} />
        </div>

        {/*  */}
        <div className=" lg:col-span-2 xl:col-span-2 ">
          <div className="flex justify-center">
            <div className="justify-cent flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-2">
                <p className="text-secondary">Avg:</p>
                <p className="flex items-center space-x-2 text-white">
                  {data.limitAndSpeed?.avg}{" "}
                  <AccessTime color="primary" className="ml-2 w-6" size="6" />
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-secondary">Min:</p>
                <p className="text-white">{data.limitAndSpeed?.min} </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-secondary">Max:</p>
                <p className="text-white">{data.limitAndSpeed?.max} </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=" lg:col-span-2 xl:col-span-2">
          <div className="flex flex-col space-y-4 justify-end items-end">
            <p className="text-left font-karla text-[40px] font-bold text-lightGray">
              {data?.exchangeRate}
            </p>

            <div>
              <div
                id="offer-basic-button"
                aria-controls="offer-basic-menu"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
                className="flex h-[33px] w-[126px] bg-[#505050] cursor-pointer items-center justify-between rounded-[5px] transition duration-300 hover:opacity-90 active:opacity-90 py-2 px-4"
              >
                <p className="text-left font-karla text-lg font-bold text-lightGray">
                  Action
                </p>
                <p className="text-lightGray">
                  <NavigateNext fontSize="medium" />
                </p>
              </div>

              {/*  */}
              <Menu
                className="w-full"
                id="offer-basic-menu"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "arioffer-a-labelledby": "basic-button",
                }}
              >
                <Stack
                  direction={"column"}
                  divider={<Divider color="#272727" orientation="horizontal" />}
                  className="h-fit w-[126px] max-w-[126px] cursor-pointer overflow-y-auto rounded-[5px] bg-black p-1 "
                >
                  <MenuItem>
                    <Link passHref href={"/transactions"}>
                      <div>
                        <p className="font-rubik capitalize text-sm font-medium text-secondary ">
                          view
                        </p>
                      </div>{" "}
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Link passHref href={"/create-offer"}>
                      <div>
                        <p className="font-rubik capitalize text-sm font-medium text-secondary ">
                          edit
                        </p>
                      </div>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <div onClick={handleOpenDialog}>
                      <p className="font-rubik capitalize text-sm font-medium text-secondary ">
                        delete
                      </p>
                    </div>
                  </MenuItem>
                </Stack>
              </Menu>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <DeleteOfferDialog
        handleClickOpen={handleOpenDialog}
        handleClose={handleCloseDialog}
        open={openDialog}
      />
    </>
  );
}

export default MyOffersTableRows;

const CustomSwitch = ({ status }) => {
  const [active, setActive] = useState(status);

  const handleStatus = () => {
    if (active === "on") setActive("off");
    else setActive("on");
  };

  return (
    <div
      className="flex h-[22px] md:h-[38px] relative w-[54px] md:w-[96px] cursor-pointer rounded-[5px] md:rounded-[8px] bg-lightGray p-[2px] md:p-[3px]"
      onClick={handleStatus}
    >
      <div
        onClick={handleStatus}
        className={`absolute flex z-20 h-[18px] md:h-[32px] w-[25px] md:w-[46px] cursor-pointer items-center justify-center rounded-[5px] md:rounded-[8px] bg-primary transition-transform duration-500 ease-in-out ${active === "off" &&
          "translate-x-[24px] md:translate-x-[43px] !bg-[#2e2e2e]"
          }`}
      >
        <p className={`font-karla text-xs font-bold capitalize text-lightGray`}>
          {active}
        </p>
      </div>
      {/*  */}
      <div className="w-full h-full flex z-0">
        <div className="w-full h-full  flex items-center justify-center">
          <p className="font-karla text-xs text-center font-bold capitalize text-[#857878]">
            on
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-karla text-xs text-center font-bold capitalize text-[#857878]">
            off
          </p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};
