import { Box } from "@mui/material";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AddMoneyToWallet({ userId, AccountData, IsSuccess }) {
  console.log({ userId });
  return (
    <Box className="w-full border-[0.5px] ">
      {/*  */}
      <div className="px-3  border-b-[0.5px] md:px-4 xl:px-6 flex h-[24px] md:h-[30px] xl:h-[37px] items-center justify-start bg-[#1C2225]">
        <p className="font-karla text-lg font-bold text-white">Bank Transfer</p>
      </div>
      {/*  */}
      <div className="w-full py-4 px-3 md:px-4 xl:px-6 space-y-2 md:space-y-3 bg-[#181C1F]">
        {/*  */}
        <div className="w-full">
          <p className="text-xs md:text-sm xl:text-[16px] font-karla font-normal">
            Use the details below to send money to your Ratefy wallet from any
            of your bank’s app or through internet banking. Wait for some
            minutes and refresh the page.
          </p>
        </div>
        {/*  */}
        <div className="w-full flex flex-col space-y-1 items-start">
          <p className="font-karla text-[16px] font-normal text-white">
            Bank name
          </p>
          <div className="w-full px-2 py-1 border-[0.5px] border-[#333] bg-[#1c2225] flex items-center justify-between text-white">
            <p className="font-karla text-sm md:text-[16px] xl:text-[20px] font-bold text-center">
              {IsSuccess
                ? AccountData?.wallet["account detail"]?.bankName
                : "Loading......"}
            </p>
            <CopyToClipboard
              text={AccountData?.wallet["account detail"]?.bankName}
              onCopy={() => alert("Bank name copied to clipboard")}
            >
              <span className="cursor-pointer flex items-center space-x-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <path
                      d="M10.1769 0.245117H7.07411C5.66851 0.245117 4.55455 0.245117 3.68363 0.363047C2.78641 0.484164 2.0605 0.739147 1.48838 1.31366C0.915467 1.88816 0.661281 2.61726 0.540961 3.51767C0.423828 4.39258 0.423828 5.51052 0.423828 6.92169V11.5735C0.423828 12.7751 1.1569 13.8046 2.19835 14.2365C2.14496 13.5114 2.14496 12.4955 2.14496 11.6492V7.65716C2.14496 6.63643 2.14496 5.75594 2.23899 5.05155C2.34019 4.29616 2.56808 3.57265 3.15294 2.98539C3.73781 2.39813 4.45894 2.16944 5.21114 2.06745C5.91234 1.97342 6.78884 1.97342 7.80639 1.97342H10.2526C11.2694 1.97342 12.1443 1.97342 12.8463 2.06745C12.6359 1.53069 12.2687 1.06974 11.7926 0.74469C11.3165 0.419637 10.7534 0.24555 10.1769 0.245117Z"
                      fill="white"
                    />
                    <path
                      d="M3.29297 7.73272C3.29297 5.56059 3.29297 4.47452 3.96549 3.79961C4.63721 3.1247 5.71849 3.1247 7.88266 3.1247H10.1775C12.3409 3.1247 13.423 3.1247 14.0955 3.79961C14.7672 4.47452 14.7672 5.56059 14.7672 7.73272V11.5734C14.7672 13.7455 14.7672 14.8316 14.0955 15.5065C13.423 16.1814 12.3409 16.1814 10.1775 16.1814H7.88266C5.71929 16.1814 4.63721 16.1814 3.96549 15.5065C3.29297 14.8316 3.29297 13.7455 3.29297 11.5734V7.73272Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-sm font-semibold font-karla">Copy</p>
              </span>
            </CopyToClipboard>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex flex-col space-y-1 items-start">
          <p className="font-karla text-[16px] font-normal text-white">
            Account number
          </p>
          <div className="w-full px-2 py-1 border-[0.5px] border-[#333] bg-[#1c2225] flex items-center justify-between text-white">
            <p className="font-karla text-sm md:text-[16px] xl:text-[20px] font-bold text-center">
              {IsSuccess
                ? AccountData?.wallet["account detail"]?.accountNumber
                : "Loading....."}
            </p>

            <CopyToClipboard
              text={AccountData?.wallet["account detail"]?.accountNumber}
              onCopy={() => alert("Account number copied to clipboard")}
            >
              <span className="cursor-pointer flex items-center space-x-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <path
                      d="M10.1769 0.245117H7.07411C5.66851 0.245117 4.55455 0.245117 3.68363 0.363047C2.78641 0.484164 2.0605 0.739147 1.48838 1.31366C0.915467 1.88816 0.661281 2.61726 0.540961 3.51767C0.423828 4.39258 0.423828 5.51052 0.423828 6.92169V11.5735C0.423828 12.7751 1.1569 13.8046 2.19835 14.2365C2.14496 13.5114 2.14496 12.4955 2.14496 11.6492V7.65716C2.14496 6.63643 2.14496 5.75594 2.23899 5.05155C2.34019 4.29616 2.56808 3.57265 3.15294 2.98539C3.73781 2.39813 4.45894 2.16944 5.21114 2.06745C5.91234 1.97342 6.78884 1.97342 7.80639 1.97342H10.2526C11.2694 1.97342 12.1443 1.97342 12.8463 2.06745C12.6359 1.53069 12.2687 1.06974 11.7926 0.74469C11.3165 0.419637 10.7534 0.24555 10.1769 0.245117Z"
                      fill="white"
                    />
                    <path
                      d="M3.29297 7.73272C3.29297 5.56059 3.29297 4.47452 3.96549 3.79961C4.63721 3.1247 5.71849 3.1247 7.88266 3.1247H10.1775C12.3409 3.1247 13.423 3.1247 14.0955 3.79961C14.7672 4.47452 14.7672 5.56059 14.7672 7.73272V11.5734C14.7672 13.7455 14.7672 14.8316 14.0955 15.5065C13.423 16.1814 12.3409 16.1814 10.1775 16.1814H7.88266C5.71929 16.1814 4.63721 16.1814 3.96549 15.5065C3.29297 14.8316 3.29297 13.7455 3.29297 11.5734V7.73272Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-sm font-semibold font-karla">Copy</p>
              </span>
            </CopyToClipboard>
          </div>
        </div>
        {/*  */}
        <div className="w-full flex flex-col space-y-1 items-start">
          <p className="font-karla text-[16px] font-normal text-white">
            Account name
          </p>
          <div className="w-full px-2 py-1 border-[0.5px] border-[#333] bg-[#1c2225] flex items-center justify-between text-white">
            <p className="font-karla text-sm md:text-[16px] xl:text-[20px] font-bold text-center">
              {IsSuccess
                ? AccountData?.wallet["account detail"]?.accountName
                : "Loading....."}
            </p>
            <CopyToClipboard
              text={AccountData?.wallet["account detail"]?.accountName}
              onCopy={() => alert("Account name copied to clipboard")}
            >
              <span className="cursor-pointer flex items-center space-x-1">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                  >
                    <path
                      d="M10.1769 0.245117H7.07411C5.66851 0.245117 4.55455 0.245117 3.68363 0.363047C2.78641 0.484164 2.0605 0.739147 1.48838 1.31366C0.915467 1.88816 0.661281 2.61726 0.540961 3.51767C0.423828 4.39258 0.423828 5.51052 0.423828 6.92169V11.5735C0.423828 12.7751 1.1569 13.8046 2.19835 14.2365C2.14496 13.5114 2.14496 12.4955 2.14496 11.6492V7.65716C2.14496 6.63643 2.14496 5.75594 2.23899 5.05155C2.34019 4.29616 2.56808 3.57265 3.15294 2.98539C3.73781 2.39813 4.45894 2.16944 5.21114 2.06745C5.91234 1.97342 6.78884 1.97342 7.80639 1.97342H10.2526C11.2694 1.97342 12.1443 1.97342 12.8463 2.06745C12.6359 1.53069 12.2687 1.06974 11.7926 0.74469C11.3165 0.419637 10.7534 0.24555 10.1769 0.245117Z"
                      fill="white"
                    />
                    <path
                      d="M3.29297 7.73272C3.29297 5.56059 3.29297 4.47452 3.96549 3.79961C4.63721 3.1247 5.71849 3.1247 7.88266 3.1247H10.1775C12.3409 3.1247 13.423 3.1247 14.0955 3.79961C14.7672 4.47452 14.7672 5.56059 14.7672 7.73272V11.5734C14.7672 13.7455 14.7672 14.8316 14.0955 15.5065C13.423 16.1814 12.3409 16.1814 10.1775 16.1814H7.88266C5.71929 16.1814 4.63721 16.1814 3.96549 15.5065C3.29297 14.8316 3.29297 13.7455 3.29297 11.5734V7.73272Z"
                      fill="white"
                    />
                  </svg>
                </p>
                <p className="text-sm font-semibold font-karla">Copy</p>
              </span>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AddMoneyToWallet;
