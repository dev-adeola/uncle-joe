import { Avatar } from "@mui/material";
import React from "react";
import { formatDate } from "@/utils/dateFormatter";
import useDetail from "./useDetail";


function SenderFileMessage({ message }) {
  // const { detail } = useDetail(message?.sender);
  console.log(detail)
  console.log(message);

  return (
    <div className="px-4 py-3 flex items-start space-x-4 justify-end">
      {/* Message and Time */}
      <div className="flex flex-col space-y-2 items-end justify-start">
        {/*  */}
        <div className="flex items-center space-x-2">
          <p className="font-karla font-normal  text-subText text-[10px] md:text-sm">
            {formatDate(message?.timestamp) || ""}
          </p>
          <h3 className="font-karla font-bold text-xs md:text-sm text-[#333]">
            {/* {message?.sender} */}
            {/* {detail?.data.user.data.username} */}
          </h3>
        </div>
        {/* Message  */}
        <div className="rounded-l-[10px] rounded-br-[10px] p-4 w-[225px] max-w-[225px] md:w-[245px] md:max-w-[245px] text-[#242424] h-auto bg-[#F2F2F2]">
          <div className="overflow-hidden max-h-80">
            <img
              src={message?.image}
              alt="file upload"
              className="w-full h-full"
            />
          </div>
          <p className="text-[10px] md:text-xs font-karla font-normal ">
            {message?.content}
          </p>
        </div>
      </div>
      {/* User avatar */}
      <Avatar
        alt="Merchant"
        sx={{ width: "35px", height: "35px", borderRadius: "50%" }}
      />
    </div>
  );
}

export default SenderFileMessage;
