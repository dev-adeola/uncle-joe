"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled } from "@mui/material";
import UserTransactionTable from "./UserTransactionTable";

const labels = ["Active Transactions", "Past Transaction"];

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
      {value === index && <div> {children} </div>}
    </div>
  );
}

const CustomTabs = styled((props) => <Tabs {...props} />)({
  ".MuiTabs-indicator": {
    display: "none",
  },
  "&.MuiTabs-root": {
    minHeight: "28px",
    height: "28px",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    padding: 0,
    margin: 0,
    width: "fit",
    textTransform: "none",
    color: "#a6a6a6",
    "&.MuiTab-root": {
      minHeight: "28px",
      height: "28px",
      minWidth: "fit-content !important",
      width: "fit !important",
    },
    "&.Mui-selected ": {
      color: "#00B172",
    },
    "&.Mui-selected > .activeTabBorder": {
      borderBottom: "12px !important",
      borderColor: "#00B172 !important",
    },
  })
);

export default function UserTransactionTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }} className="space-y-4">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MobileTabs handleChange={handleChange} value={value} />
        <DesktopTabs handleChange={handleChange} value={value} />
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UserTransactionTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <UserTransactionTable />
      </CustomTabPanel>
    </Box>
  );
}

const MobileTabs = ({ value, handleChange, props }) => {
  return (
    <CustomTabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      aria-label="user transactions"
      className="w-full md:w-fit space-x-4 md:space-x-6 md:hidden"
      {...props}
    >
      {labels.map((label) => (
        <CustomTab
          key={label}
          label={
            <div className="text-center text-sm md:text-[16px] xl:text-lg font-rubik font-medium  capitalize p-0 h-full activeTabBorder">
              {label}
            </div>
          }
        />
      ))}
    </CustomTabs>
  );
};

const DesktopTabs = ({ value, handleChange, props }) => {
  return (
    <CustomTabs
      variant="standard"
      value={value}
      onChange={handleChange}
      aria-label="user transactions"
      className="space-x-8 hidden md:block"
      {...props}
    >
      {labels.map((label) => (
        <CustomTab
          key={label}
          label={
            <div className="text-center text-sm md:text-[16px] xl:text-lg font-rubik font-medium mr-8 capitalize p-0 h-full activeTabBorder">
              {label}
            </div>
          }
        />
      ))}
    </CustomTabs>
  );
};
