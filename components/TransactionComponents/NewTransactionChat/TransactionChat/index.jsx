import { Box } from "@mui/material";
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";

import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";
import axios from "axios";
import { useGetUserIdQuery } from "@/services/apiSlice";


import ChatHead from "./ChatHead";
import BuyerChatHead from "./BuyerChatHead";
import ChatFooter from "./ChatFooter";
import ChatFeed from "./ChatFeed";
import BuyerChatFeed from "./BuyerChatFeed";
import useChat from "./useChat";
import useTransactdb from "./useTransactdb";
import useDetail from "./useDetail";

function TransactionChat() {
  const params = useParams();
  const { data } = useGetUserIdQuery();
  const { transactionDb, chatDb } = useTransactdb(params.acceptance_id, params.session_id);
  const { chatMessages, loading, decidePage } = useChat(params.acceptance_id + '-' + params.session_id, transactionDb);

  const myDetails = useRef();
  const otherDetails = useRef();

  

  
 const getMydetails = (userUuid) => {
    if(userUuid !== null) {
      const { detail } = useDetail(userUuid);
      myDetails.current = detail;
    } 
 }


 const getOtherDetails = (userUuid) => {
    if(userUuid !== null) {
      const { detail } = useDetail(userUuid);
      otherDetails.current = detail;
    }  
 }


  if(data?.uuid !== null &&  transactionDb?.data.data.owner_id !== null) {
    const decideDetails = () => {
      if(data?.uuid === transactionDb?.data.data.owner_id) {
          getMydetails(transactionDb?.data.data.owner_id);
          getOtherDetails(transactionDb?.data.data.receipient_id);
      }else {
          getMydetails(transactionDb?.data.data.receipient_id);
          getOtherDetails(transactionDb?.data.data.owner_id);
      } 
    }
    decideDetails();
  }
  


  const textMessage = (content) => {
    axios.post(`https://transactionbased.ratefy.co/api/send-chat`, {
        session: params.session_id, 
        acceptance: params.acceptance_id,
        sender: data?.uuid,
        receiver: data?.uuid !== transactionDb?.data.data.owner_id ? transactionDb?.data.data.recipient :  transactionDb?.data.data.owner,
        message: content,
        contentType: "text"
      })
  }

  const imageMessage = (image) => {
    axios.post(`https://transactionbased.ratefy.co/api/send-image-chat`, { 
        session: params.session_id, 
        acceptance: params.acceptance_id,
        sender: data?.uuid,
        receiver: data?.uuid !== transactionDb?.data.data.owner_id ? transactionDb?.data.data.recipient :  transactionDb?.data.data.owner,
        photo: image,
        contentType: "file"
     }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
  
  const handleSendMessage = ({ content, image, contentType }) => {
        if(contentType === "text") {
          textMessage(content);
        }else {
          imageMessage(image);
        }

  };

  const buyerPage =  () => {
    return (
      <>
        <BuyerChatHead status={transactionDb?.data.data ?? ''} />
        {chatMessages?.length === 0 ?  <BuyerChatFeed messages={Object?.values(chatDb ?? [])} loading={false}  myDetails={myDetails.current} otherDetails={otherDetails.current} /> :  <BuyerChatFeed messages={[...Object?.values(chatDb ?? []),...chatMessages]} loading={loading}  myDetails={myDetails.current} otherDetails={otherDetails.current} /> }
        <ChatFooter handleSendMessage={handleSendMessage} />
      </>
    )
  }


  const sellerPage =  () => {
    return (
      <>

        <ChatHead  status={transactionDb?.data.data ?? ''} />
        {chatMessages?.length === 0 ?  <ChatFeed messages={Object?.values(chatDb ?? [])} loading={false}  myDetails={myDetails.current} otherDetails={otherDetails.current} /> :  <ChatFeed messages={[...Object?.values(chatDb ?? []),...chatMessages]} loading={loading}  myDetails={myDetails.current} otherDetails={otherDetails.current} /> }
        <ChatFooter handleSendMessage={handleSendMessage} />
      </>
    )
  }



  return (
    <Box className="relative w-full h-full max-h-full flex flex-col overflow-hidden md:max-w-[600px] bg-white ">
      {/*  */}
      <Box className="w-full bg-[#181c1f] h-[30px] flex items-center justify-between">
        <Link href={"/overview"} passHref>
          <div className="flex items-center space-x-1 px-3 py-2">
            <ArrowBack fontSize="20" />
            <p className="font-karla text-sm text-center font-medium text-secondary">
              Dashboard
            </p>
          </div>
        </Link>
        <div className="flex items-center space-x-2 px-4 py-2">
          <p className="font-karla text-sm text-center font-medium text-secondary">
            Transaction page
          </p>
        </div>
      </Box>

      {decidePage.current === "seller" ? sellerPage() : buyerPage()}
    </Box>
  );
}

export default TransactionChat;
