import { useEffect, useState, useMemo, useRef } from "react";
import pusher from "../../../../utils/chatconfig/index.js"
import { useGetUserIdQuery } from "@/services/apiSlice";


const useChat = (authSession, transactionDb, chatDb) => {

  const { data, error, isError, isSuccess, isFetching, isLoading } = useGetUserIdQuery();
  const [chatMessages, setChatMessages] = useState([]);
  const decidePage = useRef("seller");
  const loading = useRef(false);

  if (authSession !== null && transactionDb !== null && chatDb !== null) {
    const channel = pusher.subscribe('Chat.' + authSession);

    const handleMessage = function (myData) {
      setChatMessages((prevData) => [...prevData, myData]);
    }

    const handleError = function (err) {
      if (err.data.code === 404) {
        log('Over limit!');
      }
    }


    useEffect(() => {

      channel.bind('App\\Events\\TransactionChat', handleMessage);
      pusher.connection.bind('error', handleError);


      // Cleanup function
      return () => {
        channel.unbind('App\\Events\\TransactionChat', handleMessage);
        pusher.connection.unbind('error', handleError);

      };
    }, [loading.current = true]);


    if (data?.uuid === transactionDb?.data.data.owner_id) {
      decidePage.current = transactionDb?.data.data.owner;
    } else {
      decidePage.current = transactionDb?.data.data.recipient;
    }

    if (chatMessages.length === 0) {
      loading.current = true;
    } else {
      loading.current = false;
    }
  }







  return { chatMessages, decidePage, loading }



}

export default useChat;