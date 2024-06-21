import Link from "next/link";
import React from "react";

function HomeOurProduct() {
  return (
    <div className="space-y-8 py-8">
      <p className="capitalize text-center font-rubik font-bold text-4xl lg:text-5xl text-lightGray ">
        our products
      </p>
      {/*  */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-8">
        {/* Left */}
        <div className="product-bg-gradient rounded-[10px] md:rounded-[16px] xl:rounded-[30px] pl-4 pt-4 lg:pl-8 lg:pt-8 flex flex-col items-start gap-4 w-full ">
          {/*  */}
          <p className="space-x-2 text-lightGray capitalize font-rubik text-2xl md:text-3xl xl:text-[40px] font-bold flex items-center justify-end md:justify-start">
            <span className="text-gradient">ratefy</span>
            <span className="uppercase">p2p</span>
          </p>
          {/*  */}
          <p className="text-darkGray font-normal font-karla text-sm lg:text-lg w-4/5 lg:w-2/3">
            Vast network of peers to which you can buy and sell your dollar
            funds.
          </p>
          {/*  */}

          {/*  */}
          <div className="flex justify-between overflow-hidden items-center h-full space-x-4">
            <div className="flex justify-between py-4 flex-col items-center space-y-12 pb-4 h-full lg:pb-8">
              <div className="flex flex-col space-y-2 lg:space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    {" "}
                    Exchange Offer options
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    Set your own rate
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    Create your own offer
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col space-y-4">
                <Link passHref href={"#"}>
                  <div className="w-[180px] flex items-center text-white py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-primary hover:bg-primary/95 active:bg-primary/95 transition duration-300 ">
                    <p className="capitalize text-center w-full">
                      check MARKET{" "}
                    </p>
                  </div>
                </Link>
                <Link passHref href={"#"}>
                  <div className="flex items-center w-[180px] text-white space-x-4 py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-black border-primary border transition duration-300 ">
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
                    <p className="capitalize">how it works </p>
                  </div>
                </Link>
              </div>
            </div>

            <img src="/assets/images/mockup-1.png" className="w-full h-full " />
          </div>
        </div>

        {/* Right */}
        <div className="product-bg-gradient rounded-[10px] md:rounded-[16px] xl:rounded-[30px] pl-4 pt-4 lg:pl-8 lg:pt-8 flex flex-col items-start gap-4 w-full">
          {/*  */}
          <p className="space-x-2 text-lightGray capitalize font-rubik text-2xl md:text-3xl xl:text-[40px] font-bold flex items-center justify-end md:justify-start">
            <span className="text-gradient">ratefy</span>
            <span className="capitalize">express</span>
          </p>
          {/*  */}
          <p className="text-darkGray font-normal font-karla text-sm lg:text-lg w-4/5 lg:w-2/3">
            Select from the available offers and trade at the speed of light.
          </p>
          {/*  */}

          {/*  */}
          <div className="flex overflow-hidden justify-between items-center h-full space-x-4">
            <div className="flex justify-between py-4 flex-col space-y-12 h-full">
              <div className="flex flex-col space-y-2 lg:space-y-3">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    {" "}
                    Straight to the point
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    Hand vetted
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="6"
                    viewBox="0 0 7 6"
                    fill="none"
                  >
                    <circle
                      cx="3.61513"
                      cy="3.23318"
                      r="2.73818"
                      fill="#00B172"
                    />
                  </svg>
                  <p className="font-karla lg:text-[16px] font-normal text-secondary">
                    Managed by admin
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col space-y-4">
                <Link passHref href={"#"}>
                  <div className="w-[180px] flex items-center text-white py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-primary hover:bg-primary/95 active:bg-primary/95 transition duration-300 ">
                    <p className="capitalize text-center w-full">
                      check MARKET{" "}
                    </p>
                  </div>
                </Link>
                <Link passHref href={"#"}>
                  <div className="flex items-center w-[180px] text-white space-x-4 py-2 md:py-3 px-4 md:px-6 rounded-[10px] bg-black border-primary border transition duration-300 ">
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
                    <p className="capitalize">how it works </p>
                  </div>
                </Link>
              </div>
            </div>

            <img src="/assets/images/mockup-2.png" className="w-full h-full " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeOurProduct;
