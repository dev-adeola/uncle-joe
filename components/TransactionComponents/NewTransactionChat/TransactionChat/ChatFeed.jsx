"use-client";

import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGetUserIdQuery } from "@/services/apiSlice";

import ReceiverMessage from "./ReceiverMessage";
import SenderMessage from "./SenderMessage";
import ReceiverFileMessage from "./ReceiverFileMessage";
import SenderFileMessage from "./SenderFileMessage";
import ChatBotAssistant from "./ChatBotAssistant";
import LoadingSpinner from "@/components/LoadingSpinner";

function ChatFeed({messages, loading, buyerDetails, sellerDetails }) {
  const { data } = useGetUserIdQuery();

  const messageContainerRef = useRef(null);
  useEffect(() => {
    
    // Scroll to bottom when message changes or on initial render
    messageContainerRef.current?.scroll({
      top: messageContainerRef.current.scrollHeight,
    });
  }, [messages]);

  return (
    <Box
      ref={messageContainerRef}
      className="bg-white h-full max-h-full overflow-y-auto pt-2 pb-20"
    >
      {loading.current ? (
        <div className="w-full h-full flex items-center justify-center">
          <div class="animate-spin mx-auto w-8 h-8 rounded-full border border-b-transparent" />
        </div>
      ) : (
        <>
          <ChatBotAssistant />

          {messages.map((message) => {
            if (message.contentType === "text") {
              // Check if the message is from the current user
              const isCurrentUser = message.sender === data?.uuid && (data?.uuid ===  buyerDetails?.data?.user.data.uuid);
              if (isCurrentUser) {
                return <SenderMessage key={message?._id} message={message} username={buyerDetails?.data?.user.data.username}  />;
              } else {
                return <ReceiverMessage key={message?._id} message={message} username={sellerDetails?.data?.user.data.username} />;
              }
            } else if (message.contentType === "file") {
              // Check if the message is from the current user
              const isCurrentUser = message.sender === data?.uuid && (data?.uuid ===  buyerDetails?.data?.user.data.uuid);
              if (isCurrentUser) {
                return (
                  <SenderFileMessage key={message?._id} message={message} username={buyerDetails?.data?.user.data.username} />
                );
              } else {
                return (
                  <ReceiverFileMessage key={message?._id} message={message} username={sellerDetails?.data?.user.data.username} />
                );
              }
            }
            return null; // Skip rendering for unknown message types
          })}
        </>
      )}
    </Box>
  );
}

export default ChatFeed;


