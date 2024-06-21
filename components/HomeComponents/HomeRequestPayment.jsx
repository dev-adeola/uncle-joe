import Link from "next/link";
import React from "react";

function HomeRequestPayment() {
  return (
    <div className="w-full flex flex-col lg:items-center lg:flex-row gap-8 md:gap-12 py-8">
      {/*  */}
      <div className="md:order-2 flex flex-col space-y-4 items-start">
        {/*  */}
        <div className="space-y-1">
          <p className="text-gradient capitalize font-rubik text-2xl md:text-3xl xl:text-[40px] xl:leading-[50px] font-bold flex items-center">
            request payment
          </p>
          <p className="text-white capitalize font-rubik text-2xl md:text-3xl xl:text-[40px] xl:leading-[50px] font-bold flex items-center">
            From Foreign Buyers
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
          <p className="text-darkGray text-left text-sm md:text-2xl font-normal font-karla max-w-[375px]">
            Accept Payments from foreign clients through any preferred popular
            payment platform and exchange the funds to Naira.
          </p>
        </div>

        {/*  */}
        <Link href={"#"} passHref>
          <div className="w-fit px-4 py-2 border border-primary bg-transparent rounded-sm hover:bg-primary/75  active:bg-primary/75   transition duration-300">
            <p className="font-bold text-white font-karla text-sm md:text-2xl capitalize">
              get started
            </p>
          </div>
        </Link>
      </div>
      {/*  */}
      <div className=" md:order-1 w-full max-w-[560px] h-full max-h-[455px] rounded-[20px] overflow-hidden">
        <img
          src={"/assets/images/requestpayment.png"}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default HomeRequestPayment;
