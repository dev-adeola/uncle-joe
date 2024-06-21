"use client";

import { Box, Typography } from "@mui/material";
import React from "react";
import {
  activeTransactions,
  transactionsRequests,
  userStatistics,
} from "@/utils/data";
import Link from "next/link";
import UserStatistic from "./UserStatistic";
import TransactionRequestModal from "./TransactionRequestModal";
import ActiveTransactions from "./ActiveTransactions";
import TransactionRequestsSlider from "./TransactionRequestsSlider";
import {
  useFetchOrdersQuery,
  useFilterRateOfferQuery,
} from "@/services/apiSlice";

const quickActions = [
  {
    label_1: "Find available",
    label_2: "offer",
    href: "/marketplace",
    class: "available-offer",
  },
  {
    label_1: "Create an",
    label_2: "offer",
    href: "/create-offer",
    class: "create-offer",
  },
  {
    label_1: "Fund my Ratefy",
    label_2: "wallet",
    href: "/wallet-and-banks?op=fund",
    class: "fund-wallet",
  },
  {
    label_1: "Withdraw from",
    label_2: "Ratefy wallet",
    href: "/wallet-and-banks?op=withdraw",
    class: "withdraw-wallet",
  },
];

function OverviewPage() {
  const { data, isError, error, isSuccess, isFetching, isLoading } =
    useFetchOrdersQuery();
  // console.log({ data, error });

  const {
    data: rateData,
    isError: IsErrorRateData,
    error: ErrorRateData,
    isSuccess: IsSuccessRateData,
    isFetching: IsFetchingRateData,
    isLoading: IsLoadingRateData,
  } = useFilterRateOfferQuery();
  console.log({ rateData });

  return (
    <Box className="w-full flex flex-col gap-4">
      {/* Overview */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex-col">
            <Box className="flex items-center space-x-4 font-rubik">
              <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
                Account
              </Typography>
              <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
                Overview
              </Typography>
            </Box>
            <Typography className="font-karla text-[16px] font-medium text-darkGray">
              Keep an eye on important metrics
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Statistics */}
      <Box className="flex flex-col items-start space-y-4">
        <Box className="flex items-center space-x-2">
          <p className="font-rubik text-lg font-medium capitalize text-white">
            statistics
          </p>
          <div className="text-grayLight flex items-center  cursor-help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 5 22 25"
              fill="none"
            >
              <path
                d="M10.8105 10.6899C6.99883 10.9985 4.17406 14.1578 4.50195 17.7455C4.82984 21.3333 8.18633 23.9921 11.998 23.6834C15.8097 23.3748 18.6345 20.2155 18.3066 16.6278C17.9787 13.0401 14.6222 10.3813 10.8105 10.6899ZM11.8973 22.5813C8.7327 22.8375 5.9451 20.6294 5.67288 17.6507C5.40066 14.6721 7.74665 12.0483 10.9112 11.792C14.0758 11.5358 16.8634 13.744 17.1356 16.7226C17.4079 19.7013 15.0619 22.3251 11.8973 22.5813Z"
                fill="#98A2B3"
              />
              <path
                d="M12.8635 14.2155C12.3664 13.8715 11.7372 13.7121 11.0901 13.7645C10.443 13.8169 9.85212 14.0766 9.42464 14.494C8.98012 14.9288 8.76376 15.4824 8.81585 16.0524L8.82592 16.1626C8.83175 16.2264 8.89199 16.2741 8.95978 16.2686L9.69931 16.2087C9.7671 16.2032 9.8178 16.1465 9.81196 16.0827L9.80189 15.9725C9.74344 15.333 10.3599 14.7586 11.1749 14.6926C11.99 14.6266 12.7016 15.0935 12.76 15.733C12.8012 16.184 12.5001 16.6248 11.992 16.8573C11.6762 17.0012 11.4176 17.2296 11.2436 17.5154C11.0669 17.8073 10.9924 18.1464 11.023 18.4814L11.0515 18.7931C11.0573 18.857 11.1175 18.9047 11.1853 18.8992L11.9249 18.8393C11.9926 18.8338 12.0433 18.7771 12.0375 18.7133L12.0074 18.3841C11.9954 18.2433 12.0287 18.1023 12.103 17.9795C12.1773 17.8567 12.2892 17.7579 12.4241 17.6959C13.303 17.2931 13.8211 16.4915 13.7445 15.6533C13.694 15.0833 13.3803 14.5725 12.8635 14.2155ZM11.0782 20.4272C11.0922 20.581 11.1707 20.7233 11.2962 20.8228C11.4217 20.9222 11.584 20.9706 11.7475 20.9574C11.9109 20.9441 12.0621 20.8703 12.1677 20.7522C12.2734 20.634 12.3248 20.4812 12.3107 20.3274C12.2967 20.1736 12.2183 20.0313 12.0927 19.9318C11.9672 19.8324 11.8049 19.784 11.6414 19.7972C11.478 19.8105 11.3268 19.8843 11.2212 20.0024C11.1156 20.1206 11.0641 20.2734 11.0782 20.4272Z"
                fill="#98A2B3"
              />
            </svg>
          </div>
        </Box>
        <UserStatistic userStatistics={userStatistics} />
      </Box>

      {/* Quick Actions */}
      <Box className="flex flex-col space-y-4">
        <Box className="flex items-center">
          <p className="font-rubik text-lg font-medium capitalize text-white">
            Quick action
          </p>
        </Box>
        <Box className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2 rounded-[7px] border-[0.4px] border-border p-2 md:gap-4 lg:gap-8 lg:rounded-[12px] lg:p-4">
          {quickActions.map((action) => (
            <Link key={action} href={action.href} passHref>
              <div
                className={`${action.class} flex h-[30px] w-full  items-center justify-start rounded-[5px] px-2 py-2 text-white lg:h-[60px] lg:rounded-[10px] lg:px-6`}
              >
                <p className="font-karla text-xs font-bold lg:text-lg ">
                  {action.label_1} <br className="hidden lg:block" />{" "}
                  {action.label_2}
                </p>
              </div>
            </Link>
          ))}
        </Box>
      </Box>

      {/* Trade requests */}
      <Box className="flex flex-col space-y-4">
        <Box className="flex items-center space-x-4">
          <p className="font-rubik text-lg font-medium capitalize text-white">
            Trade requests
          </p>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M11.4969 0.442007C11.3495 0.379591 11.1821 0.37555 11.0316 0.430773C10.881 0.485996 10.7597 0.595959 10.6942 0.736471C10.6287 0.876983 10.6245 1.03654 10.6824 1.18003C10.7404 1.32352 10.8557 1.4392 11.0031 1.50161C11.0129 1.50625 11.1406 1.56306 11.3473 1.67899C12.5895 2.38339 13.6298 3.36943 14.3757 4.54943C15.6163 6.53068 15.5263 8.6325 15.5093 9.02898L15.5068 9.08695C15.5067 9.24068 15.5706 9.38818 15.6845 9.497C15.7985 9.60581 15.9531 9.66703 16.1144 9.66718C16.2756 9.66734 16.4304 9.60641 16.5445 9.49782C16.6587 9.38922 16.7229 9.24184 16.7231 9.08811V9.09275L16.7243 9.0626C16.751 8.5077 16.7246 7.95163 16.6452 7.40132C16.5115 6.44141 16.1892 5.18241 15.4217 3.95586C13.9014 1.5306 11.638 0.501132 11.4969 0.443167V0.442007ZM11.6064 3.40403C11.5408 3.35772 11.4661 3.32446 11.3868 3.30624C11.3074 3.28803 11.225 3.28522 11.1445 3.298C11.064 3.31077 10.987 3.33886 10.9181 3.3806C10.8493 3.42233 10.7899 3.47686 10.7436 3.54092C10.6973 3.60499 10.665 3.67729 10.6486 3.7535C10.6322 3.82972 10.6321 3.9083 10.6483 3.98456C10.6645 4.06082 10.6966 4.13319 10.7427 4.19737C10.7888 4.26156 10.848 4.31623 10.9168 4.35814C11.4844 4.71886 11.9521 5.2051 12.2799 5.77537C12.6077 6.34564 12.786 6.98303 12.7995 7.63318V7.63782C12.7995 7.79155 12.8636 7.93899 12.9776 8.04769C13.0917 8.1564 13.2463 8.21747 13.4076 8.21747C13.5689 8.21747 13.7236 8.1564 13.8376 8.04769C13.9517 7.93899 14.0157 7.79155 14.0157 7.63782V7.56478C14.0092 7.32846 13.9848 7.0929 13.9428 6.85992C13.8409 6.2949 13.6442 5.74922 13.3602 5.24385C13.069 4.73283 12.6904 4.27167 12.24 3.87935C11.8922 3.57561 11.6027 3.40171 11.6064 3.40403ZM1.56638 11.6444C0.945893 10.5809 0.788848 9.32749 1.12912 8.15461C1.46939 6.98172 2.27971 5.98333 3.38528 5.3748C4.49086 4.76627 5.80308 4.59637 7.03889 4.90174C8.2747 5.20711 9.33505 5.96329 9.99123 7.00716L10.9885 8.65337L13.3067 10.2613C13.3885 10.3181 13.4542 10.3935 13.4977 10.4807C13.5413 10.5678 13.5613 10.6639 13.556 10.7603C13.5507 10.8567 13.5202 10.9503 13.4673 11.0326C13.4144 11.1149 13.3408 11.1833 13.2532 11.2317L10.1761 12.9254L10.1797 12.9277L6.8497 14.7606V14.756L3.77263 16.4485C3.68493 16.4968 3.58598 16.5233 3.48477 16.5259C3.38356 16.5284 3.28329 16.5068 3.19305 16.4631C3.10281 16.4193 3.02546 16.3548 2.96802 16.2753C2.91057 16.1958 2.87486 16.104 2.8641 16.008L2.56369 13.2918L1.56638 11.6444ZM2.61964 11.0647L3.68141 12.8188C3.7238 12.8889 3.75031 12.9667 3.75925 13.0471L3.97574 14.9994L11.835 10.674L10.1688 9.51937C10.1004 9.47166 10.0432 9.41085 10.001 9.34084L8.93797 7.58797C8.44478 6.80715 7.64975 6.24206 6.72392 6.01429C5.79809 5.78653 4.81545 5.91428 3.98743 6.37006C3.15941 6.82584 2.55217 7.57323 2.29637 8.45143C2.04058 9.32962 2.15665 10.2673 2.61964 11.0647ZM7.2997 15.8527C7.61702 16.2339 8.06752 16.4937 8.56905 16.5847C9.07058 16.6757 9.58972 16.5918 10.0318 16.3484C10.4739 16.105 10.8094 15.7182 10.9772 15.2586C11.145 14.799 11.1339 14.2972 10.946 13.8447L7.2997 15.8515V15.8527Z"
                fill="white"
              />
            </svg>
          </span>
        </Box>
        {/* <TransactionRequests transactionsRequests={transactionsRequests} /> */}
        <TransactionRequestsSlider
          transactionsRequests={data}
          // data={data}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
          IsSuccessRateData={IsSuccessRateData}
          rateData={rateData}
        />
      </Box>

      {/* Recent Transanctions Table */}
      <Box className="w-full overflow-x-auto">
        <Typography className="mb-4 font-rubik text-lg font-semibold capitalize text-white">
          active transactions
        </Typography>
        {/* <ActiveTransactionsTable activeTransactions={activeTransactions} /> */}
        <ActiveTransactions activeTransactions={activeTransactions} />
      </Box>

      {/* <TransactionRequestModal /> */}
    </Box>
  );
}

export default OverviewPage;
