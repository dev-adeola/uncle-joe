"use client";
import {
  useBuyerInitiateRequestMutation,
  useCreateUserKYCMutation,
  useSellerInitiateRequestMutation,
} from "@/services/apiSlice";
import { Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import OfferTransactionsDetails from "./OfferTransactionsDetails";
import { toast } from "react-toastify";

export default function TermsAndConditionsBuyerOffer({
  data,
  isSuccess,
  isFetching,
  isLoading,
  formDetails,
  handleClose,
  open,
}) {
  // let stateName = "Osun State";

  // // Remove " State" from the string
  // stateName = stateName.split(" ").slice(0, -1).join(" ");

  // // Print modified string
  // console.log(stateName);
  const [openTracDetails, setOpenTracDetails] = useState(false);
  const handleTracDetailsOpen = () => setOpenTracDetails(true);
  const handleTracDetailsClose = () => setOpenTracDetails(false);
  const [
    buyerInitiateRequest,
    { data: dataBuyer, isError, isLoading: IsloadingBuyer, error },
  ] = useBuyerInitiateRequestMutation();
  const [selectedImage, setSelectedImage] = useState(null);
  console.log({ selectedImage });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sellerParams = {
        wallet_name: data?.response?.data?.ewallet?.ewallet_name,
        wallet_id: data?.response?.data?.ewallet_id,
        item_for: "buy",
        amount: formDetails?.amount,
        recipient: data?.response?.data?.uuid,
        item_id: (data?.response?.data?.id).toString(),
      };
      console.log({ sellerParams });
      const response = await buyerInitiateRequest(sellerParams).unwrap();
      console.log({ response });
      if (response?.status == 200) {
        // router.refresh();
        handleTracDetailsOpen();
        handleClose();
        toast.success(`${response?.message} `);
      } else if (response?.status == 400) {
        toast.error("Request not successful");
      } else {
        toast.error("Request not successful");
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
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        className="overflow-y-auto"
      >
        <Fade in={open}>
          <div className="absolute top-1/2 left-1/2 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-full bg-zinc-800 z-100 max-w-lg border-1 overflow-y-auto h-auto lg:h-fit border-black shadow-md p-2 lg:p-4">
            <Box className="py-4 md:py-6 bg-secondary shadow-sm xl:shadow-md rounded-sm space-y-4 text-secondary">
              <div className="flex justify-between px-2 md:px-3  py-4 items-center">
                <h2 className="text-center text-xl uppercase">
                  Buyer Offer terms and conditions
                </h2>
                <button
                  onClick={handleClose}
                  className="text-white bg-green-500 px-2 py-2 rounded-xl"
                >
                  <CloseIcon />
                </button>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center px-2"
              >
                {" "}
                <div className="w-full flex items-start py-3 space-x-2 px-4">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                    >
                      <path
                        d="M9 1.0625C7.44248 1.0625 5.91992 1.4987 4.62489 2.31594C3.32985 3.13319 2.32049 4.29477 1.72445 5.65379C1.12841 7.01282 0.972461 8.50825 1.27632 9.95098C1.58018 11.3937 2.3302 12.719 3.43154 13.7591C4.53288 14.7993 5.93607 15.5076 7.46367 15.7946C8.99127 16.0816 10.5747 15.9343 12.0136 15.3714C13.4526 14.8084 14.6825 13.8551 15.5478 12.6321C16.4131 11.409 16.875 9.971 16.875 8.5C16.875 6.52745 16.0453 4.63569 14.5685 3.24089C13.0916 1.84609 11.0886 1.0625 9 1.0625ZM9 14.875C7.66498 14.875 6.35994 14.5011 5.2499 13.8006C4.13987 13.1001 3.27471 12.1045 2.76382 10.9396C2.25293 9.77473 2.11925 8.49293 2.3797 7.2563C2.64015 6.01967 3.28303 4.88375 4.22703 3.99219C5.17104 3.10063 6.37377 2.49347 7.68314 2.24749C8.99252 2.00151 10.3497 2.12776 11.5831 2.61027C12.8165 3.09278 13.8707 3.90988 14.6124 4.95824C15.3541 6.0066 15.75 7.23914 15.75 8.5C15.75 10.1908 15.0388 11.8123 13.773 13.0078C12.5071 14.2034 10.7902 14.875 9 14.875Z"
                        fill="#FCD535"
                      />
                      <path
                        d="M8.4375 4.25H9.5625V10.0938H8.4375V4.25ZM9 11.6875C8.83312 11.6875 8.66999 11.7342 8.53124 11.8218C8.39248 11.9094 8.28434 12.0338 8.22048 12.1794C8.15662 12.325 8.13991 12.4853 8.17246 12.6398C8.20502 12.7944 8.28538 12.9364 8.40338 13.0479C8.52138 13.1593 8.67172 13.2352 8.83539 13.2659C8.99906 13.2967 9.16871 13.2809 9.32289 13.2206C9.47706 13.1603 9.60884 13.0581 9.70155 12.9271C9.79427 12.796 9.84375 12.642 9.84375 12.4844C9.84375 12.273 9.75486 12.0703 9.59662 11.9209C9.43839 11.7715 9.22378 11.6875 9 11.6875Z"
                        fill="#FCD535"
                      />
                    </svg>
                  </p>
                  <p className="text-sm font-normal text-left font-karla text-[#FCD035]">
                    Kindly set your terms and conditions for this offer. Please
                    include all likely conditions that might occur and set your
                    terms as detailed as possible. both parties are bounded by
                    these terms and any resolution will be subjected to these
                    terms and conditions.
                  </p>
                </div>
                {isLoading || isFetching
                  ? "Loading........"
                  : isSuccess &&
                    data?.response?.data?.buyerterm?.map((terms, index) => (
                      <div
                        key={index}
                        className="flex flex-col space-y-1 w-full"
                      >
                        <div className="rounded-sm bg-[#1C2225] px-4 py-2 h-[35px] w-full flex items-center space-x-4 justify-start">
                          <p className="font-karla font-bold text-[16px] text-white">
                            {index + 1}.
                          </p>
                          <p className="font-karla font-bold text-sm text-[#A6A6A6]">
                            {terms?.title}
                          </p>
                        </div>
                        <div className="rounded-sm bg-[#1C2225] p-4 md:py-6 h-full w-full flex items-start space-x-4 justify-start">
                          <p className="font-karla font-bold text-sm text-[#A6A6A6] w-full h-full">
                            {terms?.condition}
                          </p>
                        </div>
                      </div>
                    ))}{" "}
                <button
                  type="submit"
                  disabled={isFetching || isLoading}
                  className="px-4 py-2 bg-primary text-white rounded-md mt-4"
                >
                  {IsloadingBuyer ? "loading....." : " Agree and Continue"}
                </button>
              </form>
            </Box>
          </div>
        </Fade>
      </Modal>
      <OfferTransactionsDetails
        open={openTracDetails}
        handleClose={handleTracDetailsClose}
        data={data}
        formDetails={formDetails}
      />
    </div>
  );
}
