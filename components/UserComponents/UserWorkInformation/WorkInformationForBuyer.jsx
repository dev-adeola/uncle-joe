import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuField from "../MenuField";
import { buyerWorkCategories, buyerExperienceLevel } from "@/utils/data";
import CustomCheckButton from "./CustomCheckButton";
import SelectInputField from "../SelectInputField";
import { toast } from "react-toastify";
import { useCreateBuyerProfileMutation } from "@/services/apiSlice";

const WorkInformationForBuyer = ({ userId, isChecked, setIsChecked }) => {
  const [buyerWorkCategory, setBuyerWorkCategory] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [formValues, setFormValues] = useState({});

  const [createFreelancer, { data, isError, isLoading, error, isSuccess }] =
    useCreateBuyerProfileMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      formValues.option = buyerWorkCategory?.value;
      formValues.experience = experienceLevel?.value;

      formValues.purpose = "get_foreign_currency";
      formValues.uuid = userId;
      console.log({ formValues });
      await createFreelancer(formValues).unwrap();
      console.log({ isSuccess });
      if (isSuccess) {
        // router.refresh();
        toast.success(data?.message || "Request successful");
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.data?.message);
      }
    }
  };
  return (
    <Box className="px-4 md:px-6 xl:px-8 py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary ">
      <form onSubmit={handleSubmit}>
        <div className="w-full">
          <div className="flex-1 space-y-3">
            {/* Work Category */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Work Category
              </p>

              <SelectInputField
                value={buyerWorkCategory}
                name={"options"}
                data={buyerWorkCategories}
                placeholder={"Select buyer work category"}
                setSelectedValue={setBuyerWorkCategory}
              />
            </div>

            {/* Work Category */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Experience level
              </p>

              <SelectInputField
                value={experienceLevel}
                name={"experience_level"}
                data={buyerExperienceLevel}
                placeholder={"Select Experience level"}
                setSelectedValue={setExperienceLevel}
              />
            </div>

            {/* Accept TAC */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <div className="flex items-center gap-4">
                <CustomCheckButton
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                />
                <p className="text-subText font-karla text-sm md:text-lg xl:text-xl font-normal">
                  I affirm that I will only buy dollar for personal and business
                  needs and not for fraudulent or money laundry purposes.{" "}
                </p>
              </div>
            </div>

            {/* Submit Work Info  */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <button
                className={`${
                  !isChecked && "disabled-trade-btn"
                } w-fit px-8 flex items-center justify-center py-3 bg-primary rounded-sm text-lightGray cursor-pointer`}
              >
                <p className="font-rubik text-center text-sm md:text-lg font-extrabold xl:text-[20px]">
                  Submit
                </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default WorkInformationForBuyer;
