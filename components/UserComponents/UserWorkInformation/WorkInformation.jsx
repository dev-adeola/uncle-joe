"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import WorkInformationForSeller from "./WorkInformationForSeller";
import WorkInformationForBuyer from "./WorkInformationForBuyer";

function WorkInformation({ userId }) {
  const [pageId, setPageId] = useState(1);
  const [sellerWorkCategory, setSellerWorkCategory] = useState(null);
  const [buyerWorkCategory, setBuyerWorkCategory] = useState(null);
  const [sellerExperienceLevel, setSellerExperienceLevel] = useState(null);
  const [buyerExperienceLevel, setBuyerExperienceLevel] = useState(null);
  const [portfolioLink, setPortfolioLink] = useState(null);
  const [services, setServices] = useState(null);
  const [yearsOfExperience, setYearsOfExperience] = useState(null);
  const [isCheckedForSeller, setIsCheckedForSeller] = useState(false);
  const [isCheckedForBuyer, setIsCheckedForBuyer] = useState(false);
  console.log({ sellerWorkCategory });
  return (
    <Box className="w-full space-y-4">
      <p className="text-secondary text-[10px] md:text-sm font-karla font-normal italic">
        Note: You need to fill the information for &ldquo;Buy dollar&rdquo; and
        &ldquo;Sell dollar&rdquo; to be able to Buy and sell dollar on Ratefy.
      </p>

      <div className="flex items-center gap-2 md:gap-4">
        <p className="text-secondary text-sm md:text-lg font-normal font-rubik">
          I want to
        </p>
        <WorkModeButton
          id={1}
          label={"sell dollar"}
          pageId={pageId}
          setPageId={setPageId}
        />
        {/* <br className="md:hidden" /> */}
        <p className="text-secondary text-xs md:text-sm font-normal font-rubik">
          and&#47;or
        </p>
        <WorkModeButton
          id={2}
          label={"buy dollar"}
          pageId={pageId}
          setPageId={setPageId}
        />
      </div>

      {pageId === 1 ? (
        <WorkInformationForSeller
          sellerWorkCategory={sellerWorkCategory}
          setSellerWorkCategory={setSellerWorkCategory}
          experienceLevel={sellerExperienceLevel}
          setExperienceLevel={setSellerExperienceLevel}
          portfolioLink={portfolioLink}
          setPortfolioLink={setPortfolioLink}
          services={services}
          userId={userId}
          setServices={setServices}
          yearsOfExperience={yearsOfExperience}
          setYearsOfExperience={setYearsOfExperience}
          isChecked={isCheckedForSeller}
          setIsChecked={setIsCheckedForSeller}
        />
      ) : (
        <WorkInformationForBuyer
          buyerWorkCategory={buyerWorkCategory}
          setBuyerWorkCategory={setBuyerWorkCategory}
          experienceLevel={buyerExperienceLevel}
          setExperienceLevel={setBuyerExperienceLevel}
          isChecked={isCheckedForBuyer}
          userId={userId}
          setIsChecked={setIsCheckedForBuyer}
        />
      )}
    </Box>
  );
}

export default WorkInformation;

export const WorkModeButton = ({ label, id, setPageId, pageId }) => {
  const isActive = id === pageId;

  return (
    <div
      onClick={() => setPageId(id)}
      className={`${
        isActive && "!border-primary"
      } border-2 border-black rounded-md w-fit px-3 md:px-6 py-1 md:py-2 bg-black flex items-center justify-center transition duration-300 cursor-pointer`}
    >
      <p className="capitalize text-xs md:text-lg xl:text-xl font-karla font-medium text-[#a6a6a6]  transition duration-300">
        {label}
      </p>
    </div>
  );
};
