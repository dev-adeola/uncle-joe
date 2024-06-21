import Link from "next/link";
import React from "react";

function HomeBecomePartner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:mt-8">
      {/*  */}
      <div className="w-full flex flex-col justify-center items-start md:items-center bg-black p-6 lg:p-8 space-y-4 min-h-[290px] min-lg:h-[500px]">
        <p className="text-white text-center lg:text-left font-bold font-rubik lg:text-4xl text-2xl lg:w-2/3">
          Refer one user,
          <br />
          Earn up to <span className="text-gradient">#500,000</span>
        </p>
        <p className="font-karla text-darkGray text-center lg:text-left text-sm lg:text-xl font-nomral">
          As Ratefy Affiliate Partner, get paid every <br /> time your referral
          exchange till you earn <br /> ₦500,000 on each and every referral.
        </p>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 mt-4">
          <div className="flex flex-col items-center">
            <Link passHref href={"#"}>
              <div className="w-[160px] flex items-center text-white py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-primary hover:bg-primary/95 active:bg-primary/95 transition duration-300 ">
                <p className="text-sm lg:text-lg capitalize text-center w-full">
                  Become a partner{" "}
                </p>
              </div>
            </Link>
            <Link passHref href={"#"}>
              <p className="underline mt-1 text-darkGray text-xs font-karla font-sm font-medium  ">
                Terms and conditions apply
              </p>
            </Link>
          </div>
          <Link passHref href={"#"}>
            <div className="flex items-center w-[160px] text-white space-x-4 py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-black border-primary border transition duration-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M7.32227 12.3373V6.46064C7.32239 6.38711 7.34228 6.31497 7.37987 6.25177C7.41746 6.18858 7.47135 6.13665 7.5359 6.10145C7.60045 6.06624 7.67328 6.04904 7.74676 6.05165C7.82024 6.05426 7.89167 6.07659 7.95355 6.1163L12.525 9.05383C12.5829 9.09092 12.6306 9.14197 12.6635 9.20228C12.6965 9.2626 12.7138 9.33024 12.7138 9.39899C12.7138 9.46773 12.6965 9.53538 12.6635 9.59569C12.6306 9.65601 12.5829 9.70706 12.525 9.74414L7.95355 12.6825C7.89167 12.7222 7.82024 12.7445 7.74676 12.7471C7.67328 12.7498 7.60045 12.7326 7.5359 12.6973C7.47135 12.6621 7.41746 12.6102 7.37987 12.547C7.34228 12.4838 7.32239 12.4117 7.32227 12.3382V12.3373Z"
                  fill="#00B172"
                />
                <path
                  d="M0.353516 9.39899C0.353516 4.41839 4.39129 0.380615 9.37189 0.380615C14.3525 0.380615 18.3903 4.41839 18.3903 9.39899C18.3903 14.3796 14.3525 18.4174 9.37189 18.4174C4.39129 18.4174 0.353516 14.3796 0.353516 9.39899ZM9.37189 1.61039C7.30623 1.61039 5.32517 2.43098 3.86452 3.89162C2.40388 5.35227 1.58329 7.33333 1.58329 9.39899C1.58329 11.4647 2.40388 13.4457 3.86452 14.9064C5.32517 16.367 7.30623 17.1876 9.37189 17.1876C11.4376 17.1876 13.4186 16.367 14.8793 14.9064C16.3399 13.4457 17.1605 11.4647 17.1605 9.39899C17.1605 7.33333 16.3399 5.35227 14.8793 3.89162C13.4186 2.43098 11.4376 1.61039 9.37189 1.61039Z"
                  fill="#00B172"
                />
              </svg>{" "}
              <p className="text-sm lg:text-lg capitalize">how it works </p>
            </div>
          </Link>
        </div>
      </div>

      {/*  */}
      <div className="w-full h-full">
        <div className="w-full grid grid-cols-5 grid-rows-5 min-h-[290px] min-lg:h-[500px]">
          <div className="overflow-hidden col-span-3 row-span-5">
            <img
              src="/assets/images/refer-1.png"
              alt="refer and earn on ratefy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden col-span-2 row-span-2">
            <img
              src="/assets/images/refer-2.png"
              alt="refer and earn on ratefy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden col-span-2 row-span-3">
            <img
              src="/assets/images/refer-3.png"
              alt="refer and earn on ratefy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBecomePartner;
