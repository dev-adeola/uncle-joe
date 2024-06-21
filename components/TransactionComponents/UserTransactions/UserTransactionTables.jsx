import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AccessTime, NavigateNext } from "@mui/icons-material";
import TablePagination from "@mui/material/TablePagination";
import {
  useActivateBuyerOfferMutation,
  useFetchUserDetailsQuery,
  usePausesBuyerOfferMutation,
} from "@/services/apiSlice";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import { Divider, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
// import DeleteOfferDialog from "./DeleteOfferConfirmationModal";
// import PauseOfferDialog from "./PauseOfferConfirmationModal";
// import ActivateOfferDialog from "./ActivateOfferConfirmationModal";
import { OfferRowSkeletonLoader } from "@/components";
import Naira from "@/components/CalculateComponents/Naira";
import { calculateAmountToRecieve } from "@/utils";

const UserDetailsFetcher = ({ uuid }) => {
  const userDetailsQuery = useFetchUserDetailsQuery(uuid);

  const {
    data: userData,
    isError: IsErrorUserData,
    error: ErrorUserData,
    isSuccess: IsSuccessUserData,
    isFetching: IsFetchingUserData,
    isLoading: IsLoadingUserData,
  } = userDetailsQuery;
  // console.log({ userDetailsQuery, userData, uuid });
  // Handle loading, error, and success states here

  return (
    <div className="flex items-center space-x-2">
      {/* Render user details */}
      {IsSuccessUserData && (
        <>
          {/* <BackgroundLetterAvatars userName={userData?.user?.data?.username} /> */}

          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt={userData?.user?.data?.username}
            src="/broken-image.jpg"
          />
          <p className="text-sm font-karla font-bold text-lightGray">
            {userData?.user?.data?.username}
          </p>
        </>
      )}
      {/* Render loading state */}
    </div>
  );
};
export default function UserTransactionTables({
  dataTransac,
  IsSuccess,
  IsFetching,
  IsLoading,
  getEWalletName,
  rateData,
  IsSuccessRateData,
}) {
  console.log({ rateData });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogPause, setOpenDialogPause] = useState(false);
  const [openDialogActivate, setOpenDialogActivate] = useState(false);
  const [buyerIds, setBuyerIds] = useState({ uuid: "", id: "" });
  console.log(buyerIds);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenDialog = (row) => {
    setOpenDialog(true);
  };

  const handleOpenPauseDialog = () => {
    setOpenDialogPause(true);
    handleClose();
  };

  const handleOpenActivateDialog = () => {
    setOpenDialogActivate(true);
    handleClose();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseDialogPause = () => {
    setOpenDialogPause(false);
  };
  const handleCloseDialogActivate = () => {
    setOpenDialogActivate(false);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event, row) => {
    console.log({ row, event });
    setAnchorEl(event.currentTarget);
    setBuyerIds({ uuid: row?.uuid, id: row?.id });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function subtractPercentage(row, rateData) {
    let result;
    if (row?.fixed_rate === null || row?.fixed_rate == "") {
      const percentage = row?.percentage / 100;

      // Calculate the percentage value
      const percentageValue = rateData * percentage;

      // Subtract the percentage value from the original number
      result = rateData - percentageValue;
    } else {
      result = row?.fixed_rate;
    }
    // Percentage to subtract (0.5%)
    console.log("result,", result);
    return result;
  }

  const [pausesBuyerOffer, { data, isError, isLoading, error }] =
    usePausesBuyerOfferMutation();
  const [
    activateBuyerOffer,
    {
      data: activateData,
      isError: activateError,
      isLoading: IsLoadingActivate,
      error: Erroractivate,
    },
  ] = useActivateBuyerOfferMutation();
  console.log({ error });
  const handlePauseBuyerOffer = async (e) => {
    e.preventDefault();
    try {
      const response = await pausesBuyerOffer(buyerIds);
      console.log({ response }, "response?.status", response?.status);
      if (response?.data?.status == 200) {
        await handleCloseDialogPause();
      } else {
        console.log("error not completed");
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred" || error);
      }
      toast.error(error?.message || "An error occurred" || error);
    }
  };
  const handleActivateBuyerOffer = async (e) => {
    e.preventDefault();
    try {
      const response = await activateBuyerOffer(buyerIds);
      console.log({ response });
      if (response?.data?.status == 200) {
        handleCloseDialogActivate();
      } else {
        console.log("error not completed");
      }
    } catch (error) {
      console.log({ error });
      if (isError) {
        toast.error(error?.message || "An error occurred" || error);
      }
      toast.error(error?.message || "An error occurred" || error);
    }
  };

  // Example usage

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows =
    IsSuccess && dataTransac?.data?.data?.slice(startIndex, endIndex);
  const totalRows = (IsSuccess && dataTransac?.data?.data?.length) || 0;
  console.log({ totalRows });

  // setOfferId(displayedRows.map((row) => row?.uuid));
  console.log({ displayedRows });
  // const calculateAmountToRe = calculateAmountToRecieve(
  //   data?.rateData,
  //   data?.request?.amount
  // );
  return (
    <>
      <TableContainer component={Paper}>
        {IsFetching || IsLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
            <OfferRowSkeletonLoader key={key} />
          ))
        ) : (
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow className="w-full bg-black  shadow-md lg:px-4">
                <TableCell>Payment Methods</TableCell>
                <TableCell align="center">Counterparty</TableCell>
                <TableCell align="center"> Amount</TableCell>{" "}
                <TableCell align="center"> Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {IsSuccess &&
                displayedRows?.map((row) => {
                  return (
                    <TableRow key={row?.id}>
                      <TableCell>
                        <div className="flex items-start space-x-4">
                          {/* <img
                            src={
                              "https://offerbased.ratefy.co/storage/images/ewallets/" +
                              row?.ewallet?.image_url
                            }
                            alt={row?.ewallet?.ewallet_name}
                            className="rounded-row h-[24px] w-[24px] "
                          /> */}
                          <div className="flex flex-col items-start justify-start space-y-2">
                            <p className="font-karla text-left md:text-xl text-base lg:text-2xl font-medium capitalize text-white">
                              {row?.item_name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* <UserDetailsFetcher uuid={row.uuid} /> */}
                        </div>
                      </TableCell>{" "}
                      <TableCell align="center">
                        <div className="text-white px-2">
                          <UserDetailsFetcher uuid={row.owner_id} />
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="lg:col-span-4 xl:col-span-4">
                          <div className="flex items-center justify-center space-x-2">
                            <div className=" flex flex-col items-end justify-center space-y-1 ">
                              <div className="h-6 ">
                                <p className="h-full  py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                                  rate
                                </p>
                              </div>
                              <div className="h-6">
                                <p className="h-full py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                                  amount to send
                                </p>
                              </div>
                              <div className="h-6">
                                <p className="h-full py-[2px] text-right font-karla text-xs font-normal capitalize text-subText">
                                  amount to receive
                                </p>
                              </div>
                            </div>
                            <div className=" flex flex-col items-start justify-center space-y-1 ">
                              <div className="h-6 ">
                                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                                  <Naira value={rateData?.data?.rate_normal} />
                                </p>
                              </div>
                              <div className="h-6">
                                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                                  &#36; {row?.amount}
                                </p>
                              </div>
                              <div className="h-6">
                                <p className="text-left font-karla text-[16px] font-normal capitalize text-lightGray">
                                  {/* {data?.amount.amountToReceive.currency}{" "}
                                  {data?.amount.amountToReceive.value} */}
                                  <Naira
                                    value={calculateAmountToRecieve(
                                      rateData?.data?.rate_normal,
                                      row?.amount
                                    )}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {/* <div className="flex justify-center">
                          <div className="justify-cent flex flex-col items-start space-y-2">
                            <div className="flex items-center space-x-2">
                              <p className="text-secondary">Avg:</p>
                              <p className="flex items-center space-x-2 text-white">
                                {row?.duration}
                                <AccessTime
                                  color="primary"
                                  className="ml-2 w-6"
                                  size="6"
                                />
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <p className="text-secondary">Min:</p>
                              <p className="text-white">{row?.min_amount}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <p className="text-secondary">Max:</p>
                              <p className="text-white text-center text-ellipsis">
                                {row?.max_amount}
                              </p>
                            </div>
                          </div>
                        </div> */}

                        <div
                          className={` ${
                            row?.status === "open"
                              ? "text-green-600"
                              : "text-grayColor"
                          } px-2`}
                        >
                          {row?.session_status}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="lg:col-span-2 xl:col-span-2">
                          <Link
                            href={`/transaction/${row?.id}/${row?.acceptance_id}/${row?.session_id}`}
                          >
                            <div className="flex justify-end">
                              <div className="flex h-[30px] w-[100px] cursor-pointer items-center justify-center rounded-[3px] bg-primary transition duration-300 hover:opacity-90 active:opacity-90">
                                <p className="text-center font-karla text-lg font-bold text-white">
                                  Action
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={totalRows}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      {/* <DeleteOfferDialog
        handleClickOpen={handleOpenDialog}
        handleClose={handleCloseDialog}
        open={openDialog}
      />
      <PauseOfferDialog
        handlePauseBuyerOffer={handlePauseBuyerOffer}
        handleClose={handleCloseDialogPause}
        open={openDialogPause}
      />{" "}
      <ActivateOfferDialog
        handlePauseBuyerOffer={handleActivateBuyerOffer}
        handleClose={handleCloseDialogActivate}
        open={openDialogActivate}
      /> */}
    </>
  );
}
