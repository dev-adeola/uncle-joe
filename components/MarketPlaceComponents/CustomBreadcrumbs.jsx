import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function CustomBreadcrumbs({
  index,
  fundExchangeInfo,
  setFundExchangeIndex,
  seletectedValueHowToPayOptions,
}) {
  return (
    <Stack spacing={{ xs: 0.5, md: 1 }}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="medium"
            className="font-medium text-subText"
          />
        }
        aria-label="breadcrumb"
      >
        <div>
          <div
            onClick={() => setFundExchangeIndex(0)}
            className=" h-[12px] w-fit flex-shrink-0 md:hidden cursor-pointer"
          >
            <p className="text-center font-rubik text-[10px] md:text-[14px] font-medium leading-[15px] text-lightGray">
              E-wallet
            </p>
          </div>
          {
            <div
              onClick={() => setFundExchangeIndex(0)}
              className="hidden h-[12px] w-fit flex-shrink-0 md:flex cursor-pointer"
            >
              {!fundExchangeInfo?.eWallet?.ewallet_name &&
              !fundExchangeInfo?.eWallet?.image_url ? (
                <p className="text-center font-rubik text-[10px] md:text-[14px] font-medium leading-[15px] text-lightGray">
                  E-wallet
                </p>
              ) : (
                <div className="flex items-center space-x-2">
                  <img
                    src={
                      "https://offerbased.ratefy.co/storage/images/ewallets/" +
                      fundExchangeInfo?.eWallet.image_url
                    }
                    alt={fundExchangeInfo?.eWallet.ewallet_name}
                    className="rounded-row h-[24px] w-[24px] "
                  />
                  <p className="text-center font-rubik text-[14px] font-medium leading-[15px] text-lightGray">
                    {fundExchangeInfo?.eWallet.ewallet_name}
                  </p>
                </div>
              )}
            </div>
          }
        </div>
        <div
          onClick={() => setFundExchangeIndex(1)}
          className="h-[12px] w-fit flex-shrink-0 cursor-pointer"
        >
          <p
            className={`text-center font-rubik text-[10px] md:text-[14px] font-medium leading-[15px] ${
              index >= 1 ? "text-lightGray" : "text-subText"
            } `}
          >
            {seletectedValueHowToPayOptions
              ? seletectedValueHowToPayOptions?.option
              : "  Payment Options"}
          </p>
        </div>
        <div
          onClick={() => setFundExchangeIndex(2)}
          className="h-[12px] w-fit flex-shrink-0 cursor-pointer "
        >
          <p
            className={`text-center font-rubik text-[10px] md:text-[14px] font-medium leading-[15px] ${
              index >= 2 ? "text-lightGray" : "text-subText"
            } `}
          >
            Tags
          </p>
        </div>
      </Breadcrumbs>
    </Stack>
  );
}
