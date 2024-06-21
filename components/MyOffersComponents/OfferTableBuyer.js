import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AccessTime, NavigateNext } from "@mui/icons-material";
import { OfferRowSkeletonLoader } from "..";
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
import DeleteOfferDialog from "./DeleteOfferConfirmationModal";
import PauseOfferDialog from "./PauseOfferConfirmationModal";
import ActivateOfferDialog from "./ActivateOfferConfirmationModal";

export default function MyOfferBuyerTableOffer({
  dataSellerOffer,
  IsSuccessSellerOffer,
  IsFetchingSellerOffer,
  IsLoadingSellerOffer,
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
    IsSuccessSellerOffer &&
    dataSellerOffer?.response?.data?.slice(startIndex, endIndex);
  const totalRows =
    (IsSuccessSellerOffer && dataSellerOffer?.response?.data?.length) || 0;
  console.log({ totalRows });

  // setOfferId(displayedRows.map((row) => row?.uuid));

  return (
    <>
      <TableContainer component={Paper}>
        {IsFetchingSellerOffer || IsLoadingSellerOffer ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
            <OfferRowSkeletonLoader key={key} />
          ))
        ) : (
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow className="w-full bg-black  shadow-md lg:px-4">
                <TableCell>E-Wallet Methods</TableCell>
                <TableCell align="center">Labels</TableCell>
                <TableCell align="center"> status</TableCell>{" "}
                <TableCell align="center"> Limits & Speed</TableCell>
                <TableCell align="right">Exchange Rate /$</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {IsSuccessSellerOffer &&
                displayedRows?.map((row) => {
                  return (
                    <TableRow key={row?.id}>
                      <TableCell>
                        <div className="flex items-start space-x-4">
                          <img
                            src={
                              "https://offerbased.ratefy.co/storage/images/ewallets/" +
                              row?.ewallet?.image_url
                            }
                            alt={row?.ewallet?.ewallet_name}
                            className="rounded-row h-[24px] w-[24px] "
                          />
                          <div className="flex flex-col items-start justify-start space-y-2">
                            <p className="font-karla text-left md:text-xl text-base lg:text-2xl font-medium capitalize text-white">
                              {row?.ewallet?.ewallet_name}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* <UserDetailsFetcher uuid={row.uuid} /> */}
                        </div>
                      </TableCell>{" "}
                      <TableCell align="center">
                        <div className="text-white px-2">
                          {row.buyerofferrequirement?.map(
                            (requirement, index) => (
                              <span key={index}>
                                {requirement.requirement.requirement}
                                {index !==
                                  row.buyerofferrequirement.length - 1 && ", "}
                              </span>
                            )
                          )}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div
                          className={` ${
                            row?.status === "active"
                              ? "text-green-600"
                              : "text-grayColor"
                          } px-2`}
                        >
                          {row?.status === "active" ? "ON" : "OFF"}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex justify-center">
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
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex flex-col px-2 text-center items-end space-y-2">
                          <p className="lg:text-2xl  md:text-lg text-center font-semibold text-white">
                            {subtractPercentage(
                              row,
                              rateData?.data?.rate_normal
                            )}
                          </p>
                          <div>
                            <div
                              id="offer-basic-button"
                              aria-controls="offer-basic-menu"
                              aria-haspopup="true"
                              aria-expanded={open}
                              onClick={(event) => handleClick(event, row)}
                              className="flex h-[33px] w-[126px] bg-[#505050] cursor-pointer items-center justify-between rounded-[5px] transition duration-300 hover:opacity-90 active:opacity-90 py-2 px-4"
                            >
                              <p className="text-left font-karla text-lg font-bold text-lightGray">
                                Action
                              </p>
                              <p className="text-lightGray">
                                <NavigateNext fontSize="medium" />
                              </p>
                            </div>

                            {/*  */}
                            <Menu
                              className="w-full"
                              id="offer-basic-menu"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                "arioffer-a-labelledby": "basic-button",
                              }}
                            >
                              <Stack
                                direction={"column"}
                                divider={
                                  <Divider
                                    color="#272727"
                                    orientation="horizontal"
                                  />
                                }
                                className="h-fit w-[126px] max-w-[126px] cursor-pointer overflow-y-auto rounded-[5px] bg-black p-1 "
                              >
                                <MenuItem>
                                  <div onClick={handleOpenPauseDialog}>
                                    <p className="font-rubik capitalize text-sm font-medium text-yellow-500 ">
                                      Pause
                                    </p>
                                  </div>{" "}
                                </MenuItem>

                                <MenuItem>
                                  <div onClick={handleOpenActivateDialog}>
                                    <p className="font-rubik capitalize text-sm font-medium text-secondary ">
                                      Activate
                                    </p>
                                  </div>
                                </MenuItem>

                                <MenuItem>
                                  <div onClick={handleOpenDialog}>
                                    <p className="font-rubik capitalize text-sm font-medium text-red-500 ">
                                      Delete
                                    </p>
                                  </div>
                                </MenuItem>
                              </Stack>
                            </Menu>
                          </div>
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
      <DeleteOfferDialog
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
      />
    </>
  );
}
