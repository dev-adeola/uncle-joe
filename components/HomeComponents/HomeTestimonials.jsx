"use client";

import { Pause, PlayArrow, Star } from "@mui/icons-material";
import React, { useState } from "react";
import AudioPlayerWithWave from "../MediaPlayerComponents/AudioPlayer";
import Link from "next/link";

function HomeTestimonials() {
  return (
    <div className="w-full p-4 lg:p-8 space-y-4 md:space-y-8">
      <p className="capitalize text-left font-rubik font-bold text-4xl lg:text-5xl text-lightGray ">
        testimonials
      </p>

      {/* space-y-4 lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:gap-8 */}

      {/*  */}
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-2/5">
          <AudioTestimonyCard
            avatar={"/assets/avatars/avatar-1.png"}
            name={"Aderinsola. G"}
            audio={"/audio.mp3"}
            id={"audio1"}
          />
        </div>
        <div className="w-full md:w-3/5">
          <TextTestimonyCard avatar={"/assets/avatars/avatar-2.png"} />
        </div>
      </div>

      {/*  */}
      <div className="w-full flex flex-col md:items-end md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-3/12">
          <AffiliatePartnersCard />
        </div>

        <div className="w-full md:w-5/12 md:space-y-8">
          <RatingCard />
          <div className="hidden md:block">
            <AudioTestimonyCard
              avatar={"/assets/avatars/avatar-3.png"}
              name={"Olagunjua  Mike"}
              audio={"/audio.mp3"}
              id={"audio2"}
            />
          </div>
        </div>
        {/*  */}
        <div className="w-full md:w-4/12 md:space-y-8">
          <P2PMerchants />
          <Rank />
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default HomeTestimonials;

// AudioTestimonyCard
const AudioTestimonyCard = ({ name, avatar, audio, id }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-3xl lg:rounded-[32px] bg-bgColor p-4 w-full h-full space-y-4 flex flex-col justify-between">
      {/*  */}
      <div className="flex items-end gap-4 ">
        {/* Avater */}
        <div className="rounded-full w-16 h-16 lg:w-20 lg:h-20 overflow-hidden">
          <img
            src={avatar}
            alt="voice note testimonial"
            className="w-full h-full rounded-full object-contain"
          />
        </div>
        <div className="">
          {/* Rate */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i, key) => (
              <p key={i + "" + key} className="text-[#00B172]">
                <Star fontSize="large" />
              </p>
            ))}
          </div>
          {/* Name */}
          <p className="text-darkGray font-manrope font-bold text-sm lg:text-xl">
            {name}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="w-full rounded-[20px] bg-navbar p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-subText text-sm lg:text-lg font-normal capitalize ">
            audio record
          </p>
          <p className="text-subText text-sm font-inter lg:text-lg font-normal capitalize ">
            0:30s
          </p>
        </div>
        {/* Audio Wave */}
        <div className="flex gap-2 items-center">
          {/* Play/Pause Button */}
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 cursor-pointer rounded-full p-1 flex items-center justify-center bg-primary text-black"
          >
            {isPlaying ? (
              <Pause fontSize="medium" />
            ) : (
              <PlayArrow fontSize="medium" />
            )}
          </div>
          {/* Wafer wave */}
          <AudioPlayerWithWave
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioFile={audio}
            containerId={id}
          />
        </div>
      </div>
    </div>
  );
};

