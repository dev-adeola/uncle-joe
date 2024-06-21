import { useAddBankMutation, useGetBankNameQuery } from "@/services/apiSlice";
import { generateRandomNumber } from "@/utils";
import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";

function BankAccountForm({ banks, setNewBankDetails, close }) {
  const [bankNumber, setBankNumber] = useState(null);
  const [bankHolderName, setBankHolderName] = useState(null);
  const [bankName, setBankName] = useState(null);
  const [formValues, setFormValues] = useState({});

  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetBankNameQuery();
  // const userId = !isFetching && isSuccess ? data?.uuid : "";
  // const userId = useMemo(() => {
  //   return !isFetching && isSuccess ? data?.uuid : "";
  // }, [isFetching, isSuccess, data]);
  console.log({ data, error });
  const [
    addBank,
    {
      data: AddBank,
      isError: IsError,
      isLoading: IsLoading,
      error: Error,
      isSuccess: IsSuccess,
    },
  ] = useAddBankMutation();

  console.log({ AddBank });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  function findUuidAndNipcodeByName(name) {
    console.log({ name });
    const foundItem = data?.wallet?.data?.find(
      (item) => item.name === name?.value
    );
    console.log({ foundItem });
    if (foundItem) {
      const { uuid, nipcode } = foundItem;
      return { uuid, nipcode };
    }
    return null;
  }

  // Example usage

  const handleBankNameChange = (selectedOption) => {
    setBankName(selectedOption);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues?.accountnumber);
    const accountNumber = parseFloat(formValues?.accountnumber);
    //  stateName = stateName.split(" ").slice(0, -1).join(" ");
    try {
      if (!accountNumber) {
        toast.error("Please account number fields is required ");
      } else if (typeof accountNumber !== "number" || isNaN(accountNumber)) {
        toast.error(
          "Please ensure the account number field is a valid number."
        );
      } else if (formValues?.accountnumber.length !== 10) {
        toast.error("Please account number must be 10 numbers");
      } else if (
        !formValues?.account_name ||
        typeof formValues?.account_name !== "string"
      ) {
        toast.error("Please account name fields is required ");
      } else if (!bankName) {
        toast.error("Please select bank name fields is required");
      } else {
        const { uuid, nipcode } = findUuidAndNipcodeByName(bankName);
        formValues.bank_id = uuid;
        formValues.nipcode = nipcode;
        formValues.bank_name = bankName?.value;

        console.log({ formValues });
        const response = await addBank(formValues).unwrap();
        console.log({ response }, response?.status);
        if (response?.status == 200) {
          toast.success(response.message || "Request successful");
          close();
          // await handSendRequest();
          // setEditing(false);
        } else {
          console.log("{ response }", response);
          toast.error(response?.data?.errors[0]?.detail);
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
    <form onSubmit={handleSubmit}>
      <Box className="flex justify-between items-start p-4 md:p-6 bg-secondary">
        {/*  */}
        <div className="flex items-start space-x-4">
          <span className="mt-2 md:mt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M7.3125 11.3333H5.0625V18.9166H7.3125V11.3333ZM14.0625 11.3333H11.8125V18.9166H14.0625V11.3333ZM23.625 21.0833H2.25V23.2499H23.625V21.0833ZM20.8125 11.3333H18.5625V18.9166H20.8125V11.3333ZM12.9375 4.03159L18.7987 6.99992H7.07625L12.9375 4.03159ZM12.9375 1.58325L2.25 6.99992V9.16659H23.625V6.99992L12.9375 1.58325Z"
                fill="#00B172"
              />
            </svg>
          </span>
          <div className="flex items-start flex-col space-y-2 w-full max-w-2xl">
            <div className="flex items-start flex-col space-y-1">
              <p className="font-karla font-normal text-subText text-sm">
                Bank Name
              </p>

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
                defaultValue={data?.wallet?.data[0]}
                isLoading={isLoading && true}
                isClearable={true}
                // isRtl={isRtl}
                isSearchable={true}
                value={bankName}
                onChange={handleBankNameChange}
                placeholder="Select a bank name"
                name="bank_name"
                required
                options={data?.wallet?.data?.map((item) => ({
                  value: item.name,
                  label: item.name,
                }))}
              />
            </div>
            <div className="flex items-start flex-col space-y-1">
              <p className="font-karla font-normal text-subText text-sm">
                Account Number
              </p>
              <input
                onChange={handleChange}
                value={formValues?.accountnumber}
                name="accountnumber"
                type="text"
                placeholder="Account Number"
                className="placeholder:text-white outline-none rounded-sm bg-transparent px-2 py-1 text-white border-[0.5px] border-white"
              />
            </div>
            <div className="flex items-start flex-col space-y-1">
              <p className="font-karla font-normal text-subText text-sm">
                Account Name
              </p>
              <input
                name="account_name"
                onChange={handleChange}
                value={formValues?.account_name}
                type="text"
                placeholder="Account Name"
                className="placeholder:text-white outline-none rounded-sm bg-transparent px-2 py-1 text-white border-[0.5px] border-white"
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <button className="text-primary px-1 md:px-2 py-1 rounded-sm font-karla text-xs md:text-lg font-bold cursor-pointer hover:bg-secondary active:bg-secondary transition duration-300">
            Save
          </button>
        </div>
      </Box>
    </form>
  );
}

export default BankAccountForm;
