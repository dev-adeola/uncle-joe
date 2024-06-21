import Link from "next/link";
import React from "react";

function HomeBuyFund() {
  return (
    <div className="w-full flex flex-col lg:items-center lg:flex-row gap-8 md:gap-12 py-8">
      {/*  */}
      <div className="md:order-1 flex flex-col space-y-4 items-end md:items-start">
        {/*  */}
        <div className="space-y-1">
          <p className="space-x-2 text-lightGray capitalize font-rubik text-2xl md:text-3xl xl:text-[40px] xl:leading-[50px] font-bold flex items-center justify-end md:justify-start">
            <span className="text-gradient">buy</span>
            <span>any funds</span>
          </p>

          <div className="items-center space-x-2 flex justify-start">
            <div className="w-fit px-3 py-2 space-x-2 h-[30px] rounded-md bg-[#00B172]/40 items-center flex">
              <img
                src="/assets/e-wallet/payoneer.png"
                alt="payoneer"
                className="w-[17px] h-[17px] rounded-full object-cover"
              />
              <p className="capitalize font-karla text-xs md:text-sm font-bold text-darkGray">
                payoneer
              </p>
            </div>
            <div className="w-fit px-3 py-2 space-x-2 h-[30px] rounded-md bg-[#00B172]/40 items-center flex">
              <img
                src="/assets/e-wallet/paypal.png"
                alt="paypal"
                className="w-[17px] h-[17px] rounded-full object-cover"
              />
              <p className="capitalize font-karla text-xs md:text-sm font-bold text-darkGray">
                Paypal
              </p>
            </div>
            <div className="w-fit px-3 py-2 space-x-2 h-[30px] rounded-md bg-[#00B172]/40 items-center flex">
              <img
                src="/assets/e-wallet/fiverr.png"
                alt="others platform"
                className="w-[17px] h-[17px] rounded-full object-cover"
              />
              <p className="capitalize font-karla text-xs md:text-sm font-bold text-darkGray">
                Others
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <p className="text-darkGray text-right md:text-left text-sm md:text-2xl font-normal font-karla max-w-[375px]">
            Buy dollar funds as an individual or business to any wallet at
            competitive exchange rates to maximize the value of your money.
          </p>
        </div>

        {/*  */}
        <Link href={"/marketplace"} passHref>
          <div className="w-fit px-4 py-2 border border-primary bg-transparent rounded-sm hover:bg-primary/75  active:bg-primary/75   transition duration-300">
            <p className="font-bold text-white font-karla text-sm md:text-2xl capitalize">
              get started now
            </p>
          </div>
        </Link>
      </div>
      {/*  */}
      <div className=" md:order-2 w-full max-w-[560px] h-full max-h-[455px] rounded-[20px] overflow-hidden">
        <img
          src={"/assets/images/buyfund.png"}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default HomeBuyFund;
