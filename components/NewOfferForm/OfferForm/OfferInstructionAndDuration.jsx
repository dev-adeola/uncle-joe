"use client";

import { setDuration, setOfferActiveSection } from "@/redux";
import { Divider, Stack } from "@mui/material";
import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

function OfferInstructionAndDuration({
  id,
  handleDecrement,
  handleIncrement,
  handleInput,
  offerInstructionAndDuration,
}) {
  // const [duration, setDuration] = useState(60);

  // const createOfferData = useSelector((state) => ({
  //   activeSection: state.createOffer.createOfferActiveSection,
  //   OfferInstructionAndDuration: state.createOffer.offerInstructionAndDuration,
  // }));
  // const dispatch = useDispatch();

  // const { activeSection, OfferInstructionAndDuration } = createOfferData;

  // const handleDecrement = () => {
  //   dispatch(setDuration(OfferInstructionAndDuration?.durationInMins - 1));
  //   // setDuration(duration - 1);
  // };
  // const handleIncrement = () => {
  //   dispatch(setDuration(OfferInstructionAndDuration?.durationInMins + 1));
  //   // setDuration(duration + 1);
  // };

  // const handleInput = (e) => {
  //   // setDuration(Number(e.target.value));
  //   dispatch(setDuration(Number(e.target.value)));
  // };

  const handleSection = () => {
    if (activeSection === id) return;
    dispatch(setOfferActiveSection(id));
    return;
  };

  return (
    <>
      <div className="h-fit w-full  transition-all duration-500 max-w-[1052px] space-y-4 rounded-[10px] bg-secondary p-4  md:p-6">
        {/*  */}
        <p className="text-lg font-karla font-bold text-[#a6a6a6]">
          Offer instruction & duration
        </p>
        {/*  */}
        <div className="order-2 md:order-1 w-full max-w-[346px] flex flex-col space-y-2 items-start">
          <p className="font-karla text-lightGray font-bold text-sm text-left">
            Duration to make payment
          </p>
          <Stack
            direction={"row"}
            divider={<Divider color="#737373" orientation="vertical" />}
            className="w-full flex overflow-hidden items-center h-[54px] rounded-[7px] border-2 border-iconBorder"
          >
            <div className="flex items-center justify-around flex-1 ">
              {/*  */}
              <div
                onClick={handleDecrement}
                className="flex items-center justify-center"
              >
                <p className="cursor-pointer text-white font-normal text-[30px] font-rubik">
                  <BiMinus />
                </p>
              </div>
              {/*  */}
              {/* <div className="flex items-center justify-center">
                  <p className="cursor-pointer text-white font-normal text-[30px] font-rubik">
                    60
                  </p>

                </div> */}

              <div className=" flex items-center justify-center flex-1 shrink max-w-[140px]">
                <input
                  onChange={handleInput}
                  value={offerInstructionAndDuration?.duration}
                  type="number"
                  name="duration"
                  placeholder={"duration in mins"}
                  className="bg-transparent text-center placeholder:text-center h-full w-full placeholder:text-white text-white font-normal text-[30px] font-rubik outline-none border-none"
                />
              </div>

              {/*  */}
              <div
                onClick={handleIncrement}
                className="flex items-center justify-center"
              >
                <p className="cursor-pointer text-white font-normal text-[30px] font-rubik">
                  <BiPlus />
                </p>
              </div>
            </div>
            <div className=" w-14 h-14 flex justify-center items-center bg-[#181C1F]">
              <p className="text-white font-bold font-rubik text-xl">Min</p>
            </div>
          </Stack>
        </div>
        {/*  */}
        <div className="order-2 md:order-1 w-full  flex flex-col space-y-2 items-start">
          <p className="font-karla text-lightGray font-bold text-sm text-left">
            Trade instruction (chat auto-response)
          </p>
          <div className="w-full px-4 py-2 bg-[#1C2225] min-h-[86px]">
            <textarea
              rows={4}
              value={offerInstructionAndDuration?.guide}
              onChange={handleInput}
              name="guide"
              type="text"
              className="w-full h-full border-none outline-none bg-transparent font-karla font-bold text-sm text-[#A6A6A6] placeholder:text-[#a6a6a6]"
              placeholder="Use the details below to send money to your Ratefy wallet from
                  any of your bank’s app or through internet banking"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferInstructionAndDuration;
