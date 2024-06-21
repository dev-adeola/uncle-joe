"use client";

import { Box, Fade, Popper } from "@mui/material";
import React, { useState, useEffect } from "react";

import ChatBotPaymentBtn from "./ChatBotPaymentBtn";
import ChatBotCancelBtn from "./ChatBotCancelBtn";


function ChatBotAssistant() {
  const [activeId, setActiveId] = useState(null); // 'made-payment' | 'cancel-transaction' | 'repeat-transaction' | null
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const id = open ? "chat-bot-assistance" : undefined;

  const handleClick = (event) => {
 
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);

   
    
  };

  const closeBot = () => {
    setOpen(false);
  };

  return (
    <Box
      aria-describedby={id}
      className="absolute left-3 bottom-[80px] flex items-end gap-4 w-fit h-fit"
    >
      {/*  */}
      <div
        id="botId"
        onClick={handleClick}
        className="w-[30px] h-[30px] rounded-full bg-[#1480FF] flex justify-center items-center cursor-pointer z-[1200] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="17"
          viewBox="0 0 19 17"
          fill="none"
        >
          <path
            d="M16.5219 8.22732C16.3704 7.88166 16.0456 7.79878 15.8259 7.77895V5.67236C15.8259 4.89107 15.1531 4.2557 14.3259 4.2557H9.82586V3.27111C10.0546 3.07703 10.2009 2.79795 10.2009 2.48486C10.2009 2.20307 10.0823 1.93282 9.87136 1.73356C9.66038 1.5343 9.37423 1.42236 9.07586 1.42236C8.77749 1.42236 8.49134 1.5343 8.28036 1.73356C8.06939 1.93282 7.95086 2.20307 7.95086 2.48486C7.95086 2.79795 8.09711 3.07703 8.32586 3.27111V4.2557H3.82586C2.99861 4.2557 2.32586 4.89107 2.32586 5.67236V7.79524L2.26436 7.79949C2.07534 7.81238 1.89849 7.89237 1.76937 8.02338C1.64025 8.15439 1.56844 8.32671 1.56836 8.5057V9.92236C1.56836 10.1102 1.64738 10.2904 1.78803 10.4232C1.92868 10.5561 2.11945 10.6307 2.31836 10.6307H2.32586V14.1724C2.32586 14.9537 2.99861 15.589 3.82586 15.589H14.3259C15.1531 15.589 15.8259 14.9537 15.8259 14.1724V10.6307C16.0248 10.6307 16.2155 10.5561 16.3562 10.4232C16.4968 10.2904 16.5759 10.1102 16.5759 9.92236V8.54961C16.5845 8.43968 16.566 8.32936 16.5219 8.22732ZM3.82586 14.1724V5.67236H14.3259L14.3266 8.50286L14.3259 8.5057V9.92236L14.3266 9.92591L14.3274 14.1724H3.82586Z"
            fill="white"
          />
          <path
            d="M6.45117 9.9222C7.07249 9.9222 7.57617 9.28794 7.57617 8.50553C7.57617 7.72313 7.07249 7.08887 6.45117 7.08887C5.82985 7.08887 5.32617 7.72313 5.32617 8.50553C5.32617 9.28794 5.82985 9.9222 6.45117 9.9222Z"
            fill="white"
          />
          <path
            d="M11.7012 9.9222C12.3225 9.9222 12.8262 9.28794 12.8262 8.50553C12.8262 7.72313 12.3225 7.08887 11.7012 7.08887C11.0799 7.08887 10.5762 7.72313 10.5762 8.50553C10.5762 9.28794 11.0799 9.9222 11.7012 9.9222Z"
            fill="white"
          />
          <path
            d="M6.07617 11.3389H12.0762V12.7555H6.07617V11.3389Z"
            fill="white"
          />
        </svg>
      </div>

      <Popper
        sx={{ zIndex: 1200 }}
        open={open}
        anchorEl={anchorEl}
        placement={"left-end"}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className="flex  ml-4 flex-col space-y-4 !bg-transparent">
              <ChatBotPaymentBtn
                id={"made-payment"}
                activeId={activeId}
                setActiveId={setActiveId}
              />
              <ChatBotCancelBtn
                id={"cancel-transaction"}
                activeId={activeId}
                setActiveId={setActiveId}
              />
            </div>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

export default ChatBotAssistant;




