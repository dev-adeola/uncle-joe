"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BankAccountDetail from "./BankAccountDetail";
import BankAccountForm from "./BankAccountForm";
import { openWalletModel } from "@/redux/slices/walletSlice";
import WalletModal from "./WalletModalComponents/WalletModal";
import { useDispatch } from "react-redux";
import {
  useDeleteBankMutation,
  useGetAccountMutation,
  useGetBalanceQuery,
  useGetBankAccountsQuery,
  useGetWalletMutation,
} from "@/services/apiSlice";
import { useCallback, useEffect, useMemo } from "react";
import { toast } from "react-toastify";

function WalletAndBank({ userId }) {
  const dispatch = useDispatch();
  const [newBankDetails, setNewBankDetails] = useState(false);

  const [
    deleteBank,
    {
      data: deleteBankData,
      isError: IsErrorDeleteBank,
      isLoading: IsLoadingDeleteBank,
      error: ErrorDeleteBank,
      isSuccess: IsSuccessDeleteBank,
    },
  ] = useDeleteBankMutation();
  //

  //
  const handleTransactionHistory = () => {
    dispatch(
      openWalletModel({
        id: "transaction-history",
        title: "transaction history",
      })
    );
  };

  const handleDelete = async (bank_account_id) => {
    try {
      const confirmation = confirm("Are you sure you want to delete?");

      // If the user confirms, proceed with deletion
      if (confirmation) {
        console.log("Item deleted successfully.");
        const response = await deleteBank({
          bank_account_id: bank_account_id,
        }).unwrap();
        console.log({ response });
        if (response?.data?.status == "ok") {
          toast.success("Data deleted successful");
        } else {
          console.log("{ response }", response);
          toast.error(response?.data?.errors[0]?.detail);
        }
      } else {
        // If the user cancels, do nothing or provide feedback
        toast.error("Action canceled");
        console.log("Deletion canceled.");
      }
    } catch (error) {
      console.log({ error });
      if (error) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.data?.message);
      }
    }
  };

  const handleAddMoney = () => {
    dispatch(openWalletModel({ id: "add-money", title: "add money" }));
  };
  const handleWithdrawal = () => {
    dispatch(openWalletModel({ id: "withdraw", title: "withdraw funds" }));
  };

  const [getWallet, { data, isError, isLoading, error, isSuccess }] =
    useGetWalletMutation();

  const {
    data: BankAcount,
    isError: IsErrorBankAccount,
    isLoading: IsLoadingBankAccount,
    error: ErrorankAccount,
    isSuccess: IsuccessankAccount,
  } = useGetBankAccountsQuery();
  const {
    data: balance,
    isError: IsErrorBalance,
    isLoading: IsLoadingBalance,
    error: ErrorBalance,
    isSuccess: IsuccessBalance,
  } = useGetBalanceQuery();
  const [
    getAccount,
    {
      data: AccountData,
      isError: IsError,
      isLoading: IsLoading,
      error: Error,
      isSuccess: IsSuccess,
    },
  ] = useGetAccountMutation();
  console.log({
    data,
    error,
    AccountData,
    Error,
    BankAcount,
    ErrorankAccount,
    balance,
  });
  const handleClose = () => {
    setNewBankDetails(false);
  };
  const handSendRequest = useCallback(async () => {
    try {
      await getWallet({ uuid: userId }).unwrap();
      await getAccount({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      toast.error(error?.error || "An error occurred");
    }
  }, [userId]);

  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);

  return (
    <Box className="w-full flex flex-col gap-4 md:gap-6 xl:gap-8">
      {/* Wallet Balance */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex-col">
            <Box className="flex items-center space-x-4 font-rubik">
              <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
                Wallet
              </Typography>
              <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
                Balance
              </Typography>
            </Box>
            <Typography className="font-karla text-[16px] font-medium text-darkGray">
              Fund wallet and withdraw to other bank account
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Balance */}
      <Box className="space-y-1 md:space-y-2">
        <Box className="flex flex-col md:flex-row justify-between items-start md:items-end rounded p-4 md:p-6 shadow bg-secondary">
          {/*  */}
          <Box className="flex flex-col space-y-2 items-start">
            <p className="font-karla font-normal text-xs md:text-[16px] text-darkGray">
              Total Balance (in Naira)
            </p>
            <p className="font-bold font-karla text-lightGray text[25px] md:text-[30px]">
              {IsuccessBalance && balance?.response?.data?.availableBalance}
            </p>
          </Box>
          {/*  */}
          <Box className="mt-4 md:mt-0 flex items-center space-x-4 md:space-x-6 xl:space-x-8">
            {/*  */}
            <div
              onClick={handleAddMoney}
              className="px-3 md:px-4 py-2 rounded text-white bg-primary flex items-center space-x-2 w-fit cursor-pointer hover:bg-primary/90 active:bg-primary/90 duration-300 transition"
            >
              <p className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M20 5.91L18.59 4.5L7 16.09V9.5H5V19.5H15V17.5H8.41"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M15.6896 5.02189L14.6233 3.95557L5.85822 12.7206V7.73686H4.3457V15.2995H11.9083V13.7869H6.92455"
                    fill="white"
                  />
                </svg>
              </p>
              <p className="font-karla font-bold text-sm md:text-lg">
                Add money
              </p>
            </div>
            {/*  */}
            <div
              onClick={handleWithdrawal}
              className="px-3 md:px-4 py-2 rounded text-black bg-buttonBg flex items-center space-x-2 w-fit cursor-pointer hover:bg-buttonBg/90 active:bg-buttonBg/90 duration-300 transition"
            >
              <p className="hidden md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M19.8232 1.67565C19.9069 1.75954 19.9642 1.86618 19.9878 1.98234C20.0115 2.09849 20.0005 2.21904 19.9562 2.32901L12.9166 19.9298C12.8545 20.0848 12.7509 20.2197 12.6172 20.3196C12.4834 20.4195 12.3247 20.4806 12.1585 20.4961C11.9923 20.5116 11.825 20.4809 11.6751 20.4075C11.5252 20.334 11.3984 20.2207 11.3088 20.0798L7.46412 14.0362L1.42131 10.1911C1.28015 10.1015 1.16647 9.97473 1.09282 9.82464C1.01917 9.67456 0.9884 9.50705 1.00392 9.34058C1.01944 9.17412 1.08063 9.01518 1.18076 8.8813C1.28088 8.74742 1.41604 8.64381 1.57132 8.5819L19.1699 1.54377C19.2798 1.4995 19.4004 1.48851 19.5165 1.51217C19.6327 1.53584 19.7393 1.5931 19.8232 1.67686V1.67565ZM8.67148 13.6829L12.0117 18.9316L17.7375 4.61576L8.67148 13.6829ZM16.8822 3.76035L2.56817 9.48692L7.81738 12.8263L16.8822 3.76035Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.7"
                  />
                </svg>
              </p>
              <p className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M15.37 1.33205C15.4333 1.39549 15.4766 1.47615 15.4945 1.56399C15.5124 1.65183 15.5041 1.743 15.4706 1.82616L10.1468 15.1369C10.0999 15.2541 10.0215 15.3561 9.92037 15.4317C9.81923 15.5073 9.69919 15.5534 9.57349 15.5652C9.44779 15.5769 9.32128 15.5537 9.2079 15.4982C9.09453 15.4426 8.99867 15.3569 8.93088 15.2504L6.02332 10.6799L1.45338 7.77194C1.34663 7.70421 1.26066 7.60831 1.20496 7.49481C1.14926 7.38131 1.12599 7.25462 1.13773 7.12873C1.14946 7.00284 1.19575 6.88264 1.27147 6.7814C1.34719 6.68015 1.4494 6.60179 1.56683 6.55497L14.8759 1.23232C14.9591 1.19884 15.0502 1.19053 15.1381 1.20843C15.2259 1.22632 15.3065 1.26963 15.37 1.33297V1.33205ZM6.93639 10.4127L9.46243 14.382L13.7927 3.55554L6.93639 10.4127ZM13.1458 2.90863L2.32071 7.2394L6.29047 9.76485L13.1458 2.90863Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="0.7"
                  />
                </svg>
              </p>
              <p className="font-karla font-bold text-sm md:text-lg">
                Withdraw
              </p>
            </div>
          </Box>
        </Box>
        <Box onClick={handleTransactionHistory} className="flex justify-end">
          <p className="capitalize font-rubik font-normal text-sm md:text-lg text-white cursor-pointer">
            transaction history
          </p>
        </Box>
      </Box>

      {/*  */}
      <Box className="space-y-2">
        {/*  */}
        <div className="flex items-center justify-between">
          <p className="capitalize text-white font-rubik font-medium text-sm md:text-lg">
            withdrawal banks accounts
          </p>
          <div
            onClick={() => setNewBankDetails(!newBankDetails)}
            className="rounded-sm flex space-x-1 px-2 cursor-pointer py-1 items-center text-primary hover:bg-secondary active:bg-secondary duration-150 transition"
          >
            <p className="hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M18.0827 8.83331H12.2493V3.27775C12.2493 2.83572 12.065 2.4118 11.7368 2.09924C11.4086 1.78668 10.9635 1.61108 10.4993 1.61108C10.0352 1.61108 9.5901 1.78668 9.26191 2.09924C8.93372 2.4118 8.74935 2.83572 8.74935 3.27775V8.83331H2.91602C2.45189 8.83331 2.00677 9.0089 1.67858 9.32146C1.35039 9.63402 1.16602 10.0579 1.16602 10.5C1.16602 10.942 1.35039 11.3659 1.67858 11.6785C2.00677 11.991 2.45189 12.1666 2.91602 12.1666H8.74935V17.7222C8.74935 18.1642 8.93372 18.5881 9.26191 18.9007C9.5901 19.2133 10.0352 19.3889 10.4993 19.3889C10.9635 19.3889 11.4086 19.2133 11.7368 18.9007C12.065 18.5881 12.2493 18.1642 12.2493 17.7222V12.1666H18.0827C18.5468 12.1666 18.9919 11.991 19.3201 11.6785C19.6483 11.3659 19.8327 10.942 19.8327 10.5C19.8327 10.0579 19.6483 9.63402 19.3201 9.32146C18.9919 9.0089 18.5468 8.83331 18.0827 8.83331Z"
                  fill="#00B172"
                />
              </svg>
            </p>
            <p className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <g clipPath="url(#clip0_2405_2275)">
                  <path
                    d="M11.1949 5.00008H7.58377V1.66675C7.58377 1.40153 7.46963 1.14718 7.26647 0.959641C7.0633 0.772105 6.78775 0.666748 6.50043 0.666748C6.21312 0.666748 5.93757 0.772105 5.7344 0.959641C5.53124 1.14718 5.4171 1.40153 5.4171 1.66675V5.00008H1.80599C1.51867 5.00008 1.24312 5.10544 1.03996 5.29297C0.836793 5.48051 0.722656 5.73486 0.722656 6.00008C0.722656 6.2653 0.836793 6.51965 1.03996 6.70719C1.24312 6.89472 1.51867 7.00008 1.80599 7.00008H5.4171V10.3334C5.4171 10.5986 5.53124 10.853 5.7344 11.0405C5.93757 11.2281 6.21312 11.3334 6.50043 11.3334C6.78775 11.3334 7.0633 11.2281 7.26647 11.0405C7.46963 10.853 7.58377 10.5986 7.58377 10.3334V7.00008H11.1949C11.4822 7.00008 11.7577 6.89472 11.9609 6.70719C12.1641 6.51965 12.2782 6.2653 12.2782 6.00008C12.2782 5.73486 12.1641 5.48051 11.9609 5.29297C11.7577 5.10544 11.4822 5.00008 11.1949 5.00008Z"
                    fill="#00B172"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2405_2275">
                    <rect width="13" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
            <p className="font-karla font-bold text-sm md:text-lg">Add new</p>
          </div>
        </div>
        {/*  */}
        <Box className="space-y-1">
          {newBankDetails && <BankAccountForm close={handleClose} />}
          {IsuccessankAccount &&
            BankAcount?.data?.detail?.length > 0 &&
            BankAcount?.data?.detail?.map((bank, key) => (
              <BankAccountDetail
                key={key}
                data={bank}
                handleDelete={handleDelete}
              />
            ))}
        </Box>
      </Box>

      <WalletModal
        userId={userId}
        AccountData={AccountData}
        IsSuccess={IsSuccess}
      />
    </Box>
  );
}

export default WalletAndBank;
