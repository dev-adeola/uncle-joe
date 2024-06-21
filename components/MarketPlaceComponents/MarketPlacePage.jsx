"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import AvailableOffers from "./AvailableOffers";
import { OfferPaymentInfo } from "..";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  useFilterBuyerOfferQuery,
  useFilterEwalletsQuery,
  useFilterRateOfferQuery,
  useFilterSellerOfferQuery,
} from "@/services/apiSlice";
import OfferPaymentInfoMarket from "./OfferPaymentInfoMarket";
import StickyHeadTable from "./OfferTable";
import OfferPaymentInfoMarketBuyer from "./OfferPaymentInfoMarketBuyer";
import BuyerTableOffer from "./OfferTableBuyer";

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
function MarketPlacePage() {
  const [offerId, setOfferId] = useState();
  const [seletectedPaymentOptions, setSeletectedPaymentOptions] = useState("");

  const [seletectedValueHowToPayOptions, setSeletectedValueHowToPayOptions] =
    useState("");
  console.log({ seletectedPaymentOptions, seletectedValueHowToPayOptions });
  const [seletectedHowToPayOptions, setSeletectedHowToPayOptions] =
    useState("");
  const [seletectedBuyerPaymentOptions, setSeletectedBuyerPaymentOptions] =
    useState("");

  const [
    seletectedBuyerValueHowToPayOptions,
    setSeletectedBuyerValueHowToPayOptions,
  ] = useState("");
  let datas;
  let Buyerdatas;

  if (seletectedPaymentOptions?.id && seletectedValueHowToPayOptions?.id) {
    datas = {
      ewallet_id: seletectedPaymentOptions.id,
      payment_option_id: seletectedValueHowToPayOptions.id,
    };
  } else {
    datas = {
      ewallet_id: seletectedPaymentOptions.id,
    };
  }
  if (
    seletectedBuyerPaymentOptions?.id &&
    seletectedBuyerValueHowToPayOptions?.id
  ) {
    Buyerdatas = {
      ewallet_id: seletectedBuyerPaymentOptions.id,
      payment_option_id: seletectedBuyerValueHowToPayOptions.id,
    };
  } else {
    Buyerdatas = {
      ewallet_id: seletectedBuyerPaymentOptions.id,
    };
  }
  // let offerId
  let ids;
  const { data, isError, error, isSuccess, isFetching, isLoading } =
    useFilterEwalletsQuery();
  const {
    data: rateData,
    isError: IsErrorRateData,
    error: ErrorRateData,
    isSuccess: IsSuccessRateData,
    isFetching: IsFetchingRateData,
    isLoading: IsLoadingRateData,
  } = useFilterRateOfferQuery();

  const {
    data: dataSellerOffer,
    isError: IsErrorSeller,
    error: ErrorSellerOffer,
    isSuccess: IsSuccessSellerOffer,
    isFetching: IsFetchingSellerOffer,
    isLoading: IsLoadingSellerOffer,
  } = useFilterSellerOfferQuery(datas);
  const {
    data: dataBuyerOffer,
    isError: IsErrorBuyer,
    error: ErrorBuyerOffer,
    isSuccess: IsSuccessBuyerOffer,
    isFetching: IsFetchingBuyerOffer,
    isLoading: IsLoadingBuyerOffer,
  } = useFilterBuyerOfferQuery(Buyerdatas);

  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredDatas, setFilteredDatas] = useState([]);
  const [fundExchangeIndex, setFundExchangeIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [fundExchangeInfo, setFundExchangeInfo] = useState({
    eWallet: {},
    paymentOption: "",
    tags: [],
  });
  const [value, setValue] = useState(0);

  const [offerTermsAndConditions, setOfferTermsAndConditions] = useState([]);
  const [offerTermsAndConditionsBuyer, setOfferTermsAndConditionsBuyer] =
    useState([]);
  const [newTacTitle, setNewTacTitle] = useState("");
  const [newTacTitleBuyer, setNewTacTitleBuyer] = useState("");
  const [newTacDetailBuyer, setNewTacDetailBuyer] = useState("");
  const [newTacDetail, setNewTacDetail] = useState("");

  const [seletectedBuyerHowToPayOptions, setSeletectedBuyerHowToPayOptions] =
    useState("");

  const [fundBuyerExchangeIndex, setFundBuyerExchangeIndex] = useState(0);

  const [nextBuyerIndex, setNextBuyerIndex] = useState(0);

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

  const [selectedBuyerTags, setSelectedBuyerTags] = useState([]);
  // console.log({ selectedTags, selectedBuyerTags });
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function getEWalletName(eWalletId) {
    // Find the payment option object with matching eWallet ID
    const paymentOption = data?.response?.data?.find(
      (option) => option.id === eWalletId
    );
    // Return eWallet name if found, otherwise return null or handle accordingly
    return paymentOption ? paymentOption.ewallet_name : null;
  }

  console.log({
    ErrorSellerOffer,

    dataSellerOffer,
    dataBuyerOffer,
    ErrorBuyerOffer,
  });

  useEffect(() => {
    setFundExchangeIndex(nextIndex);

    setFundExchangeInfo({
      eWallet: seletectedPaymentOptions,
    });
  }, [nextIndex]);
  return (
    <Box className="flex flex-col gap-10">
      {/* Overview */}
      <Box>
        <Box className="flex items-start justify-between">
          <Box className="flex-col">
            <Box className="flex items-center space-x-4 font-rubik">
              <Typography className="text-2xl font-bold text-white lg:text-[25px] ">
                E-Wallet
              </Typography>
              <Typography className="text-gradient text-2xl font-bold text-white lg:text-[25px]">
                MarketPlace
              </Typography>
            </Box>
            <Typography className="font-karla text-[16px] font-medium text-darkGray">
              Buy or sell e-wallet funds with peers on Ratefy
            </Typography>
          </Box>{" "}
        </Box>
      </Box>

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
          {" "}
          {/* Wallet buying and selling */}
          <OfferPaymentInfoMarket
            paymentOptionsData={data?.response?.data}
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
            // handleTagSelect={handleTagSelect}
            id={0}
          />
          {/* Available Offers */}
          <Box className="w-full overflow-x-auto">
            <Typography className="mb-4 text-2xl font-semibold capitalize text-white">
              available offers
            </Typography>
            {/* <AvailableOffers /> */}
            {/* <AvailableOffers
          filteredDatas={filteredDatas}
          data={data?.response?.data}
          isSuccess={isSuccess}
          isFetching={isFetching}
          isLoading={isLoading}
        /> */}
            <StickyHeadTable
              suppressHydrationWarning
              dataSellerOffer={dataSellerOffer}
              IsSuccessSellerOffer={IsSuccessSellerOffer}
              IsFetchingSellerOffer={IsFetchingSellerOffer}
              IsLoadingSellerOffer={IsLoadingSellerOffer}
              getEWalletName={getEWalletName}
              rateData={rateData}
              IsSuccessRateData={IsSuccessRateData}
            />
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {" "}
          {/* Wallet buying and selling */}
          <OfferPaymentInfoMarketBuyer
            suppressHydrationWarning
            paymentOptionsData={data?.response?.data}
            isFetching={isFetching}
            seletectedPaymentOptions={seletectedBuyerPaymentOptions}
            setSeletectedPaymentOptions={setSeletectedBuyerPaymentOptions}
            seletectedValueHowToPayOptions={seletectedBuyerValueHowToPayOptions}
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
            // handleTagSelect={handleTagSelect}
            id={0}
          />
          {/* Available Offers */}
          <Box className="w-full overflow-x-auto">
            <Typography className="mb-4 text-2xl font-semibold capitalize text-white">
              available offers
            </Typography>

            <BuyerTableOffer
              dataSellerOffer={dataBuyerOffer}
              IsSuccessSellerOffer={IsSuccessBuyerOffer}
              IsFetchingSellerOffer={IsFetchingBuyerOffer}
              IsLoadingSellerOffer={IsLoadingBuyerOffer}
              getEWalletName={getEWalletName}
              rateData={rateData}
              IsSuccessRateData={IsSuccessRateData}
            />
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

export default MarketPlacePage;
