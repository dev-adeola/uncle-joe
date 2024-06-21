"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BankAccountDetail from "./BankAccountDetail";
import BankAccountForm from "./BankAccountForm";
import { openWalletModel } from "@/redux/slices/walletSlice";
import WalletModal from "./WalletModalComponents/WalletModal";
import { useDispatch } from "react-redux";
import { useCreateWalletMutation } from "@/services/apiSlice";
import { getSession, useSession } from "next-auth/react";
import { toast } from "react-toastify";

const CreateWallet = ({ userId }) => {
  const dispatch = useDispatch();
  const [newBankDetails, setNewBankDetails] = useState(false);
  const [banks, setBanks] = useState([
    {
      id: 56787,
      bankName: "Kuda MFB",
      bankNumber: 3093847334,
      bankHolderName: "Femi Victor Odeyemi",
    },
    {
      id: 65478,
      bankName: "Opay",
      bankNumber: 9123300544,
      bankHolderName: "Victor Jude Enoch",
    },
  ]);
  const sessions = getSession();
  console.log({ sessions });
  const { data: session, status } = useSession();
  console.log({ session, status });
  //
  const handleDelete = (id) => {
    const newBanks = banks.filter((bank) => bank.id !== id);
    setBanks(newBanks);
  };
  const [createWallet, { data, isError, error }] = useCreateWalletMutation();
  //
  const handleTransactionHistory = () => {
    dispatch(
      openWalletModel({
        id: "transaction-history",
        title: "transaction history",
      })
    );
  };
  const handleAddMoney = () => {
    dispatch(openWalletModel({ id: "add-money", title: "add money" }));
  };
  console.log({ error, data });
  const handleCreateWallet = async (data) => {
    try {
      const responses = await createWallet({
        wallet: "create-wallet",
      }).unwrap();
      if (!!responses) {
        toast.success(responses?.message || "Successfully create wallet");
      } else {
        toast.error(responses?.message || "An error occurred");
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred");
      }
    }
  };

  const handleWithdrawal = () => {
    dispatch(openWalletModel({ id: "withdraw", title: "withdraw funds" }));
  };

  return (
    <Box className="w-full flex flex-col gap-4 md:gap-6 xl:gap-8">
      {/* Wallet Balance */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex-col">
            <Box className="flex items-center space-x-4 font-rubik">
              <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
                Create
              </Typography>
              <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
                Wallet
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
        <Box className="flex  py-28 flex-row justify-center items-start md:items-end rounded p-4 md:p-6 shadow bg-secondary">
          {/*  */}

          {/*  */}

          {/*  */}
          <button
            onClick={handleCreateWallet}
            className="px-10  py-2 rounded text-white bg-primary flex items-center space-x-2 w-fit cursor-pointer hover:bg-primary/90 active:bg-primary/90 duration-300 transition"
          >
            Create Wallet
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateWallet;
