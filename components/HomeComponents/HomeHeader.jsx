import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";
import VideoEmbedded from "./VideoEmbedded";
// import "https://player.vimeo.com/api/player.js";

function HomeHeader() {
  return (
    <Box>
      <div className="bg-[#0B0D0E] space-y-8 px-4 pt-8 md:pt-12 md:px-6 xl:px-8">
        {/* Topic */}
        <div className="">
          <div className="mx-auto flex items-center flex-col w-full">
            {/*  */}
            <p className="text-white text-center  font-rubik font-bold text-[30px] md:text-[42px] xl:text-[50px]">
              Matching You <br className="md:hidden" /> With Peers To{" "}
              <span className="md:hidden">Meet</span>
            </p>
            <p className="text-gradient text-white text-center  font-rubik font-bold text-[30px] md:text-[42px] xl:text-[50px]">
              <span className="hidden md:inline-flex">Meet</span> Dollar FX
              Needs
            </p>
            {/*  */}
            <p className="max-w-[680px] font-karla text-lg md:text-xl xl:text-2xl  text-subText text-center  font-normal">
              Exchange your funds with peers on Ratefy. Pick from the list of
              offers or post an offer to meet you Dollar/Naira FX needs.
            </p>

            <div className="items-center justify-center space-x-4 flex w-full">
              <Link passHref href={"/auth/register"}>
                <div className="w-fit mt-2 md:mt-8 text-white py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-primary hover:bg-primary/95 active:bg-primary/95 transition duration-300 ">
                  <p className="">Get Started</p>
                </div>
              </Link>
              <Link passHref href={"#"}>
                <div className=" mt-2 md:mt-8 p-[1px] rounded-[10px] bg-gradient   transition duration-300 ">
                  <div className="text-white py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-[#0B0D0E]  transition duration-300 ">
                    <p className="">Check Paralle rate</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Intro Video */}
        <div className="relative aspect-video rounded-t-[15px] xl:rounded-t-[40px] mx-auto h-full max-h-[612px] w-full max-w-[1010px] overflow-hidden">
          <VideoEmbedded />
        </div>
        {/* <div className="relative  rounded-t-[15px] xl:rounded-t-[40px] mx-auto h-fit max-h-[412px] w-full max-w-[1010px] overflow-hidden">
          <img
            src="/assets/images/home-preview-video.png"
            alt="introduction to ratefy"
            className="w-full h-full object-contain"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 cursor-pointer w-[45px] h-[45px] md:w-[75px] md:h-[75px] xl:w-[107px] xl:h-[107px] flex items-center justify-center">
            <img
              src="/assets/icons/video-play-icon.svg"
              alt=" "
              className="w-full h-full"
            />
          </div>
          <div className="absolute bottom-3 md:bottom-16 left-1/2 -translate-x-1/2  z-10 ">
            <p className="font-rubik font-bold text-sm md:text-2xl xl:text-[30px] text-center text-black/60">
              Introduction to Ratefy
            </p>
          </div>
        </div> */}

        {/* <div style="padding:56.25% 0 0 0;position:relative;"> */}
        {/* <div>
          <iframe
            src="https://player.vimeo.com/video/885665254?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            // style={{"position:absolute;top:0;left:0;width:100%;height:100%;"}}
            title="Introduction To Ratefy"
          ></iframe>
        </div> */}
      </div>
    </Box>
  );
}

export default HomeHeader;
