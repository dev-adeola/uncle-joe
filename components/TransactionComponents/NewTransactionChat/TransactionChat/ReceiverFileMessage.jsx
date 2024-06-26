import { formatDate } from "@/utils/dateFormatter";
import { Avatar } from "@mui/material";
import React from "react";

function ReceiverFileMessage({ message, username }) {

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
            {username}
            {/* {message.sender || ""} */}
          </h3>
          <p className="font-karla font-normal  text-subText text-[10px] md:text-sm">
            {formatDate(message?.timestamp) || ""}
          </p>
        </div>
        {/* Message  */}
        <div className="rounded-r-[10px] space-y-2 rounded-bl-[10px] p-2 w-[225px] max-w-[225px] md:w-[245px] md:max-w-[245px] text-[#242424] h-auto bg-[#F2F2F2]">
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
    </div>
  );
}

export default ReceiverFileMessage;
