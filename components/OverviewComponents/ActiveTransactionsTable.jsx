"use client";

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { headCells } from "@/utils/data";
import { getComparator, stableSort } from "@/utils/sortTable";

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

//
EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function ActiveTransactionsTable({activeTransactions}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty activeTransactions.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - activeTransactions.length)
      : 0;

  const visibleRows = useMemo(
    () =>
      stableSort(activeTransactions, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={activeTransactions.length}
            />

            <TableBody>
              {activeTransactions.map((activeTransaction, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      align="left"
                      // className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          alt={activeTransaction.paymentMethod.logo}
                          src={activeTransaction.paymentMethod.logo}
                          className="h-[53px] w-[53px] rounded-full"
                        />
                        <div className="ml-2 text-[25px] font-bold text-lightGray">
                          {activeTransaction.paymentMethod.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex items-center space-x-4">
                        <img
                          alt={activeTransaction.counterParty.avatar}
                          src={activeTransaction.counterParty.avatar}
                          className="h-[43px] w-[43px] rounded-full"
                        />
                        <div className="ml-2 text-[20px] font-medium text-subText">
                          {activeTransaction.counterParty.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center justify-center space-x-2">
                          <p className="text-[10px] font-normal text-subText">
                            Amount to Send
                          </p>
                          <p className="text-[15px] font-normal text-lightGray">
                            {activeTransaction.amount.amountToSend.currency}
                            {activeTransaction.amount.amountToSend.value}
                          </p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <p className="text-[10px] font-normal text-subText">
                            Amount to Send
                          </p>
                          <p className="text-[15px] font-normal text-lightGray">
                            {activeTransaction.amount.amountToReceive.currency}
                            {activeTransaction.amount.amountToReceive.value}
                          </p>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <p className="text-[10px] font-normal text-subText">
                            Rate
                          </p>
                          <p className="text-[15px] font-normal text-lightGray">
                            {activeTransaction.amount.rate.currency}
                            {activeTransaction.amount.rate.value}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <p className="text-[15px] text-center font-bold text-lightGray capitalize">
                        {activeTransaction.status}
                      </p>
                    </TableCell>
                    <TableCell align="right">
                      <div className="flex flex-col items-end justify-start space-y-4">
                        <p className="text-sm font-normal text-subText">
                          Data & Time: {activeTransaction.dateAndTime}
                        </p>
                        <div className="flex h-[40px] w-[116px] items-center justify-center rounded-md bg-primary text-lg font-bold text-white transition duration-300 hover:opacity-90 active:opacity-90">
                          Action
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={activeTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
