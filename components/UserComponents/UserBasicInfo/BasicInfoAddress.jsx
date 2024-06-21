import { Box, IconButton } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import TextInputField from "../TextInputField";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import DateInputField from "../DateInputField";
import {
  useCreateProfileMutation,
  useGetCitiesMutation,
  useGetCountriesAndStateQuery,
  useGetUserProfileMutation,
} from "@/services/apiSlice";
import Select from "react-select";
import { toast } from "react-toastify";
import { formatDateOfBirth } from "@/utils/dateFormatter";

function BasicInfoAddress({ userId }) {
  const [editing, setEditing] = useState(false);
  const [zipCode, setZipCode] = useState(null);
  const [address, setAddress] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("Male");
  // Fetched Data
  const [countries, setCountries] = useState([]);
  const [statesInSelectedCountry, setStatesInSelectedCountry] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const { data, error, isError, isSuccess, isFetching, isLoading } =
    useGetCountriesAndStateQuery();

  const [
    getCities,
    {
      data: citiesResponse,
      isError: IsError,
      isLoading: IsLoading,
      error: Error,
      isSuccess: IsSuccess,
    },
  ] = useGetCitiesMutation();
  const [
    createProfile,
    {
      data: profileResponse,
      isError: IsErrorProfile,
      isLoading: IsLoadingProfile,
      error: ErrorProfile,
      isSuccess: IsSuccessProfile,
    },
  ] = useCreateProfileMutation();
  const [
    getUserProfile,
    {
      data: userProfileResponse,
      isError: IsErrorUserProfile,
      isLoading: IsLoadingUserProfile,
      error: ErrorUserProfile,
      isSuccess: IsSuccessUserProfile,
    },
  ] = useGetUserProfileMutation();
  console.log({ data, error, citiesResponse });

  const [selectedState, setSelectedState] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [loadingCity, setLoadingCity] = useState(false);
  const [states, setStates] = useState([]);
  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];
  console.log({ selectedCountry, states, selectedState });
  const handleCountryChange = (selectedOption) => {
    // console.log({ selectedOption });
    setSelectedCountry(selectedOption);
    const countryData = data?.data?.find(
      (item) => item.name === selectedOption?.value
    );
    console.log({ countryData });
    if (countryData) {
      setStates(countryData.states);
    } else {
      setStates([]);
    }
  };
  const handleStateChange = async (selectedOption) => {
    console.log({ selectedOption });
    setSelectedState(selectedOption);
    setLoadingCity(true);
    await getCities({
      country: selectedCountry?.value,
      state: selectedOption?.value,
    }).unwrap();
  };

  const handSendRequest = useCallback(async () => {
    try {
      await getUserProfile({ uuid: userId }).unwrap();
    } catch (error) {
      console.log({ error });
      // toast.error(error?.error || "An error occurred");
    }
  }, [userId]);

  useEffect(() => {
    handSendRequest();
  }, [handSendRequest]);
  console.log({ userProfileResponse, ErrorUserProfile });

  const handleGenderChange = (selectedOption) => {
    setSelectedGender(selectedOption.value);
  };
  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.value);
  };
  console.log(selectedGender, selectedCity);

  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEditing(false);
  };
  console.log({ formValues });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const profile =
    (IsSuccessUserProfile && userProfileResponse?.status?.data) ||
    userProfileResponse?.status?.data;
  //  &&
  // JSON?.parse(
  //   userProfileResponse?.profile !== undefined
  //     ? userProfileResponse?.profile
  //     : ""
  // );
  console.log({
    profileResponse,
    ErrorProfile,
    profile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  stateName = stateName.split(" ").slice(0, -1).join(" ");
    try {
      if (!formValues?.zip_code || !formValues?.address || !dob) {
        toast.error("Please all fields is required");
      } else {
        formValues.dob = dob;
        formValues.country = selectedCountry?.value;
        formValues.state = selectedState?.value
          .split(" ")
          .slice(0, -1)
          .join(" ");
        formValues.sex = selectedGender;
        formValues.city = selectedCity;
        formValues.uuid = userId;
        console.log({ formValues });
        const response = await createProfile(formValues).unwrap();
        console.log({ response });
        if (response) {
          toast.success(response.message || "Request be process");

          await handSendRequest();
          setEditing(false);
        }
      }
    } catch (error) {
      console.log({ error });
      if (IsErrorProfile) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.data?.message);
      }
    }
  };

  return (
    <Box className="px-4 md:px-6 xl:px-8 py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary ">
      <div className="flex items-start justify-between">
        {" "}
        <p className="text-sm md:text-lg font-rubik font-normal">Address</p>
        <div>
          {editing ? (
            <IconButton color="primary" onClick={handleSave}>
              <DoneIcon fontSize="medium" />
            </IconButton>
          ) : (
            <IconButton color="#f9f9f9" onClick={handleEdit}>
              <EditIcon fontSize="medium" color="#f9f9f9" />
            </IconButton>
          )}
        </div>
      </div>

      <div className="w-full">
        <form onSubmit={handleSubmit} className="">
          <div className="flex-1 space-y-3">
            {/* DOB */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                DOB
              </p>
              {editing ? (
                <DateInputField
                  value={dob ?? undefined}
                  setValue={setDob}
                  name={"dob"}
                  handleChange={handleChange}
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {formatDateOfBirth(profile?.dob)}
                </p>
              )}
            </div>
            {/* Gender */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Gender
              </p>
              {editing ? (
                <Select
                  className="w-1/2"
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
                  defaultValue={data[0]}
                  isLoading={isLoading}
                  isClearable={true}
                  // isRtl={isRtl}
                  isSearchable={true}
                  placeholder="Select a Gender"
                  name="sex"
                  options={genders}
                  required
                  onChange={(item) => handleGenderChange(item)}
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.sex}
                </p>
              )}
            </div>
            {/* Country Field */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Country
              </p>
              {editing ? (
                <>
                  <Select
                    className="w-1/2"
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
                    defaultValue={data[0]}
                    isLoading={isLoading && true}
                    isClearable={true}
                    // isRtl={isRtl}
                    isSearchable={true}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    placeholder="Select a country"
                    name="Country"
                    required
                    options={data?.data?.map((item) => ({
                      value: item.name,
                      label: item.name,
                    }))}
                  />
                </>
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.country}
                </p>
              )}
            </div>
            {/* State Field */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                State
              </p>
              {editing ? (
                <Select
                  className="w-1/2"
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
                  defaultValue={states[0]}
                  isLoading={isLoading}
                  isClearable={true}
                  // isRtl={isRtl}
                  isSearchable={true}
                  value={selectedState}
                  onChange={handleStateChange}
                  placeholder="Select a State"
                  name="State"
                  required
                  options={states?.map((item) => ({
                    value: item.name,
                    label: item.name,
                  }))}
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.state}
                </p>
              )}
            </div>

            {/* City / Town */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                City / Town
              </p>
              {editing ? (
                <Select
                  className="w-1/2 "
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
                  defaultValue={
                    citiesResponse?.data && citiesResponse.data.length > 0
                      ? {
                          value: citiesResponse.data[0],
                          label: citiesResponse.data[0],
                        }
                      : null
                  }
                  isLoading={IsLoading && loadingCity}
                  isClearable={true}
                  isSearchable={true}
                  onChange={(item) => handleCityChange(item)}
                  placeholder="Select a City"
                  name="city"
                  required
                  options={
                    !isFetching &&
                    isSuccess &&
                    citiesResponse?.data?.map((city) => ({
                      value: city,
                      label: city,
                    }))
                  }
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.city}
                </p>
              )}
            </div>

            {/* Zip Code */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Zip Code
              </p>
              {editing ? (
                <TextInputField
                  label={"Zip Code"}
                  setValue={setZipCode}
                  value={formValues["zip_code"]}
                  name={"zip_code"}
                  handleChange={handleChange}
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.zip_code}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="items-center flex">
              <p className="w-[160px] md:w-[200px]  font-karla font-normal text-xs md:text-sm xl:text-[16px] text-subText text-left">
                Street Address
              </p>
              {editing ? (
                <TextInputField
                  label={"Address"}
                  setValue={setAddress}
                  value={formValues["address"]}
                  name={"address"}
                  handleChange={handleChange}
                />
              ) : (
                <p className="font-karla font-bold text-xs md:text-sm xl:text-[16px] text-left flex-wrap whitespace-pre-wrap">
                  {profile?.address}
                </p>
              )}
            </div>
          </div>
          {editing && (
            <div className="flex py-4 justify-center">
              <button className="text-white text-center w-2/5 border-white border rounded-xl bg-green-500 px-3 py-3">
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </Box>
  );
}

export default BasicInfoAddress;
