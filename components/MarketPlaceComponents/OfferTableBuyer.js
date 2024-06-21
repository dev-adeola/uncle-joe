import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AccessTime } from "@mui/icons-material";
import { OfferRowSkeletonLoader } from "..";
import TablePagination from "@mui/material/TablePagination";
import { useFetchUserDetailsQuery } from "@/services/apiSlice";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";

const TAX_RATE = 0.07;

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

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
export default function BuyerTableOffer({
  dataSellerOffer,
  IsSuccessSellerOffer,
  IsFetchingSellerOffer,
  IsLoadingSellerOffer,
  getEWalletName,
  rateData,
  IsSuccessRateData,
}) {
  console.log({ rateData });
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
      console.log(
        { percentage, percentageValue },
        "rateData?.rate_normal",
        rateData,
        "row?.percentage",
        row?.percentage,
        "row?.fixed_rate;",
        row?.fixed_rate
      );
    } else {
      result = row?.fixed_rate;
    }
    // Percentage to subtract (0.5%)
    console.log("result,", result);
    return result;
  }

  // Example usage
  const originalNumber = 1139;
  const result = subtractPercentage(originalNumber);
  console.log(result); // Output: 1133.305

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
    <TableContainer component={Paper}>
      {IsFetchingSellerOffer || IsLoadingSellerOffer ? (
        [1, 2, 3, 4, 5, 6, 7, 8].map((key) => (
          <OfferRowSkeletonLoader key={key} />
        ))
      ) : (
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow className="w-full bg-black px-4 shadow-md lg:px-6">
              <TableCell colSpan={3}></TableCell>
              <TableCell colSpan={2} align="right">
                {" "}
                payment methods.
              </TableCell>
              <TableCell colSpan={3} align="center">
                Tags
              </TableCell>
              <TableCell colSpan={2} align="center">
                {" "}
                Limits & Speed
              </TableCell>
              <TableCell align="right">Exchange Rate /$</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {IsSuccessSellerOffer &&
              displayedRows?.map((row) => {
                return (
                  <TableRow key={row?.id}>
                    <TableCell colSpan={3}>
                      <div className="flex items-center space-x-2">
                        <UserDetailsFetcher uuid={row.uuid} />
                      </div>
                    </TableCell>
                    <TableCell colSpan={2} align="right">
                      <div className="text-white px-2">
                        {getEWalletName(row?.ewallet_id)}
                      </div>
                    </TableCell>
                    <TableCell colSpan={3} align="center">
                      <div className="text-white px-2">
                        {row.buyerofferrequirement?.map(
                          (requirement, index) => (
                            <span key={index}>
                              {requirement.requirement.requirement}
                              {index !== row.buyerofferrequirement.length - 1 &&
                                ", "}
                            </span>
                          )
                        )}
                      </div>
                    </TableCell>
                    <TableCell colSpan={2} align="right">
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
                      <div className="flex flex-col text-center items-end space-y-2">
                        <p className="lg:text-2xl  md:text-lg text-center font-semibold text-white">
                          {subtractPercentage(row, rateData?.data?.rate_normal)}
                        </p>
                        <Link
                          href={`/marketplace/buy/calculate/${row?.id}`}
                          className="flex h-[34px] w-[116px] items-center justify-center cursor-pointer rounded-[3px] bg-primary p-2  transition duration-150 hover:bg-primary/90 active:bg-primary/90"
                        >
                          <p className="font-karla text-lg font-bold capitalize text-white">
                            Buy
                          </p>
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
  );
}
