import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

function WalletSuccessfulTransaction() {
  return (
    <Box className="w-full border-[0.5px] ">
      {/* Head */}
      <div className="border-b-[0.5px] h-[24px] md:h-[30px] xl:h-[37px] bg-[#1C2225]" />

      {/*  */}
      <div className="w-full bg-[#181C1F] py-4 px-4 xl:px-6">
        <div className="w-full flex flex-col items-center justify-center">
          {/*  */}

          {/*  */}
          <div className="scale-75 md:scale-90 xl:scale-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="148"
              height="148"
              viewBox="0 0 148 148"
              fill="none"
            >
              <g clipPath="url(#clip0_2248_3346)">
                <circle cx="74.3156" cy="74.3306" r="61.425" fill="white" />
                <path
                  d="M73.7904 8.47229C60.8687 8.47229 48.2372 12.304 37.4931 19.4829C26.7491 26.6619 18.3752 36.8655 13.4303 48.8036C8.48534 60.7417 7.19152 73.8781 9.71242 86.5515C12.2333 99.225 18.4557 110.866 27.5928 120.003C36.7298 129.14 48.3711 135.363 61.0445 137.884C73.7179 140.405 86.8543 139.111 98.7924 134.166C110.73 129.221 120.934 120.847 128.113 110.103C135.292 99.3589 139.124 86.7273 139.124 73.8056C139.124 56.4781 132.24 39.8604 119.988 27.608C107.736 15.3556 91.1179 8.47229 73.7904 8.47229ZM116.461 51.8781L62.8062 105.492L31.1196 73.8056C30.0366 72.7227 29.4282 71.2538 29.4282 69.7223C29.4282 68.1907 30.0366 66.7219 31.1196 65.639C32.2025 64.556 33.6713 63.9476 35.2029 63.9476C36.7344 63.9476 38.2033 64.556 39.2862 65.639L62.8879 89.2406L108.376 43.7931C108.912 43.2569 109.549 42.8315 110.25 42.5413C110.95 42.2511 111.701 42.1018 112.46 42.1018C113.218 42.1018 113.969 42.2511 114.669 42.5413C115.37 42.8315 116.007 43.2569 116.543 43.7931C117.079 44.3294 117.505 44.966 117.795 45.6666C118.085 46.3672 118.234 47.1181 118.234 47.8765C118.234 48.6348 118.085 49.3857 117.795 50.0863C117.505 50.787 117.079 51.4236 116.543 51.9598L116.461 51.8781Z"
                  fill="#00B172"
                />
              </g>
              <defs>
                <clipPath id="clip0_2248_3346">
                  <rect
                    width="147"
                    height="147"
                    fill="white"
                    transform="translate(0.291016 0.305664)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          {/*  */}
          <div className=" w-4/5 md:w-4/6">
            <p className="text-lightGray font-karla font-extrabold text-[20px] md:text-[23px] xl:text-[30px] text-center uppercase">
              successful!!!
            </p>
            <p className="font-rubik font-normal text-sm xl:text-[16px] text-center text-[#e2e2e2]">
              Your money should be in the selected account in few minutes
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex mt-4 w-full space-y-2 items-center flex-col">
          <Link passHref href={"/overview"} className="w-full">
            <div className="w-full flex items-center justify-center py-2 bg-primary rounded-sm text-lightGray">
              <p className="font-karla text-center text-sm md:text-lg font-extrabold xl:text-[20px]">
                Go to dashboard
              </p>
            </div>
          </Link>
          <p className="font-rubik text-center text-[#e2e2e2] text-xs md:text-sm xl:text-[15px] font-medium">
            Transaction details
          </p>
        </div>
      </div>
    </Box>
  );
}

export default WalletSuccessfulTransaction;
