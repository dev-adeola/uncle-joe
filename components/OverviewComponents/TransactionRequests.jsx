import { openTransactionRequest } from "@/redux/slices/transactionSlice";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import TradeRequestCard from "./TradeRequestCard";

function TransactionRequests({ transactionsRequests }) {
  const dispatch = useDispatch();

  const handleSeeDetails = (request) => {
    dispatch(openTransactionRequest({ ...request }));
  };

  return (
    <Box className="flex-items flex w-full gap-4 overflow-x-auto rounded-[10px]">
      {transactionsRequests.map((request, index) => (
        <TradeRequestCard key={index} request={request} handleSeeDetails={handleSeeDetails} />
      ))}
    </Box>
  );
}

export default TransactionRequests;
