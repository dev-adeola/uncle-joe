import { Box, Button } from "@mui/material";
import React from "react";
import TransactionInfo from "./TransactionInfo";
import { useParams } from "next/navigation";
import useTransactdb from "../TransactionChat/useTransactdb";
import useDecider from "./useDecider";
import { formatDate } from "@/utils/dateFormatter";

// import { CopyToClipboard } from "react-copy-to-clipboard";

function TransactionDetails() {
  const params = useParams();
  const { transactionDb } = useTransactdb(params.acceptance_id, params.session_id);
  const { decided } = useDecider(transactionDb?.data.data.id, transactionDb?.data.data.item_for);
 
  const truncated = (str) => {
    return str?.length > 25 ? str?.substring(0, 15) + "..." : str;
  }

  const relocate = () => {
    window.location.href = 'https://wa.link/16n7rp';
  }

  return (
    <Box className="w-full h-full min-h-full max-h-full md:w-fit  bg-secondary shadow px-6 py-4 xl:p-6">
      <div className="h-full w-full max-h-full justify-between flex flex-col items-end space-y-6 overflow-y-auto">
        {/*  */}
        <div className="space-y-1">
          <div className="flex space-x-2 items-center">
            <p className="text-right font-karla font-xs font-normal">
              Time Created
            </p>
            <p className="text-right font-karla text-white font-xs font-medium">
              {formatDate(transactionDb?.data.data.created_at)}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <p className="text-right font-karla font-xs font-normal">
              Order number
            </p>
            <p className="text-right font-karla text-white font-xs font-medium">
              {truncated(transactionDb?.data.data.acceptance_id)}
            </p>

            {/* <CopyToClipboard
              text={"0002272292272278"}
              onCopy={() => alert("Transaction ID copied to clipboard")}
            > */}
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
              >
                <path
                  d="M1.23799 6.98866C1.00013 6.98866 0.796435 6.92392 0.626907 6.79444C0.457379 6.66496 0.372759 6.5095 0.373048 6.32805V1.70379H1.23799V6.32805H5.99514V6.98866H1.23799ZM2.96786 5.66744C2.73 5.66744 2.52631 5.6027 2.35678 5.47323C2.18725 5.34375 2.10263 5.18828 2.10292 5.00683V1.04318C2.10292 0.861511 2.18769 0.705937 2.35721 0.576458C2.52674 0.446978 2.73029 0.382349 2.96786 0.382569H6.86008C7.09794 0.382569 7.30163 0.447309 7.47116 0.576788C7.64069 0.706268 7.72531 0.861731 7.72502 1.04318V5.00683C7.72502 5.1885 7.64026 5.34408 7.47073 5.47356C7.3012 5.60303 7.09765 5.66766 6.86008 5.66744H2.96786Z"
                  fill="white"
                />
              </svg>
            </span>
            {/* </CopyToClipboard> */}
          </div>
        </div>

        {/*  */}
        <TransactionInfo info={decided} amount={transactionDb?.data.data.amount} toReceive={transactionDb?.data.data.amount_to_receive} />

        {/*  */}
        <div className="w-fit px-4 py-1 rounded-[10px] bg-danger hover:bg-danger/90 active:bg-danger/90 transition duration-300 cursor-pointer">
          <Button className="font-karla text-white text-lg font-medium text-center" onClick={() => relocate()}>
            Report
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default TransactionDetails;
