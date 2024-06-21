"use client";

import {
  Check,
  LinkOffOutlined,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { Avatar, Badge, styled } from "@mui/material";
import React from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#3e9f4d",
    color: "#3e9f4d",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function BuyerInfo() {
  return (
    <div className="mx-auto flex w-full min-w-[320px] flex-col space-y-2 rounded border border-gray-700 bg-bgColor ">
      {/* Avatar */}
      <div className="flex w-full space-x-6 px-6 py-4 lg:px-8">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            className="h-16 w-16"
            src="/assets/avatar.png"
          />
        </StyledBadge>
        <div className="flex flex-col space-y-2">
          <p className="space-x-2 text-xl font-medium text-secondary">
            <span> CashBank_ </span>
            <LinkOffOutlined color="primary" fontSize="16px" />
          </p>
          <p className="text-lg text-secondary">Online</p>
        </div>
      </div>
      {/* Feedback */}
      <div className="flex w-full items-center justify-between space-x-6 bg-secondary px-6 py-4 lg:px-8">
        <div className="flex w-full flex-col space-y-1">
          <p className="text-md text-secondary">Positive feedback</p>
          <p className="flex items-center space-x-2 text-xl font-semibold text-white">
            <span className="text-success">
              {" "}
              <ThumbUpOutlined />
            </span>
            <span>201</span>
          </p>
        </div>
        <div className="flex w-full flex-col space-y-1">
          <p className="text-md text-secondary">Negative feedback</p>
          <p className="flex items-center space-x-2 text-xl font-semibold text-white">
            <span className="text-danger">
              <ThumbDownOutlined />{" "}
            </span>
            <span>0</span>
          </p>
        </div>
      </div>
      {/* Verifications */}
      <div className=" w-full space-y-4 px-6 py-4 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <Check />{" "}
            </span>
            <p className="text-md text-secondary">ID verified</p>
          </div>
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <Check />{" "}
            </span>
            <p className="text-md text-secondary">Address verified</p>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <Check />{" "}
            </span>
            <p className="text-md text-secondary">Email verified</p>
          </div>
          <div className="flex w-full flex-1 items-center space-x-4">
            <span className="text-success">
              <Check />{" "}
            </span>
            <p className="text-md text-secondary">Phone verified</p>
          </div>
        </div>
      </div>
      {/* Success story */}
      <div className="flex w-full items-center justify-between space-x-6 bg-secondary px-6 py-4 lg:px-8">
        <div className="flex w-full flex-col space-y-1">
          <p className="text-md capitalize text-secondary">total trade</p>
          <p className=" text-xl font-semibold text-white">451</p>
        </div>
        <div className="flex w-full flex-col space-y-1">
          <p className="text-md capitalize text-secondary">success rate</p>
          <p className=" text-xl font-semibold text-white">89%</p>
        </div>
      </div>
    </div>
  );
}

export default BuyerInfo;
