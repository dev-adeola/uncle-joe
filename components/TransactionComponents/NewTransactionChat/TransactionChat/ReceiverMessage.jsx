import { formatDate } from "@/utils/dateFormatter";
import { Avatar } from "@mui/material";
import React from "react";
import useDetail from "./useDetail";


function ReceiverMessage({ message }) {
  const { detail } = useDetail(message?.sender);

  return (
    <div
      id={"1234321"}
      className="px-4 py-3 flex items-start space-x-4 justify-start"
    >
      {/* User avatar */}
      <Avatar
        alt="Merchant"
        sx={{ width: "35px", height: "35px", borderRadius: "50%" }}
      />
      {/* Message and Time */}
      <div className="flex flex-col space-y-2 items-start justify-start">
        {/*  */}
        <div className="flex items-center space-x-2">
          <h3 className="font-karla font-bold text-xs md:text-sm text-[#333]">
            {/* {message?.sender} */}
            {detail?.data.user.data.username}
          </h3>
          <p className="font-karla font-normal  text-subText text-[10px] md:text-sm">
            {formatDate(message?.timestamp) || ""}
          </p>
        </div>
        {/* Message  */}
        <div className="rounded-r-[10px] rounded-bl-[10px] p-4 w-[225px] max-w-[225px] md:w-[245px] md:max-w-[245px] text-[#242424] h-auto bg-[#F2F2F2]">
          <p className="text-[10px] md:text-xs font-karla font-normal ">
            {message?.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceiverMessage;
