'use client'

import React from "react";
import { Box, Divider, Stack } from "@mui/material";
import { useRouter } from "next/navigation";


function HomeNav() {
  const router = useRouter()

  return (
    <Box className=" py-2 xl:py-4 w-full h-fit bg-[#181C1F] px-4 md:px-8">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1010px]">
        {/* LOGO */}
        <div className="w-fit scale-75 md:scale-90 xl:scale-100">
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="112"
              height="39"
              viewBox="0 0 112 39"
              fill="none"
            >
              <path
                d="M86.1613 29.9288H81.7409V13.2376H79.3652V9.42236H81.7409V8.11102C81.7409 2.20751 83.2571 0.440918 87.5096 0.440918C88.9024 0.440918 91.93 0.85164 91.93 0.85164L91.8905 4.5036C91.8905 4.5036 89.8852 4.41947 88.6159 4.41947C86.7342 4.41947 86.1613 5.32009 86.1613 8.15061V9.42236H91.5645V13.2376H86.1613V29.9288Z"
                fill="white"
              />
              <path
                d="M97.4571 9.42243L101.794 26.1136H102.9L107.236 9.42243H111.657L103.878 38.742H99.4969L101.952 29.9239H98.4301L93.0664 9.41748H97.4571V9.42243Z"
                fill="white"
              />
              <path
                d="M39.7439 25.0893C39.8278 26.3214 40.3563 26.8113 41.5466 26.9746L41.4231 30.3792C38.924 30.3792 37.4917 30.0526 35.9804 28.86C35.9804 28.86 32.7059 30.3792 29.3918 30.3792C25.3419 30.3792 23.2922 28.1227 23.2922 23.8571C23.2922 19.5124 25.6678 18.0328 30.0437 17.6666L35.3235 17.2163V15.7416C35.3235 13.4852 34.3407 12.7874 32.3354 12.7874C29.5943 12.7874 24.6405 13.1981 24.6405 13.1981L24.4775 10.041C24.4775 10.041 28.9374 8.97216 32.7059 8.97216C37.6992 8.97216 39.7439 11.0654 39.7439 15.7367V25.0893ZM30.5772 20.8237C28.6954 20.987 27.7521 21.8926 27.7521 23.7334C27.7521 25.5792 28.5275 26.7272 30.2512 26.7272C32.5824 26.7272 35.3284 25.8266 35.3284 25.8266V20.3734L30.5772 20.8237ZM50.7133 13.2377V22.2588C50.7133 25.3367 50.8368 26.4006 52.9655 26.4006C54.1113 26.4006 56.3191 26.2769 56.3191 26.2769L56.5216 29.8447C56.5216 29.8447 53.7804 30.3792 52.3481 30.3792C47.7203 30.3792 46.288 28.6571 46.288 22.7536V13.2377H43.6704V9.42247H46.288V3.47443H50.7084V9.42247H56.3586V13.2377H50.7133ZM75.7243 26.1136L75.8082 29.434C75.8082 29.434 71.1409 30.3792 67.5404 30.3792C61.4013 30.3792 59.0256 27.0983 59.0256 19.8786C59.0256 12.3717 62.2606 8.97216 67.9059 8.97216C73.6351 8.97216 76.4997 11.966 76.4997 18.3643L76.2132 21.561H63.525C63.5645 24.8419 64.7943 26.4798 68.1923 26.4798C71.4274 26.4798 75.7243 26.1136 75.7243 26.1136ZM72.1188 18.1169C72.1188 14.0146 70.889 12.6637 67.9009 12.6637C64.8734 12.6637 63.5201 14.1829 63.4806 18.1169H72.1188ZM15.5578 18.8938C18.5458 17.5033 20.1411 14.752 20.1411 10.7734C20.1411 4.53835 16.8271 1.83154 10.6435 1.83154H0V13.401C0.0345728 13.3367 0.0642073 13.2823 0.113597 13.2031C0.158048 13.1734 0.182742 13.1586 0.19262 13.1388C1.84224 10.719 4.02032 9.03649 6.87504 8.28927C7.26522 8.18536 7.38376 7.91814 7.37388 7.5569C7.364 6.97793 7.37388 6.39897 7.33931 5.82C7.30474 5.20639 7.50723 5.07278 8.09003 5.30536C10.7966 6.38412 13.518 7.43319 16.2295 8.50206C17.0543 8.82866 17.0493 8.8435 16.3677 9.42742C13.5772 11.8076 10.7818 14.1928 7.98631 16.573C7.88259 16.6621 7.78875 16.8204 7.55662 16.7016C7.54181 16.1276 7.52205 15.5239 7.50723 14.9252C7.48254 13.9058 7.39858 13.8266 6.41078 14.1482C5.11677 14.5738 3.87215 15.1132 2.83003 16.0237C2.08425 16.6769 1.38785 17.3796 1.02731 18.3148C0.86432 18.7404 0.701334 19.161 0.553165 19.5866C0.108658 21.0117 0.0148169 22.0559 0 22.5705V29.9239H4.54385V19.9231H11.1324L15.1824 29.9289H20.1757L15.5578 18.8938Z"
                fill="url(#paint0_linear_2807_88)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2807_88"
                  x1="1.25677"
                  y1="-0.341322"
                  x2="70.1022"
                  y2="39.3304"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00558659" stopColor="#0CCDA3" />
                  <stop offset="0.238" stopColor="#0ECF9F" />
                  <stop offset="0.448" stopColor="#14D694" />
                  <stop offset="0.6494" stopColor="#1EE082" />
                  <stop offset="0.8442" stopColor="#2CEF68" />
                  <stop offset="1" stopColor="#3AFF4E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* MENU */}
        <Stack
          direction={"row"}
          gap={2}
          divider={<Divider orientation="vertical" color="#fff" />}
          className="hidden md:flex"
        >
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <p className="font-rubik text-sm md:text-lg font-normal capitalize">
              blog
            </p>
          </div>
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <p className="font-rubik text-sm md:text-lg font-normal capitalize">
              about
            </p>
          </div>
          <div className="cursor-pointer" onClick={() => router.push('/')}>
            <p className="font-rubik text-sm md:text-lg font-normal capitalize">
              fees
            </p>
          </div>
        </Stack>

        {/* BUTTONS */}
        <div className="flex items-center space-x-4">
          {/*  */}
          <div className="cursor-pointer" onClick={() => router.push('/auth/login')}>
            <div className="w-fit px-4 md:px-6 py-2 rounded-[5px] hover:bg-primary active:bg-primary transition duration-300 text-lightGray">
              <p className="capitalize font-karla text-sm md:text-lg font-bold xl:font-extrabold text-center">
                log in
              </p>
            </div>
          </div>
          {/*  */}
          <div className="cursor-pointer" onClick={() => router.push('/auth/register')}>
            <div className="w-fit px-4 md:px-6 py-2 rounded-[5px] bg-primary hover:bg-primary/95 active:bg-primary/95 duration-300 transition text-lightGray">
              <p className="capitalize font-karla text-sm md:text-lg font-bold xl:font-extrabold text-center">
                Register
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default HomeNav;
