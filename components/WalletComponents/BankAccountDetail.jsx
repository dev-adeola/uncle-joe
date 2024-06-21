import { Box } from "@mui/material";
import React from "react";

function BankAccountDetail({ data, handleDelete }) {
  return (
    <Box className="flex justify-between items-start p-4 md:p-6 bg-secondary">
      <div className="flex items-center space-x-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M7.3125 11.3333H5.0625V18.9166H7.3125V11.3333ZM14.0625 11.3333H11.8125V18.9166H14.0625V11.3333ZM23.625 21.0833H2.25V23.2499H23.625V21.0833ZM20.8125 11.3333H18.5625V18.9166H20.8125V11.3333ZM12.9375 4.03159L18.7987 6.99992H7.07625L12.9375 4.03159ZM12.9375 1.58325L2.25 6.99992V9.16659H23.625V6.99992L12.9375 1.58325Z"
              fill="#00B172"
            />
          </svg>
        </span>
        <div className="flex items-start flex-col space-y-1">
          <p className="font-karla font-medium text-secondary text-[15px]">
            {data?.bankName}
          </p>
          <p className="font-karla font-bold text-secondary text-lg">
            {data?.accountNumber}
          </p>
          <p className="font-karla font-medium text-subText text-xs">
            {data?.accountName}
          </p>
        </div>
      </div>
      <div onClick={() => handleDelete(data?.id)}>
        <p className="text-subText hover:text-white active:text-white px-2 py-1 rounded-sm font-karla font- text-lg font-bold cursor-pointer hover:bg-danger active:bg-danger transition duration-300">
          Delete
        </p>
      </div>
    </Box>
  );
}

export default BankAccountDetail;
