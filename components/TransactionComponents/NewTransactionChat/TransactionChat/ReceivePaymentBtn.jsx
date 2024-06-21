
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";

function ReceivePaymentBtn  ({ id, activeId, setActiveId,  }) {
  const [message, setMessage] = useState(null);
  const params = useParams();
  const processPayment = () => {
    axios.post(`https://transactionbased.ratefy.co/api/accept-payment`, { 
        session_id: params.session_id,
        acceptance: params.acceptance_id 
     })
  }
    const onClose = () => {
      setActiveId(null);
    };


    const confirmPayment = () => {
        processPayment();
    };
    return (
      <>
        {activeId === id ? (
          <div className="space-y-3 flex flex-col items-center text-xs font-karla font-normal p-3 w-[180px] rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#FFF5D2] text-[#494949]">
            {/*  */}
            <div className="flex justify-end w-full" onClick={onClose}>
              <p className="bg-[#795900] cursor-pointer  p-1 rounded-full flex items-center justify-center text-white">
                <FaTimes size={12} />
              </p>
            </div>
            <p className="text-left ">
                By clicking <strong>‘release payment’ </strong> button, you confirm that you have received the funds sent by your peer and that Ratefy escrow should release the payment.
              {/* kindly attach <strong>proof of payment</strong> and click ' */}
              {/* <strong>I've made payment</strong>' button */}
            </p>
  
            {/*  */}

            {/*  */}
            <div 
              onClick={() => confirmPayment()}
              className="flex text-center items-center justify-center text-xs font-karla font-bold px-2 py-2 w-full rounded-[10px] cursor-pointer bg-[#795900] text-[#fff]">
              Release Payment
            </div>
          </div>
        ) : (
          <div
            onClick={() => setActiveId(id)}
            
            
            className="flex items-center justify-start text-xs font-karla font-bold px-2 py-2 w-[180px]  rounded-r-[10px] rounded-bl-[10px] cursor-pointer bg-[#FFF5D2] text-[#795900]"
          >
            I’ve receive the funds
          </div>
        )}
      </>
    );
  };


  export default ReceivePaymentBtn;