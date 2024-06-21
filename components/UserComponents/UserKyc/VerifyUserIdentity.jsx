import { Box } from "@mui/material";
import React from "react";

const VerifyUserIdentity = ({ onClick, disabled }) => {
  return (
    <Box className="rounded-md md:rounded-lg border-primary border p-2 md:px-8 md:py-3">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="scale-75 md:scale-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              viewBox="0 0 31 34"
              fill="none"
            >
              <path
                d="M10.6591 3.55498H27.0467V29.7751H4.1041V10.11H10.6591V3.55498ZM30.3242 1.90279C30.3242 1.00516 29.5909 0.277466 28.6879 0.277466H9.02037L0.827072 8.47126L0.826582 31.4016C0.826582 32.3134 1.55567 33.0526 2.45452 33.0526H28.6963C29.5954 33.0526 30.3242 32.3065 30.3242 31.4273V1.90279ZM17.2142 21.5813H13.9366V24.8588H17.2142V21.5813ZM17.2142 8.47126H13.9366V13.3875V18.3038H17.2142V8.47126Z"
                fill="#CCCCCC"
                fill-opacity="0.7"
              />
            </svg>
          </span>
          <span>&#124;</span>
          <p className=" text-secondary font-karla text-[10px] md:text-lg xl:text-xl font-bold">
            {"Submit KYC information to start using Ratefy"}
          </p>
        </div>

        <div
          id="verify-with-smile-id"
          onClick={onClick}
          disabled={disabled}
          style={{ backgroundColor: "#00B172" }}
          className={`w-fit rounded-md p-2 md:px-4 md:py-2 cursor-pointer`}
        >
          <p className="text-[8px] md:text-sm xl:text-xl text-white uppercase font-semibold font-jost">
            {"Submit Now"}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default VerifyUserIdentity;
