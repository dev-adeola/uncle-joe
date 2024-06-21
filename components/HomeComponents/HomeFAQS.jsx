"use client";

import React, { useState } from "react";

const accordionData = [
  {
    title: "How do I see my Payoneer Funds?",
    content:
      "Select the appropriate Payoneer offer from the list above, Get your receiving amount, attach your bank account and follow the offer instructions to complete the exchange. Naira will be sent to you as soon as your payment has been confirmed.",
  },
  {
    title: "Who can use Ratefy?",
    content:
      "Select the appropriate Payoneer offer from the list above, Get your receiving amount, attach your bank account and follow the offer instructions to complete the exchange. Naira will be sent to you as soon as your payment has been confirmed.",
  },
  {
    title: "Can I use Ratefy to withdraw from Fiverr or Upwork?",
    content:
      "Select the appropriate Payoneer offer from the list above, Get your receiving amount, attach your bank account and follow the offer instructions to complete the exchange. Naira will be sent to you as soon as your payment has been confirmed.",
  },
  {
    title: "Is Ratefy safe to use?",
    content:
      "Select the appropriate Payoneer offer from the list above, Get your receiving amount, attach your bank account and follow the offer instructions to complete the exchange. Naira will be sent to you as soon as your payment has been confirmed.",
  },
];

function HomeFAQS() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="space-y-4">
      {/*  */}
      <h4 className="uppercase font-rubik font-bold text-white text-xl md:text-3xl xl:text-[40px] xl:leading-[50px]">
        faqs
      </h4>

      {/*  */}
      <div className="space-y-4">
        {accordionData.map((accordion, id) => (
          <div
            onClick={() => setActiveAccordion(id)}
            key={accordion.title + id}
            className="w-full  space-y-2 md:space-y-4 p-4 md:p-6 bg-secondary "
          >
            <div className="flex items-start justify-between cursor-pointer">
              <h4 className="outline-none font-karla text-sm md:text-xl text-lightGray xl:text-2xl font-semibold ">
                {accordion.title}
              </h4>
              <span>
                {id === activeAccordion ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="9"
                    viewBox="0 0 19 9"
                    fill="none"
                  >
                    <path
                      d="M18.2969 8.39209L9.29687 0.392089L0.296875 8.39209L18.2969 8.39209Z"
                      fill="#BBBBBB"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="9"
                    viewBox="0 0 18 9"
                    fill="none"
                  >
                    <path
                      d="M0.433594 0.188965L9.17313 8.71204L17.9127 0.188965H0.433594Z"
                      fill="#BBBBBB"
                    />
                  </svg>
                )}
              </span>
            </div>
            {/*  */}
            {id === activeAccordion && (
              <div className="w-full md:w-3/4 transition duration-300">
                <p className="font-karla font-normal text-xs md:text-lg text-darkGray xl:text-2xl">
                  {accordion.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFAQS;
