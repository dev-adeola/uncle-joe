import { openWalletModel } from "@/redux/slices/walletSlice";
import {
  useGetBankAccountsQuery,
  useWithdrawalRequestMutation,
} from "@/services/apiSlice";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";

function WithdrawFromWallet() {
  const dispatch = useDispatch();

  const [bankAccount, setBankAccount] = useState("");
  const [formValues, setFormValues] = useState({});
  const handleTransaction = () => {
    dispatch(
      openWalletModel({ id: "successful-transaction", title: "withdraw funds" })
    );
  };
  const {
    data: BankAcount,
    isError: IsErrorBankAccount,
    isLoading: IsLoadingBankAccount,
    error: ErrorankAccount,
    isSuccess: IsuccessankAccount,
  } = useGetBankAccountsQuery();
  const [withdrawalRequest, { data, isError, isLoading, error, isSuccess }] =
    useWithdrawalRequestMutation();
  console.log({ error });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleBankNameChange = (selectedOption) => {
    setBankAccount(selectedOption);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!bankAccount) {
        toast.error("Please select bank account number fields is required ");
      } else {
        formValues.accountId = bankAccount?.value;

        console.log({ formValues });
        const response = await withdrawalRequest(formValues).unwrap();
        console.log({ response }, response?.status);
        if (response?.status == 200) {
          toast.success(response.message || "Request successful");
          close();
        } else if (
          response?.response?.status == 400 ||
          response?.status == 400
        ) {
          console.log(
            "{ response }",
            response,
            response?.message,
            "response?.response?.message",
            response?.response?.message
          );
          toast.error(response?.response?.message);
        } else {
          console.log("{ response errosd }", response);
          toast.error(response?.message);
        }
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

  return (
    <Box className="w-full border-[0.5px] ">
      {/*  */}
      <div className="border-b-[0.5px] h-[24px] md:h-[30px] xl:h-[37px] px-4 xl:px-6 flex items-center justify-start bg-[#1C2225]">
        <p className="font-karla text-lg font-bold text-white">Bank Transfer</p>
      </div>
      {/*  */}
      <form onSubmit={handleSubmit}>
        <div className="w-full py-6 px-4 xl:px-6 space-y-3 md:space-y-3 bg-[#181C1F]">
          {/*  */}
          <div className="w-full">
            <p className="text-xs md:text-sm xl:text-[16px] font-karla font-normal">
              Withdraw money from your Ratefy wallet to any naira bank account
              of your own.
            </p>
          </div>

          {/*  */}
          <div className="w-full flex flex-col space-y-1 items-start">
            <p className="font-karla text-sm xl:text-[16px] font-normal text-white">
              Amount to withdraw
            </p>
            {/*  */}
            <div className="w-full space-x-2 px-2 py-1 border-[0.5px] border-[#333] bg-[#1c2225] flex items-center justify-start text-white">
              <span className="font-karla font-bold text-sm xl:text-[16px]">
                #
              </span>
              <input
                value={formValues?.amount}
                name="amount"
                onChange={handleChange}
                type="text"
                placeholder="e.g 500,000"
                className="bg-transparent w-full h-full outline-none border-none "
              />
            </div>
            <p className="font-karla text-[16px] font-normal text-white">
              Your available balance is{" "}
              <span className="text-primary font-semibold"> #700,000</span>
            </p>
          </div>

          {/*  */}
          <div className="w-full flex flex-col space-y-1 items-start">
            <p className="font-karla text-sm xl:text-[16px] font-normal text-white">
              Select Bank Account
            </p>
            {/*  */}
            <div className="w-full space-x-2 px-2 py-1 border-[0.5px] border-[#333] bg-[#1c2225] flex items-center justify-start text-white">
              <Select
                className="w-full"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: "bg-secondary",
                    color: "white",
                    borderColor: "black", // Change border color to black
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    color: "white",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "gray" : "white", // Change background color
                    color: "black",
                  }),
                  menu: (provided) => ({
                    ...provided,
                    zIndex: 9999, // Adjust the z-index as needed
                  }),
                }}
                defaultValue={"Select bank account"}
                isLoading={IsLoadingBankAccount && true}
                isClearable={true}
                // isRtl={isRtl}
                isSearchable={true}
                value={bankAccount}
                onChange={handleBankNameChange}
                placeholder="Select a bank account"
                name="bank_name"
                required
                options={BankAcount?.data?.detail?.map((item) => ({
                  value: item.counterPartyId,
                  label: `${item?.bankName} | ${item?.accountNumber} | ${item?.accountName}`,
                }))}
              />
            </div>
          </div>
          {/*  */}
          <div className="w-full flex items-center justify-center py-2 bg-primary hover:bg-primary/90 active:bg-primary/90 transition duration-300  text-lightGray">
            <button className="font-karla capitalize text-center text-sm md:text-lg font-extrabold xl:text-[20px]">
              send money
            </button>
          </div>
        </div>
      </form>
    </Box>
  );
}

export default WithdrawFromWallet;
