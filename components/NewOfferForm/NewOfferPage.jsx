"use client";

import { ChevronLeft } from "@mui/icons-material";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  OfferPaymentInfo,
  OfferExchangeRate,
  OfferTAC,
  OfferInstructionAndDuration,
  CreateOfferButton,
} from "..";
import {
  useCreateNewOfferMutation,
  useFetchMarketRateQuery,
  useGetEwalletOptionsQuery,
  useGetUserIdQuery,
} from "@/services/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMarketRate } from "@/redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box, Typography } from "@mui/material";
import AccordionTransition from "./OfferForm/Accodions";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OfferPaymentInfoBuyer from "./OfferForm/OfferPaymentInfoBuyer";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import OfferExchangeRateBuyer from "./OfferForm/OfferExchangeRateBuyer";
import { useRouter } from "next/navigation";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function NewOfferPage() {
  const dispatch = useDispatch();
  // const currentMarketRate = useSelector(state => state.market.currentMarketRate)

  // Fetch Current Market Rate
  const [value, setValue] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleChanges = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    data: currentRateData,
    isError: isCurrentRateError,
    isSuccess: isCurrentRateSuccess,
    isLoading: isCurrentRateLoading,
  } = useFetchMarketRateQuery();
  const marketRate = useMemo(() => {
    if (!isCurrentRateError && !isCurrentRateLoading && isCurrentRateSuccess) {
      dispatch(setCurrentMarketRate(currentRateData.data));
      return currentRateData?.data?.rate_decimal;
    }
    return;
  }, [
    isCurrentRateSuccess,
    isCurrentRateLoading,
    isCurrentRateError,
    currentRateData,
  ]);
  console.log({ isCurrentRateLoading });

  // Fetch User Id
  const {
    data: userIdData,
    isError: isUserIdError,
    isSuccess: isUserIdSuccess,
    isLoading: isUserIdLoading,
  } = useGetUserIdQuery();
  const {
    data: paymentOptionsData,
    isError: IsError,
    isSuccess: IsSuccess,
    isLoading: IsLoading,
    isFetching,
  } = useGetEwalletOptionsQuery();
  console.log({ paymentOptionsData });
  const userId = useMemo(() => {
    if (!isUserIdLoading && !isUserIdError && isUserIdSuccess && userIdData) {
      return userIdData?.uuid;
    }
    return;
  }, [isUserIdLoading, isUserIdSuccess, isUserIdError, userIdData]);
  const [offerTermsAndConditions, setOfferTermsAndConditions] = useState([]);
  const [offerTermsAndConditionsBuyer, setOfferTermsAndConditionsBuyer] =
    useState([]);
  const [newTacTitle, setNewTacTitle] = useState("");
  const [newTacTitleBuyer, setNewTacTitleBuyer] = useState("");
  const [newTacDetailBuyer, setNewTacDetailBuyer] = useState("");
  const [newTacDetail, setNewTacDetail] = useState("");
  const [seletectedPaymentOptions, setSeletectedPaymentOptions] = useState("");
  const [seletectedBuyerPaymentOptions, setSeletectedBuyerPaymentOptions] =
    useState("");
  const [seletectedValueHowToPayOptions, setSeletectedValueHowToPayOptions] =
    useState("");
  const [
    seletectedBuyerValueHowToPayOptions,
    setSeletectedBuyerValueHowToPayOptions,
  ] = useState("");
  const [seletectedHowToPayOptions, setSeletectedHowToPayOptions] =
    useState("");
  const [seletectedBuyerHowToPayOptions, setSeletectedBuyerHowToPayOptions] =
    useState("");
  const [fundExchangeIndex, setFundExchangeIndex] = useState(0);
  const [fundBuyerExchangeIndex, setFundBuyerExchangeIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [nextBuyerIndex, setNextBuyerIndex] = useState(0);
  const [fundExchangeInfo, setFundExchangeInfo] = useState({
    eWallet: {},
    paymentOption: "",
    tags: [],
  });
  const [fundBuyerExchangeInfo, setFundBuyerExchangeInfo] = useState({
    eWallet: {},
    paymentOption: "",
    tags: [],
  });
  console.log({ offerTermsAndConditions, offerTermsAndConditionsBuyer });
  useEffect(() => {
    setFundExchangeIndex(nextIndex);

    setFundExchangeInfo({
      eWallet: seletectedPaymentOptions,
    });
  }, [nextIndex]);
  useEffect(() => {
    setFundBuyerExchangeIndex(nextBuyerIndex);

    setFundBuyerExchangeInfo({
      eWallet: seletectedBuyerPaymentOptions,
    });
  }, [nextBuyerIndex]);
  // Memoize the handleNewTac function
  const handleNewTac = useMemo(
    () => () => {
      if (newTacTitle && newTacDetail) {
        // Create a new terms and conditions object
        const newTac = {
          id: offerTermsAndConditions.length + 1,
          title: newTacTitle,
          condition: newTacDetail,
        };
        // Update the offerTermsAndConditions state by adding the new terms and conditions object
        setOfferTermsAndConditions([...offerTermsAndConditions, newTac]);
      }
      // Clear the input fields
      setNewTacTitle("");
      setNewTacDetail("");
    },
    [newTacTitle, newTacDetail, offerTermsAndConditions]
  );
  const handleNewTacBuyer = useMemo(
    () => () => {
      if (newTacTitleBuyer && newTacDetailBuyer) {
        // Create a new terms and conditions object
        const newTac = {
          id: offerTermsAndConditionsBuyer.length + 1,
          title: newTacTitleBuyer,
          condition: newTacDetailBuyer,
        };
        // Update the offerTermsAndConditions state by adding the new terms and conditions object
        setOfferTermsAndConditionsBuyer([
          ...offerTermsAndConditionsBuyer,
          newTac,
        ]);
      }
      // Clear the input fields
      setNewTacTitleBuyer("");
      setNewTacDetailBuyer("");
    },
    [newTacTitleBuyer, newTacDetailBuyer, offerTermsAndConditions]
  );
  const initialState = useMemo(
    () => ({
      duration: 60,
      guide: null,
      percentage: -2.5,
      fixed_rate: 0,
      rateType: "market",
    }),
    []
  );

  const [formData, setFormData] = useState(initialState);
  const [formDataBuyer, setFormDataBuyer] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value, type } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleChangeInputBuyer = (e) => {
    const { name, value, type } = e.target;

    setFormDataBuyer((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [selectedOption, setSelectedOption] = useState("market");
  const [selectedOptionBuyer, setSelectedOptionBuyer] = useState("market");

  const handleSelect = (value) => {
    setSelectedOption(value);
  };
  const handleSelectBuyer = (value) => {
    setSelectedOptionBuyer(value);
  };
  console.log({ formData });
  const handleDecrement = useMemo(
    () => () => {
      setFormData((prevState) => ({
        ...prevState,
        duration: prevState.duration - 1,
      }));
    },
    []
  );
  const handleDecrementBuyer = useMemo(
    () => () => {
      setFormDataBuyer((prevState) => ({
        ...prevState,
        duration: prevState.duration - 1,
      }));
    },
    []
  );
  console.log({ formDataBuyer });

  const handleDecrementPerCentage = () => {
    // setRateInPercentage((prevRate) => prevRate - 0.5);

    setFormData((prevState) => ({
      ...prevState,
      percentage: prevState.percentage - 0.5,
    }));
  };

  const handleIncrementPercentage = () => {
    // setRateInPercentage((prevRate) => prevRate + 0.5);
    setFormData((prevState) => ({
      ...prevState,
      percentage: prevState.percentage + 0.5,
    }));
  };
  const handleDecrementPerCentageBuyer = () => {
    // setRateInPercentage((prevRate) => prevRate - 0.5);

    setFormDataBuyer((prevState) => ({
      ...prevState,
      percentage: prevState.percentage - 0.5,
    }));
  };

  const handleIncrementPercentageBuyer = () => {
    // setRateInPercentage((prevRate) => prevRate + 0.5);
    setFormDataBuyer((prevState) => ({
      ...prevState,
      percentage: prevState.percentage + 0.5,
    }));
  };

  const handleIncrement = useMemo(
    () => () => {
      setFormData((prevState) => ({
        ...prevState,
        duration: prevState.duration + 1,
      }));
    },
    []
  );
  const handleIncrementBuyer = useMemo(
    () => () => {
      setFormDataBuyer((prevState) => ({
        ...prevState,
        duration: prevState.duration + 1,
      }));
    },
    []
  );
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBuyerTags, setSelectedBuyerTags] = useState([]);
  console.log({ selectedTags, selectedBuyerTags });
  const handleTagSelect = (id, label, checked) => {
    if (checked) {
      // Add the tag to the selectedTags array if it's checked
      setSelectedTags([...selectedTags, { id }]);
      // setSelectedTags([...selectedTags, { id, label }]);
    } else {
      // Remove the tag from the selectedTags array if it's unchecked
      setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
    }
  };
  const handleTagSelectBuyer = (id, label, checked) => {
    if (checked) {
      // Add the tag to the selectedTags array if it's checked
      setSelectedBuyerTags([...selectedBuyerTags, { id }]);
      // setSelectedTags([...selectedTags, { id, label }]);
    } else {
      // Remove the tag from the selectedTags array if it's unchecked
      setSelectedBuyerTags(selectedBuyerTags.filter((tag) => tag.id !== id));
    }
  };

  const handleInput = useMemo(
    () => (e) => {
      setFormData((prevState) => ({
        ...prevState,
        duration: Number(e.target.value),
      }));
    },
    []
  );
  const createdOfferData = useSelector((state) => state.createOffer);

  console.log({ createdOfferData });

  const [createNewOffer, { data, isError, isLoading, error }] =
    useCreateNewOfferMutation();

  console.log({ error, data });
  const router = useRouter();
  const handleCreateOffer = async (e) => {
    e.preventDefault();
    // convertOfferRequirement(createdOfferData?.offerPaymentInfo?.offerTags);
    try {
      //seller
      if (value == 0) {
        if (selectedOption === "market") {
          if (
            formData?.duration == ("" || null) ||
            formData?.guide == ("" || null) ||
            formData?.percentage == ("" || null) ||
            selectedTags?.length <= 0 ||
            offerTermsAndConditions?.length <= 0 ||
            formData?.max_amount == ("" || null) ||
            formData?.min_amount == ("" || null)
          ) {
            toast.error("All in fields or input is required");
          } else {
            formData.ewallet_id = seletectedPaymentOptions?.id;
            formData.option_id = seletectedValueHowToPayOptions?.id;
            formData.seller_offer_requiremnet = JSON.stringify(selectedTags);
            delete offerTermsAndConditions?.id;
            formData.seller_terms_and_conditions = JSON.stringify(
              offerTermsAndConditions
            );
            formData.fixed_rate = null;
            // endpoint: createdOfferData?.offerPaymentInfo?.offerType === "sell"
            //   ? "api/create-seller-offer"
            //   : "api/create-buyer-offer",
            console.log(formData);
            const response = await createNewOffer({ data: formData }).unwrap();
            console.log({ response });
            if (response?.status == 200) {
              toast.success("New offer created");
              router.push("/dashboard/overview");
            } else {
              toast.error(response?.message || "Error occurre");
            }
          }
        } else {
          if (
            formData?.duration == ("" || null) ||
            formData?.guide == ("" || null) ||
            formData?.fixed_rate == ("" || null) ||
            selectedTags?.length <= 0 ||
            offerTermsAndConditions?.length <= 0 ||
            formData?.max_amount == ("" || null) ||
            formData?.min_amount == ("" || null)
          ) {
            toast.error("All in fields or input is required");
          } else {
            formData.ewallet_id = seletectedPaymentOptions?.id;
            formData.option_id = seletectedValueHowToPayOptions?.id;
            formData.seller_offer_requiremnet = JSON.stringify(selectedTags);
            delete offerTermsAndConditions?.id;
            formData.seller_terms_and_conditions = JSON.stringify(
              offerTermsAndConditions
            );
            formData.percentage = null;

            console.log(formData);
            const response = await createNewOffer({
              data: formData,
            }).unwrap();
            console.log({ response });
            if (response?.status == 200) {
              toast.success("New offer created");
              router.push("/dashboard/overview");
            } else {
              toast.error(response?.message || "Error occurre");
            }
          }
        }
      } else {
        if (selectedOption === "market") {
          if (
            formDataBuyer?.duration == ("" || null) ||
            formDataBuyer?.guide == ("" || null) ||
            formDataBuyer?.percentage == ("" || null) ||
            selectedBuyerTags?.length <= 0 ||
            offerTermsAndConditionsBuyer?.length <= 0 ||
            formDataBuyer?.max_amount == ("" || null) ||
            formDataBuyer?.min_amount == ("" || null)
          ) {
            toast.error("All in fields or input is required");
          } else {
            formDataBuyer.ewallet_id = seletectedBuyerPaymentOptions?.id;
            formDataBuyer.option_id = seletectedBuyerValueHowToPayOptions?.id;
            formDataBuyer.buyer_offer_requiremnet =
              JSON.stringify(selectedBuyerTags);
            delete offerTermsAndConditionsBuyer?.id;
            formDataBuyer.buyer_terms_and_conditions = JSON.stringify(
              offerTermsAndConditionsBuyer
            );
            formDataBuyer.fixed_rate = null;

            console.log(formDataBuyer);

            const response = await createNewOffer({
              data: formDataBuyer,
              buyer: "api/create-buyer-offer",
            }).unwrap();
            console.log({ response });
            if (response?.status == 200) {
              router.push("/dashboard/overview");
              toast.success("New buyer offer created");
            } else {
              toast.error(response?.message || "Error occurre");
            }
          }
        } else {
          if (
            formDataBuyer?.duration == ("" || null) ||
            formDataBuyer?.guide == ("" || null) ||
            formDataBuyer?.fixed_rate == ("" || null || 0) ||
            selectedTags?.length <= 0 ||
            offerTermsAndConditionsBuyer?.length <= 0 ||
            formDataBuyer?.max_amount == ("" || null) ||
            formDataBuyer?.min_amount == ("" || null)
          ) {
            toast.error("All in fields or input is required");
          } else {
            formDataBuyer.ewallet_id = seletectedBuyerPaymentOptions?.id;
            formDataBuyer.option_id = seletectedBuyerValueHowToPayOptions?.id;
            formDataBuyer.buyer_offer_requiremnet =
              JSON.stringify(selectedBuyerTags);
            delete offerTermsAndConditionsBuyer?.id;
            formDataBuyer.buyer_terms_and_conditions = JSON.stringify(
              offerTermsAndConditionsBuyer
            );
            formDataBuyer.percentage = null;
            // endpoint: createdOfferData?.offerPaymentInfo?.offerType === "sell"
            //   ? "api/create-seller-offer"
            //   : "api/create-buyer-offer",
            console.log(formDataBuyer);
            const response = await createNewOffer({
              formDataBuyer,
              buyer: "create-buyer-offer",
            }).unwrap();
            console.log({ response });
            if (response?.status == 200) {
              router.push("/dashboard/overview");
              toast.success("New buyer offer created");
            } else {
              toast.error(response?.message || "Error occurre");
            }
          }
        }
      }
      // dispatch(resetOfferStore())
      // router.push("/dashboard/overview");
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred" || error);
      }
      toast.error(error?.message || "An error occurred" || error);
    }
  };

  return (
    <div className="w-full space-y-8 flex flex-col pb-6">
      {/* Button & Title */}
      <div className="w-full flex items-center justify-between ">
        <Link href={"/my-offers"} passHref>
          <div className="flex items-center space-x-2 cursor-pointer">
            <p className="text-secondary">
              <ChevronLeft />
            </p>
            <p className="text-secondary text-lg font-medium font-rubik">
              My offers
            </p>
          </div>
        </Link>
        <div className="flex items-center space-x-2 cursor-pointer">
          <p className="text-white text-[25px] font-bold font-rubik">
            Create offer
          </p>
        </div>
        <div />
      </div>

      {/* Create Offer Form */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Sell" {...a11yProps(0)} />
            <Tab label="Buy" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <form
            onSubmit={handleCreateOffer}
            className="w-full space-y-4 md:space-y-6"
          >
            <AccordionTransition
              title={"payment options"}
              setExpandeds={setExpanded}
            >
              <OfferPaymentInfo
                paymentOptionsData={paymentOptionsData?.response?.data}
                isFetching={isFetching}
                seletectedPaymentOptions={seletectedPaymentOptions}
                setSeletectedPaymentOptions={setSeletectedPaymentOptions}
                seletectedValueHowToPayOptions={seletectedValueHowToPayOptions}
                setSeletectedValueHowToPayOptions={
                  setSeletectedValueHowToPayOptions
                }
                seletectedHowToPayOptions={seletectedHowToPayOptions}
                setSeletectedHowToPayOptions={setSeletectedHowToPayOptions}
                fundExchangeIndex={fundExchangeIndex}
                nextIndex={nextIndex}
                setNextIndex={setNextIndex}
                fundExchangeInfo={fundExchangeInfo}
                setFundExchangeIndex={setFundExchangeIndex}
                selectedTags={selectedTags}
                handleTagSelect={handleTagSelect}
                id={0}
              />
            </AccordionTransition>{" "}
            <AccordionTransition
              title={"Exchange rate"}
              setExpandeds={setExpanded}
            >
              <OfferExchangeRate
                currentMarketRate={marketRate}
                handleDecrement={handleDecrementPerCentage}
                handleIncrement={handleIncrementPercentage}
                id={1}
                handleInput={handleChangeInput}
                rateInPercentage={formData}
                selectedOption={selectedOption}
                handleSelect={handleSelect}
              />
            </AccordionTransition>{" "}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChanges("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="capitalize font-normal text-lg">
                  Offer terms and conditions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <OfferTAC
                  id={2}
                  handleNewTac={handleNewTac}
                  newTacTitle={newTacTitle}
                  setNewTacTitle={setNewTacTitle}
                  newTacDetail={newTacDetail}
                  setNewTacDetail={setNewTacDetail}
                  offerTermsAndConditions={offerTermsAndConditions}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChanges("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className="capitalize font-normal text-lg">
                  Offer instruction & duration
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <OfferInstructionAndDuration
                  id={3}
                  handleDecrement={handleDecrement}
                  handleIncrement={handleIncrement}
                  handleInput={handleChangeInput}
                  offerInstructionAndDuration={formData}
                />
              </AccordionDetails>
            </Accordion>
            <div className="w-full">
              <div
                // onClick={() => handleCreateOffer()}
                className={`${
                  (isLoading ?? isDisable) && "disabled-trade-btn"
                } flex items-center justify-center h-12 bg-primary cursor-pointer rounded-[3px] text-lightGray space-x-2`}
              >
                {isLoading ? (
                  <ThreeDots
                    height="24"
                    width="30"
                    radius="12"
                    color="#f9f9f9"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={!isError}
                  />
                ) : (
                  <button className="font-rubik font-medium text-[20px] capitalize">
                    Create Offer
                  </button>
                )}
              </div>
            </div>
          </form>
          {/* <div className="w-full space-y-4 md:space-y-6">
          
            <CreateOfferButton
              currentMarketRate={marketRate}
              userId={userId}
              isDisable={isCurrentRateLoading ?? isUserIdLoading}
            />
          </div> */}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <form
            onSubmit={handleCreateOffer}
            className="w-full space-y-4 md:space-y-6"
          >
            <AccordionTransition
              title={"payment options"}
              setExpandeds={setExpanded}
            >
              <OfferPaymentInfoBuyer
                paymentOptionsData={paymentOptionsData?.response?.data}
                isFetching={isFetching}
                seletectedPaymentOptions={seletectedBuyerPaymentOptions}
                setSeletectedPaymentOptions={setSeletectedBuyerPaymentOptions}
                seletectedValueHowToPayOptions={
                  seletectedBuyerValueHowToPayOptions
                }
                setSeletectedValueHowToPayOptions={
                  setSeletectedBuyerValueHowToPayOptions
                }
                seletectedHowToPayOptions={seletectedBuyerHowToPayOptions}
                setSeletectedHowToPayOptions={setSeletectedBuyerHowToPayOptions}
                fundExchangeIndex={fundBuyerExchangeIndex}
                nextIndex={nextBuyerIndex}
                setNextIndex={setNextBuyerIndex}
                fundExchangeInfo={fundBuyerExchangeInfo}
                setFundExchangeIndex={fundBuyerExchangeIndex}
                selectedTags={selectedBuyerTags}
                handleTagSelect={handleTagSelectBuyer}
                id={0}
              />
            </AccordionTransition>{" "}
            <AccordionTransition
              title={"Exchange rate"}
              setExpandeds={setExpanded}
            >
              <OfferExchangeRateBuyer
                currentMarketRate={marketRate}
                handleDecrement={handleDecrementPerCentageBuyer}
                handleIncrement={handleIncrementPercentageBuyer}
                id={1}
                handleInput={handleChangeInputBuyer}
                rateInPercentage={formDataBuyer}
                selectedOption={selectedOptionBuyer}
                handleSelect={handleSelectBuyer}
              />
            </AccordionTransition>{" "}
            <Accordion
              expanded={expanded === "panelBuyers1"}
              onChange={handleChanges("panelBuyers1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className="capitalize font-normal text-lg">
                  Offer terms and conditions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <OfferTAC
                  id={2}
                  handleNewTac={handleNewTacBuyer}
                  newTacTitle={newTacTitleBuyer}
                  setNewTacTitle={setNewTacTitleBuyer}
                  newTacDetail={newTacDetailBuyer}
                  setNewTacDetail={setNewTacDetailBuyer}
                  offerTermsAndConditions={offerTermsAndConditionsBuyer}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panelBuyers2"}
              onChange={handleChanges("panelBuyers2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className="capitalize font-normal text-lg">
                  Offer instruction & duration
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <OfferInstructionAndDuration
                  id={3}
                  handleDecrement={handleDecrementBuyer}
                  handleIncrement={handleIncrementBuyer}
                  handleInput={handleChangeInputBuyer}
                  offerInstructionAndDuration={formDataBuyer}
                />
              </AccordionDetails>
            </Accordion>
            <div className="w-full">
              <div
                // onClick={() => handleCreateOffer()}
                className={`${
                  (isLoading ?? isDisable) && "disabled-trade-btn"
                } flex items-center justify-center h-12 bg-primary cursor-pointer rounded-[3px] text-lightGray space-x-2`}
              >
                {isLoading ? (
                  <ThreeDots
                    height="24"
                    width="30"
                    radius="12"
                    color="#f9f9f9"
                    ariaLabel="loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={!isError}
                  />
                ) : (
                  <button className="font-rubik font-medium text-[20px] capitalize">
                    Create Offer
                  </button>
                )}
              </div>
            </div>
          </form>
        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default NewOfferPage;