//
const TextTestimonyCard = ({ avatar }) => {
  return (
    <div className="w-full h-full bg-primary px-8 py-4 flex flex-col gap-4 rounded-2xl items-center">
      {/* Avatar */}
      <div className="rounded-full w-[72px] h-[72px] overflow-hidden bg-white p-[2px]">
        <img
          src={avatar}
          alt="testimony"
          className="w-full h-full rounded-full object-contain"
        />
      </div>
      {/*  */}
      <p className="font-manrope text-xl text-white font-extrabold text-center">
        Chinedu Akpa
      </p>
      <p className="font-manrope text-xs text-white font-medium text-center">
        Ratefy is surely organizing and fixing cross-border remittances in
        Nigeria. What ever what my dollar need is, Ratefy got me covered.
      </p>

      <div className="flex items-center gap-6">
        {/*  */}
        <div className="flex items-">
          <p className="font-extrabold text-white text-lg  leading-7 font-manrope ">
            5.0
          </p>
          <p className="font-extrabold text-white text-xs leading-7 font-manrope ">
            /5.0 rating
          </p>
        </div>
        {/* Rate */}
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i, key) => (
            <p key={i + "" + key} className="text-white">
              <Star fontSize="medium" />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

//
const AffiliatePartnersCard = () => {
  return (
    <div className="rounded-lg space-y-4 bg-white px-4 py-5 w-full flex flex-col gap-4 justify-evenly">
      <h4 className="capitalize text-black font-extrabold font-manrope text-xl ">
        affiliate partners
      </h4>
      <HorizontalAvatars
        avatars={[
          "/assets/avatars/avatar-1.png",
          "/assets/avatars/avatar-2.png",
          "/assets/avatars/avatar-3.png",
          "/assets/avatars/avatar-2.png",
        ]}
        label={"Affiliate partners"}
      />

      <hr className="w-full my-4" />

      <div className="">
        <p className="text-[#bcbcbc] font-manrope text-xs font-normal ">
          Ratefy Affiliate is so simple, transparent and straightforward. <br />{" "}
          <br /> As an online coach, I find it easier to refer my students and
          earn commission when they trade on Ratefy.
        </p>
      </div>

      {/*  */}
      <div className="">
        <h4 className="capitalize text-black font-extrabold font-manrope text-xl ">
          ajibade kola
        </h4>
        <div className="flex items-end gap-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i, key) => (
              <p key={i + "" + key} className="text-[#00B172]">
                <Star fontSize="medium" />
              </p>
            ))}
          </div>
          <div className="flex items-end space-x-1">
            <p className="font-extrabold text-xs font-manrope text-black">
              4.9
            </p>
            <span className="font-normal text-[8px] font-manrope text-black">
              Rating
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

//
const HorizontalAvatars = ({
  avatars,
  label,
  color = "primary",
  others = undefined,
  lastAvatar = (
    <>
      70+ <br /> More
    </>
  ),
}) => {
  return (
    <div className="w-full flex">
      {avatars.map((avatar, key) => (
        <div
          key={key}
          className={`rounded-full w-12 h-12  overflow-hidden -ml-2 first:ml-0 border border-${color} z-[${key}0]`}
        >
          <img
            src={avatar}
            alt={label}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      ))}
      <div
        className={`rounded-full w-12 h-12 p-2 overflow-hidden flex items-center justify-center first:ml-0 ${others}`}
      >
        <span className="text-sm font-extrabold font-manrope text-black">
          {lastAvatar}
        </span>
      </div>
    </div>
  );
};

// Rating Card
const RatingCard = () => {
  return (
    <div className="rounded-xl bg-white p-4 flex items-center justify-center gap-8">
      {/*  */}
      <div className="">
        <div className="flex items-center gap-1">
          <h2 className="font-manrope font-extrabold text-black text-5xl lg:text-6xl">
            4.5
          </h2>
          <p className="text-[#00B172]">
            <Star fontSize="large" />
          </p>
        </div>
        <div className="w-fit px-3 py-1 rounded-full bg-black flex items-center justif-center text-white">
          <p className="font-manrope font-bold text-[8px] lg:text-[10px]">
            653 reviews
          </p>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col  gap-2 items-start">
        {[5, 4, 3, 2, 1].map((val, key) => (
          <div key={val + key} className="flex items-center ">
            <p className="font-manrope font-bold text-sm text-[#6a6a6a] ">
              {val}
            </p>
            <p className="text-[#00B172] ml-1 mr-2 ">
              <Star fontSize="small" />
            </p>
            <div
              style={{ width: (110 * val) / 5 }}
              className={`h-[6px] bg-primary -mb-1 rounded-full `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// P2P Merchants
const P2PMerchants = () => {
  return (
    <div className="rounded-lg space-y-4 bg-black px-4 py-5 w-full flex flex-col gap-4 justify-evenly">
      {/*  */}
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M19 11.8179H5C3.89543 11.8179 3 12.7133 3 13.8179V20.8179C3 21.9224 3.89543 22.8179 5 22.8179H19C20.1046 22.8179 21 21.9224 21 20.8179V13.8179C21 12.7133 20.1046 11.8179 19 11.8179Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11.8179V7.81787C7 6.49179 7.52678 5.22002 8.46447 4.28234C9.40215 3.34466 10.6739 2.81787 12 2.81787C13.3261 2.81787 14.5979 3.34466 15.5355 4.28234C16.4732 5.22002 17 6.49179 17 7.81787V11.8179"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <h4 className="capitalize text-white font-extrabold font-manrope text-xl ">
          MARKET Merchants
        </h4>
      </div>

      <HorizontalAvatars
        avatars={[
          "/assets/avatars/avatar-1.png",
          "/assets/avatars/avatar-2.png",
          "/assets/avatars/avatar-3.png",
          "/assets/avatars/avatar-2.png",
        ]}
        label={"p2p merchants"}
        color="white"
        others={"bg-primary border border-white -ml-2"}
        lastAvatar={"1.2K"}
      />

      {/*  */}
      <div className="text-white space-y-2 ">
        <h4 className="font-manrope text-[16px] font-extrabold ">
          Make money as a merchant
        </h4>
        <p className="text-xs font-normal font-manrope">
          There is no limit to your earning as a merchant that can process
          dollar funds for people on Ratefy. Funds are safe on Ratefy with the
          escrow feature. Ratefy is on its way to become the next big thing.
        </p>
      </div>

      {/*  */}
      <Link href={"/marketplace"} passHref className="outline-none">
        <div className="flex items-center gap-2">
          <p className="text-primary font-manrope text-sm font-bold">
            Check MARKET offers
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M5 12.8179H19"
              stroke="#00B172"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5.81787L19 12.8179L12 19.8179"
              stroke="#00B172"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

// Rank
const Rank = () => {
  return (
    <div className="rounded-md space-y-8 bg-white px-4 py-6">
      {/*  */}
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <g clipPath="url(#clip0_3573_3073)">
            <rect
              y="0.248779"
              width="20.25"
              height="20.25"
              rx="10.125"
              fill="#00B172"
            />
          </g>
          <defs>
            <clipPath id="clip0_3573_3073">
              <rect
                y="0.248779"
                width="20.25"
                height="20.25"
                rx="10.125"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="text-primary uppercase font-extrabold font-manrope text-lg">
          rank
        </p>
      </div>
      {/*  */}
      <div className="flex gap-6">
        <div className="">
          <p className="text-black font-manrope text-2xl font-extrabold ">
            1.127
          </p>
          <div className="flex items-center gap-2">
            <p className="text-primary font-manrope text-sm font-extrabold">
              5.6%
            </p>
            <p className="text-[#8c8c8c] font-manrope text-xs font-medium">
              vs last week
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="114"
          height="51"
          viewBox="0 0 114 51"
          fill="none"
        >
          <path
            d="M1 35.2489C4.5 41.7489 12.7 53.3989 17.5 47.9989C23.5 41.2489 22.75 20.9989 30.25 29.2489C37.75 37.4989 44.5 23.2489 51.25 29.2489C58 35.2489 67 21.7487 70.75 25.4988C74.5 29.2489 85.75 46.4988 88 41.9988C90.25 37.4988 87.25 20.2488 97 16.4988C106.75 12.7488 112 17.9988 112.75 1.49878"
            stroke="#00B172"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
