"use client";

import { Box } from "@mui/material";
import React from "react";
import { ImInstagram } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Link from "next/link";

function HomeFooter() {
  return (
    <Box>
      {/*  */}
      <Box className="w-full bg-bgColor px-8 lg:px-12 py-8 md:py-12 xl:py-16">
        <div className="max-w-[1281px] mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/*  */}
          <div className="flex flex-col items-start space-y-2 md:space-y-3">
            <h4 className="capitalize font-rubik text-lg md:text-xl xl:text-2xl font-bold text-white">
              about
            </h4>
            <div className="space-y-1">
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Our story
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Careers
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Partner with us
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Contact us
                </p>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-start space-y-2 md:space-y-3">
            <h4 className="capitalize font-rubik text-lg md:text-xl xl:text-2xl font-bold text-white">
              blog
            </h4>
            <div className="space-y-1">
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Freelance
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Ratefy 'how to'
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  E-wallet 'how to' Online
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Business
                </p>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-start space-y-2 md:space-y-3">
            <h4 className="capitalize font-rubik text-lg md:text-xl xl:text-2xl font-bold text-white">
              platform
            </h4>
            <div className="space-y-1">
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Infrastructure
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Terms and Conditions
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Legal
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Fees
                </p>
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col items-start space-y-2 md:space-y-3">
            <h4 className="capitalize font-rubik text-lg md:text-xl xl:text-2xl font-bold text-white">
              support
            </h4>
            <div className="space-y-1">
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  WhatsApp
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Chat@ratefy.co
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  Telegram channel
                </p>
              </Link>
              <Link passHref href={"#"}>
                <p className="text-xs md:text-sm xl:text-[16px] font-normal font-rubik text-secondary">
                  How-To Videos
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Box>

      {/*  */}
      <Box className="w-full bg-black py-2 px-4 md:px-8">
        <div className="w-full max-w-[1281px] mx-auto flex items-center justify-between">
          <p className="font-karla text-lg md:text-[22px] xl:text-[25px]">
            Ratefy © 2023
          </p>
          <div className="flex items-center w-fit space-x-4">
            {/*  */}
            <div className="w-11 h-11 rounded-full flex items-center justify-center md:w-14 md:h-14 xl:w-16 xl:h-16 bg-secondary text-primary p-2 cursor-pointer">
              <FaLinkedinIn className="w-full object-cover" />
            </div>
            {/*  */}
            <div className="w-11 h-11 rounded-full flex items-center justify-center md:w-14 md:h-14 xl:w-16 xl:h-16 bg-secondary text-primary p-2 cursor-pointer">
              <RiTwitterXLine className="w-full object-cover" />
            </div>
            {/*  */}
            <div className="w-11 h-11 rounded-full flex items-center justify-center md:w-14 md:h-14 xl:w-16 xl:h-16 bg-secondary text-primary cursor-pointer">
              <ImInstagram className="w-full object-cover" />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default HomeFooter;
