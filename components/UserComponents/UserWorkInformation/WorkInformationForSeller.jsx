import { Box } from "@mui/material";
import React, { useState } from "react";
import MenuField from "../MenuField";
import { sellerWorkCategories, sellerExperienceLevel } from "@/utils/data";
import TextInputField from "../TextInputField";
import CustomCheckButton from "./CustomCheckButton";
import SelectInputField from "../SelectInputField";
import { toast } from "react-toastify";
import { useCreateFreelancerMutation } from "@/services/apiSlice";
import { useRouter } from "next/navigation";

const WorkInformationForSeller = ({ isChecked, setIsChecked, userId }) => {
  const [sellerWorkCategory, setSellerWorkCategory] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [formValues, setFormValues] = useState({});
  const router = useRouter();
  // useCreateFreelancerMutation;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log({ formValues });
  const [createFreelancer, { data, isError, isLoading, error, isSuccess }] =
    useCreateFreelancerMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formValues?.service_offer ||
        !formValues?.work_history ||
        !formValues?.portfolio
      ) {
        toast.error("Please all fields is required");
      } else {
        formValues.options = sellerWorkCategory?.value;
        formValues.experience = experienceLevel?.value;

        formValues.purpose = "get_naira";
        formValues.uuid = userId;
        console.log({ formValues });
        await createFreelancer(formValues).unwrap();
        console.log({ isSuccess });
        if (isSuccess) {
          router.refresh();

          toast.success(data?.message || "Request successful");
        }
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
      <div className="w-full space-y-4">
        {/*  */}
        <div>
          <p className="text-sm md:text-lg font-normal text-secondary font-rubik">
            Provide the following Information to be able to sell dollar on
            Ratefy
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex-1 space-y-3">
            {/* Work Category */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Work Category
              </p>
              {/* <MenuField
              label={"Sell Dollar"}
              value={sellerWorkCategory}
              setValue={setSellerWorkCategory}
              options={sellerWorkCategories}
            /> */}

              <SelectInputField
                value={sellerWorkCategory}
                name={"work_category"}
                data={sellerWorkCategories}
                placeholder={"Select work category"}
                setSelectedValue={setSellerWorkCategory}
              />
            </div>

            {/* Services */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Services you offer
              </p>
              <TextInputField
                label={"Services"}
                placeholder={"E.g Logo Design, UI/UX"}
                // setValue={setServices}
                // value={services}
                value={formValues["service_offer"]}
                name={"service_offer"}
                handleChange={handleChange}
              />
            </div>

            {/* Link to Portfolio */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Link to your online portfolio
              </p>
              <TextInputField
                label={"Portfolio Link"}
                placeholder={"E.g www.portfolio.com"}
                value={formValues["portfolio"]}
                name={"portfolio"}
                handleChange={handleChange}
              />
            </div>

            {/* Years of Experience */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Years of experience
              </p>
              <TextInputField
                label={"Years of Experience"}
                placeholder={"E.g 4 years"}
                value={formValues["work_history"]}
                name={"work_history"}
                handleChange={handleChange}
              />
            </div>

            {/* Work Category */}
            <div className="items-start md:items-center flex flex-col md:flex-row gap-2 md:gap-4 xl:gap-8">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Experience level
              </p>

              <SelectInputField
                value={experienceLevel}
                name={"experience_level"}
                data={sellerExperienceLevel}
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
                  I affirm that I will only sell dollar for personal and
                  business needs and not for fraudulent or money laundry
                  purposes.
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
        </form>
      </div>
    </Box>
  );
};

export default WorkInformationForSeller;
