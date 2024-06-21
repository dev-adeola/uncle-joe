import React from "react";

function WalletTransactionHistoryRow() {
  return (
    <>
      {/* Mobile & Tablet */}
      <div className="lg:hidden">
        <div className="text-white grid grid-cols-12 items-start bg-[#181C1F] w-full py-2 xl:py-4 px-4 xl:px-6">
          {/*  */}
          <div className="col-span-6">
            <div className="w-full flex flex-col items-start space-y-1">
              <p className="font-karla capitalize text-left text-lightGray font-semibold text-xs md:text-sm">
                completed
              </p>
              {/*  */}
              <div className="w-full flex flex-col items-start space-y-2">
                <div className="flex items-center space-x-1">
                  <p className="font-karla font-bold text-sm md:text-[16px] xl:text-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M15 4.5575L13.9425 3.5L5.25 12.1925V7.25H3.75V14.75H11.25V13.25H6.3075"
                        fill="white"
                      />
                    </svg>
                  </p>
                  <p className="font-karla font-bold text-sm md:text-[16px] xl:text-lg">
                    Added money
                  </p>
                </div>
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px]">
                  2023-03-31 20:30:12
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-span-6">
            <div className="flex flex-col items-end space-y-2 justify-between">
              <p className="font-karla text-right font-medium text-xs md:text-sm xl:text-[16px]">
                0002272292200022722922
              </p>
              <p className="font-karla capitalize text-right font-bold text-lg md:text-[20px] xl:text-[32px]">
                #772.46
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop row */}
      <div className="hidden lg:block text-white">
        <div className="grid grid-cols-12 items-start bg-[#181C1F] w-full py-2 xl:py-4 px-4 xl:px-6">
          {/*  */}
          <div className="col-span-6 lg:col-span-4">
            <div className="w-full flex flex-col items-start space-y-2">
              <div className="flex items-center space-x-1">
                <p className="font-karla font-bold text-sm md:text-[16px] xl:text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M15 4.5575L13.9425 3.5L5.25 12.1925V7.25H3.75V14.75H11.25V13.25H6.3075"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="font-karla font-bold text-sm md:text-[16px] xl:text-lg">
                  Added money
                </p>
              </div>
              <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px]">
                2023-03-31 20:30:12
              </p>
            </div>
          </div>
          {/*  */}
          <div className="col-span-6 lg:col-span-3">
            <p className="font-karla text-left font-medium text-xs md:text-sm xl:text-[16px]">
              0002272292200022722922
            </p>
          </div>
          {/*  */}
          <div className="col-span-6 lg:col-span-2">
            <p className="font-karla capitalize text-right text-lightGray font-semibold text-xs md:text-sm">
              completed
            </p>
          </div>
          {/*  */}
          <div className="col-span-6 lg:col-span-3">
            <p className="font-karla capitalize text-right font-bold text-lg md:text-[20px] xl:text-[32px]">
              #772.46
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletTransactionHistoryRow;
