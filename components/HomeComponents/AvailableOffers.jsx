"use client";

import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
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
import { availableOffers } from "@/utils/data";
import { AccessTime } from "@mui/icons-material";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,   calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "user",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "payment-methods",
    numeric: true,
    disablePadding: false,
    label: "Payment Methods",
  },
  {
    id: "tags",
    numeric: true,
    disablePadding: false,
    label: "Tags",
  },
  {
    id: "limit-and-speed",
    numeric: true,
    disablePadding: false,
    label: "Limit & Speed",
  },
  {
    id: "exchange-rate",
    numeric: true,
    disablePadding: false,
    label: "Exchange Rate / $",
  },
];

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
            align="center"
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

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function AvailableOffers() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
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
              rowCount={rows.length}
            />

            <TableBody>
              {availableOffers.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.name + index}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      align="left"
                      // className="flex items-center space-x-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          alt={row.name}
                          src={row.avatar}
                          className="h-12 w-12 rounded-full"
                        />
                        <div className="ml-2 text-lg font-medium">
                          {" "}
                          {row.name}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" >
                      <p className="text-xl font-semibold text-white">
                        {row.paymentMethod}
                      </p>
                    </TableCell>
                    <TableCell align="center" >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        {row.tags.map((tag, key) => (
                          <div key={tag + key} className="border-secondary rounded border px-4 py-2">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell align="center" >
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <p className="text-secondary">Avg:</p>
                          <p className="flex items-center space-x-2 text-white">
                            {row.limitAndSpeed?.avg}{" "}
                            <AccessTime
                              color="primary"
                              className="ml-2 w-6"
                              size="6"
                            />
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <p className="text-secondary">Min:</p>
                          <p className="text-white">
                            {row.limitAndSpeed?.min}{" "}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <p className="text-secondary">Max:</p>
                          <p className="text-white">
                            {row.limitAndSpeed?.max}{" "}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="center" >
                      <div className="flex flex-col space-y-2">
                        <p className="text-2xl font-semibold text-white">
                          {row.exchangeRate}
                        </p>
                        <div className="rounded capitalize bg-primary p-2 text-lg font-medium text-white transition duration-150 hover:bg-primary/90 active:bg-primary/90">
                          {row.offerType}
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
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
